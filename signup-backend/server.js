const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3004', // Your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/signup')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create a schema and model for emails
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true }
});

const Email = mongoose.model('Email', emailSchema);

// Routes
app.post('/api/signup', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: 'Please enter an email' });
  }

  const newEmail = new Email({ email });

  try {
    await newEmail.save();
    res.status(200).json({ msg: 'Email saved successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

app.get('/api/emails', async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
