import React from 'react';

import Bayer from '../../../assets/images/clients/bayer.png';
import Castrol from '../../../assets/images/clients/castrol.png';
import Claro from '../../../assets/images/clients/claro.png';
import HyperX from '../../../assets/images/clients/hyperx.png';
import Pper from '../../../assets/images/clients/p-per.png';
import Polvora from '../../../assets/images/clients/polvora.png';
import Reebok from '../../../assets/images/clients/reebok.png';
import Samsung from '../../../assets/images/clients/samsung.png';

const Clients = () => (
  <div className="grid l-4-col clients-content">
    <img src={Samsung} alt="Logo Cliente Samsung" />
    <img src={Reebok} alt="Logo Cliente Reebok" />
    <img src={HyperX} alt="Logo Cliente HyperX" />
    <img src={Castrol} alt="Logo Cliente Castrol" />
    <img src={Pper} alt="Logo Cliente P-Per" />
    <img src={Polvora} alt="Logo Cliente Polvora" />
    <img src={Claro} alt="Logo Cliente Claro" />
    <img src={Bayer} alt="Logo Cliente Bayer" />
  </div>
);

export default Clients;
