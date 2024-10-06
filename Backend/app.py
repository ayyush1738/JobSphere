from flask import Flask, request, jsonify
import fitz  # PyMuPDF
import os

app = Flask(__name__)
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all domains to access the API


# Create an upload folder
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)  # Open the PDF file
    text = ""
    for page in doc:
        text += page.get_text()  # Extract text from each page
    return text

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    # Save the uploaded file
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    # Extract text from the PDF
    extracted_text = extract_text_from_pdf(file_path)

    # Optionally, you can extract skills from the text here
    skills = extract_skills_from_text(extracted_text)

    return jsonify({'text': extracted_text, 'skills': skills})

def extract_skills_from_text(text):
    # Here, you could implement a method to extract skills from the text.
    # For simplicity, let's just return a mock list of skills.
    return ["Python", "JavaScript", "React"]

if __name__ == '__main__':
    app.run(debug=True)
