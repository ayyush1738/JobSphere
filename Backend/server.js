const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const sharp = require('sharp'); // Optional: for validating image format

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    // Accept only image files
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(file.mimetype);
    const mimetype = allowedTypes.test(file.originalname.split('.').pop().toLowerCase());
    
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only images are allowed'));
  },
});

app.post('/upload', upload.single('file'), async (req, res) => {
  const { buffer } = req.file;

  try {
    // Validate image format
    await sharp(buffer).metadata();
    
    const { data: { text } } = await Tesseract.recognize(buffer, 'eng', {
      logger: info => console.log(info)
    });
    const skills = extractSkills(text);
    res.json({ skills });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Error processing image');
  }
});

  

const extractSkills = (text) => {
  // Implement your logic to extract skills from text
  return text.split('\n').filter(line => line.length > 0); // Example
};

app.post('/jobs', async (req, res) => {
  const { skills } = req.body;

  try {
    const jobs = await fetchJobsFromLinkedIn(skills);
    res.json({ jobs });
  } catch (error) {
    res.status(500).send('Error fetching jobs');
  }
});

const fetchJobsFromLinkedIn = async (skills) => {
  // Implement LinkedIn API integration here
  // This is a placeholder
  return [{ title: 'Software Engineer', company: 'Tech Corp' }];
};

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
