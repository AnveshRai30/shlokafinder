import React from "react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Wrapper>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactUs;

const Wrapper = styled.div`
  padding: 150px 20px 20px; /* Added top padding to prevent navbar overlap */
  min-height: 100vh;
  background: #f4f4f4;

  .contact-container {
    max-width: 1100px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  form label {
    display: block;
    margin: 10px 0 5px;
  }

  form input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background: #ff5733;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #e04e2f;
  }
`;
