import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title" id='contactos'>Contáctame</h2>
      <ul className="contact-list">
        <li className="contact-item">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </li>
        <li className="contact-item">
          <a
            href="mailto:tuemail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Correo electrónico
          </a>
        </li>
        <li className="contact-item">
          <a href="tel:+123456789" className="contact-link">
            Teléfono
          </a>
        </li>
        <li className="contact-item">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram
          </a>
        </li>
        <li className="contact-item">
          <a
            href="ruta-a-tu-curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Currículum
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
