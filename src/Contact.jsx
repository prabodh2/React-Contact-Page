import React from 'react';
import './Contact.css';
import image from './assets/image1.png';

function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className='nam1'>CONTACT</h1>
        <p> For any enquiries, <br /> or just to say hello, <br />get in touch and contact us.</p>
        <form>
          <div className="input-group">
            <div className="input-field">
              <label>First Name</label>
              <input type="text" name="firstName" />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="input-field">
              <label>Phone Number</label>
              <input type="text" name="phoneNumber" />
            </div>
          </div>
          <div className="input-field">
            <label>Message</label>
            <textarea name="message" placeholder="Write your message.."></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={image} alt="Contact illustration" />
      </div>
    </div>
  );
}

export default ContactForm;
