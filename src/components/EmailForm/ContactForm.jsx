import React, { useState } from "react";
import "./ContactForm.css"
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/endpoint', {
        name: name,
        email: email,
        message: message,
      });

      console.log(response.data);
      if (response.data) {
        alert("thanks we'll in contact you shortly")
        setName("")
        setEmail("")
        setMessage("")
      }
      // Handle the response from the server here
    } catch (error) {
      console.error(error);
      alert("we had an error on out end. please contact our support")
      // Handle errors here
    }
  };

  return (
    <div className='contact-form'>
      <h2>Want to Learn More? <br></br>Request a <span className="title-decoration">Free</span> Meeting Now!</h2>
      <form onSubmit={sendEmail}>
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
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;

