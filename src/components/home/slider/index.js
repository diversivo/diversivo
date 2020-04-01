import React from 'react';
import mainImage from '../../../assets/images/arte-principal.png';


const Slider = () => (
  <div className="container h-100vh">
    <div className="content">
      <div className="g-2fr-3fr">
        <div className="content__left order-s2-m1">
          <pre>
            bienvenido
          </pre>
          <h1>
            Ayudamos a marcas y negocios a ganar ventaja competitiva en un mundo conectado.
          </h1>
        </div>
        <div className="content__right order-s1-m2">
          <img src={mainImage} alt="arte principal" />
        </div>
      </div>
    </div>
  </div>
);

export default Slider;
