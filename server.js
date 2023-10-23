const express = require('express');
const bodyParser = require('body-parser');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const cors = require("cors");

const app = express();
const PORT = 5050;

app.use(bodyParser.json());
// Define the route to handle POST requests
app.post('/send-email', (req, res) => {
  res.send("Message Receiver");
  res.send(`this is what is got ${res.body}`)
  const API_KEY = 'a38fa04598d9cd7ee1b08f0e516baaff-3750a53b-7cf1953d';
  const DOMAIN = 'sandbox81c55d3eee84414da39d2d74fb3fed9d.mailgun.org';

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: 'api', key: API_KEY });

  const messageData = {
    from: 'EB-2 Visa Advisor <me@sandbox81c55d3eee84414da39d2d74fb3fed9d.mailgun.org>',
    to: ['jjgomezswe@gmail.com', 'gomezcardenasricardo@gmail.com'],
    subject: 'New Visa Information Client!!',
    text: `Hi you have a new client!!\n${req.body.email} | ${req.body.name} is trying to reach out to you out\n\n${req.body.message}`
  };

  client.messages
    .create(DOMAIN, messageData)
    .then((response) => {
      console.log(response);
      console.log(`\"${req.body}\" was sent`);
      res.json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Email sending failed' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});