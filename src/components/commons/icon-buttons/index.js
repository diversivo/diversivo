import React from 'react';
import { Link } from 'gatsby';
import Phone from '../../../assets/svg/inline/phone.svg';
import Mail from '../../../assets/svg/inline/mail.svg';
import Whatsapp from '../../../assets/svg/inline/whatsapp.svg';


const IconButtons = () => (
  <div>
    <div className="icon-buttons__box">
      <a className="icon-buttons__link" href="tel:+56948844960">
        <Phone />
      </a>
      <a className="icon-buttons__link" href="mailto:hola@diversivo.cl">
        <Mail />
      </a>
      <a className="icon-buttons__link" href="https://api.whatsapp.com/send?phone=56948844960">
        <Whatsapp />
      </a>
    </div>
  </div>
);

export default IconButtons;
