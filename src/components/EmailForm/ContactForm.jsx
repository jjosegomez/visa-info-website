import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to the server).
    // You can use this.state to access form field values.
    console.log(this.state);
  };

  render() {
    return (
      <div className='contact-form'>
        <h1>Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          /><br /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          /><br /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
            rows="4"
            required
          /><br /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;