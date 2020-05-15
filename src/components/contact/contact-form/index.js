import React, { useState, useEffect, useRef } from 'react';

const ContactForm = () => {

  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [descError, setDescError] = useState('');

  const firstRender = useRef(true);

  const submitToAPI = () => {
    const url = 'https://0wv1ypl3ki.execute-api.us-east-1.amazonaws.com/submitContactForm';
    const data = {
      name,
      phone,
      email,
      desc,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false; // it's no longer the first render
      return; // skip the code below
    }
  }, [name, email, phone, desc]);

  return (
    <form className="form" id="contact-form" method="post">
      <label htmlFor="name-input">
        Nombre*:
        <input
          name="name"
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email-input">
        Correo Eléctronico*:
        <input
          name="email"
          id="email-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="phone-input">
        Teléfono*:
        <input
          name="phone"
          id="phone-input"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label htmlFor="description-input">
        Mensaje*:
        <textarea
          name="message"
          rows="4"
          cols="50"
          id="description-input"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <button type="button" className="button button--primary" onClick={(e) => submitToAPI(e)}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
