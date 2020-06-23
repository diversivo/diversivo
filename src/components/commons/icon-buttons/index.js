import React from 'react';
import { Link } from 'gatsby';
import Phone from '../../../assets/svg/inline/phone.svg';
import Mail from '../../../assets/svg/inline/mail.svg';
import Whatsapp from '../../../assets/svg/inline/whatsapp.svg';


const IconButtons = () => (
  <div>
    <div className="icon-buttons__box">
      <Link className="icon-buttons__link" to="tel:+56948844960">
        <Phone />
      </Link>
      <Link className="icon-buttons__link" to="mailto:hola@diversivo.cl">
        <Mail />
      </Link>
      <Link className="icon-buttons__link" to="https://api.whatsapp.com/send?phone=56948844960">
        <Whatsapp />
      </Link>
    </div>
  </div>
);

export default IconButtons;
