import React from 'react';

const ContactForm = () => (
  <form className="form">
    <label htmlFor="name">Nombre*:</label>
    <input name="name" id="name" type="text" />
    <label htmlFor="email">Correo Eléctronico*:</label>
    <input name="email" id="email" type="text" />
    <label htmlFor="message">Mensaje*:</label>
    <textarea name="message" rows="4" cols="50" id="message" />
    <button className="button button--primary">Envíar</button>
  </form>
);

export default ContactForm;
