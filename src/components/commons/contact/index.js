import React from 'react';
import PrimaryButton from './primary-button';

const Contact = () => (
  <div className="container bg__dark-color">
    <div className="cContact__content">
      <div className="cContact__leftBox">
        <h1>¿Listo para hablar?</h1>
        <p>Nos encantaría conocer tus ideas y ayudar a hacerlas realidad.</p>
      </div>
      <div className="cContact__rightBox">
        <PrimaryButton />
      </div>
    </div>
  </div>
);


export default Contact;
