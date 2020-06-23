import React from 'react';
import MegaPhone from '../../../assets/images/megaphone.png';
import IconButtons from '../icon-buttons';


const Contact = () => (
  <div className="container bg__dark-color contact-call__bg">
    <div className="contact-call">
      <div className="contact-call__image">
        <img src={MegaPhone} alt="Megafono" />
      </div>
      <div className="contact-call__box">
        <div className="contact-call__text">
          <h1 className="bigger-title">Hablemos</h1>
          <h4>Creemos algo único</h4>
        </div>
        <div className="contact-call__actions">
          <IconButtons />
        </div>
      </div>
    </div>
  </div>
);


export default Contact;
