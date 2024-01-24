import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // implementazione per l'invio del form
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea className='message-box'
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className='submit-btn' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;