import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

import './form.css';

 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cswcxye', 'template_b8vg4d9', form.current, 'GFOMp9Jvomjj0tYBH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className="contact-form">
    <form ref={form} onSubmit={sendEmail}>
     <div className="div form-name">
      <label>Name</label>
      <input type="text" name="user_name" /> </div>
      <div className="div form-email">
      <label>Email</label>
      <input type="email" name="user_email" /> </div>
      <div className="form-message">
      <label>Message</label>
      <textarea className ="form-textarea" rows="10" cols="30" name="message" />
      <div className="div form-send">
      <input type="submit" value="Send" /> </div>
      </div>
    </form>
    </div>
    </>
  );
};

export default ContactForm;