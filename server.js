const express = require('express');
const bodyParser = require('body-parser');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

require('dotenv').config();

const app = express();

// process.env.USER_ID
// process.env.USER_KEY
// process.env.NODE_ENV

function sendEmail(message){
const API_KEY = process.env.MAILGUN_API;
const DOMAIN = process.env.MAILGUN_DOMAIN;

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

const messageData = {
  from: 'EB-2 Visa Advisor <me@sandbox81c55d3eee84414da39d2d74fb3fed9d.mailgun.org>',
  to: ['jjgomezswe@gmail.com', 'gomezcardenasricardo@gmail.com'],
  subject: 'New Visa Information Client!!',
  text: message
};
let isSent = null
client.messages
  .create(DOMAIN, messageData)
  .then((response) => {
    console.log(response);
    isSent = true
  })
  .catch((error) => {
    console.error(error);
    isSent = false
  });
  console.log("email sent? ",isSent)
  return isSent
}

const cors = require('cors'); // Import the cors middleware
const port = 3001; // You can choose any available port

// Middleware to parse JSON in request body
app.use(bodyParser.json());

app.use(cors({
  origin: '*',
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type, Authorization',
}));

// Define a route to handle POST requests
app.post('/api/endpoint', (req, res) => {
  const { name, email, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Input string is required.' });
  }

  // Process the input string (you can perform any operation here)
  const processedString = `New Client!\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;
  
  isSent = sendEmail(processedString)

  res.json({ response: isSent });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});