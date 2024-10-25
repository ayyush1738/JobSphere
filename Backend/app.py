import requests
from flask import Flask, request, jsonify
import fitz  # PyMuPDF
import os
import spacy
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Access the environment variables
RAPIDAPI_URL = os.getenv("RAPIDAPI_URL")
RAPIDAPI_HOST = os.getenv("RAPIDAPI_HOST")
RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")

app = Flask(__name__)

# Load the SpaCy model and add EntityRuler
nlp = spacy.load("en_core_web_sm")
ruler = nlp.add_pipe("entity_ruler", before="ner")

patterns = [
    {"label": "job_title", "pattern": "Frontend Developer"},
    {"label": "job_title", "pattern": "Machine Learning"},
    {"label": "job_title", "pattern": "Project Manager"},
    {"label": "job_title", "pattern": "Software Engineer"},
    {"label": "job_title", "pattern": "SDE Intern"},
    {"label": "job_title", "pattern": "SDE"},
    
    # Add more patterns as needed
    {"label": "skill", "pattern": "Python"},
    {"label": "skill", "pattern": "JavaScript"},
    {"label": "skill", "pattern": "NodeJs"},
    {"label": "skill", "pattern": "Express"},
    {"label": "skill", "pattern": "MongoDB"},
    {"label": "skill", "pattern": "FastAPI"},
]
ruler.add_patterns(patterns)

# Function to search jobs using job title
def search_jobs_by_title(job_title):
    payload = {
        "search_term": job_title,
        "location": "",
        "results_wanted": 5,
        "site_name": ["indeed", "linkedin", "zip_recruiter", "glassdoor"],
        "distance": 100,
        "job_type": "fulltime",
        "is_remote": False,
        "linkedin_fetch_description": False,
        "hours_old": 72
    }

    headers = {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": RAPIDAPI_HOST,
        "Content-Type": "application/json"
    }

    response = requests.post(RAPIDAPI_URL, json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()  # Return the jobs data in JSON format
    else:
        return {"error": f"Failed to fetch jobs, status code: {response.status_code}"}

# Extract text from a PDF file using PyMuPDF
def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    # Save the uploaded file
    file_path = os.path.join("uploads", file.filename)
    file.save(file_path)

    # Extract text from the uploaded PDF
    extracted_text = extract_text_from_pdf(file_path)

    # Process the extracted text through SpaCy NLP
    doc = nlp(extracted_text)

    # Extract only 'job_title' entities
    job_titles = [ent.text for ent in doc.ents if ent.label_ == 'job_title']

    # Use the first job title found to search for jobs (if available)
    if job_titles:
        job_title = job_titles[1] # Take the first job title
        jobs = search_jobs_by_title(job_title)  # Fetch job listings from API
    else:
        jobs = []

    # Return the recognized job titles and job search results in JSON format
    return jsonify({'entities': {'job_titles': job_titles, 'skills': []}, 'jobs': jobs})

if __name__ == '__main__':
    app.run(debug=True)
