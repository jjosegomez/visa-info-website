import formData from 'form-data';
import Mailgun from '../../../mailgun.js';
import React, { useState } from "react";
import "./ContactForm.css"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    let message = `name -> ${name}\nemail -> ${email}\nmessage -> ${message}`;
    console.log(message)
    // 
    const API_KEY = 'a38fa04598d9cd7ee1b08f0e516baaff-3750a53b-7cf1953d';
    const DOMAIN = 'sandbox81c55d3eee84414da39d2d74fb3fed9d.mailgun.org';


    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: 'api', key: API_KEY });

    sendEmail = (message) => {

      const messageData = {
        from: 'EB-2 Visa Advisor <me@sandbox81c55d3eee84414da39d2d74fb3fed9d.mailgun.org>',
        to: ['jjgomezswe@gmail.com', 'gomezcardenasricardo@gmail.com'],
        subject: 'New Visa Information Client!!',
        text: message
      };

      client.messages.create(DOMAIN, messageData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    //
  };

  return (
    <div className='contact-form'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Enter your name'
          value={name} // Removed the function call
          onChange={(e) => setName(e.target.value)} // Use onChange to update the state
          required
        ></input>

        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter your email'
          value={email} // Removed the function call
          onChange={(e) => setEmail(e.target.value)} // Use onChange to update the state
          required
        ></input>

        <textarea
          id="message"
          name="message"
          placeholder='Write us a message!'
          value={message} // Removed the function call
          onChange={(e) => setMessage(e.target.value)} // Use onChange to update the state
          rows="4"
          required
        ></textarea>
        <input style={{ width: "150px" }} type="submit" value="Contact Us" />
      </form>
    </div>
  );
};

export default ContactForm;

