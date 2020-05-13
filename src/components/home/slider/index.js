import React from 'react';
import bgArt from '../../../assets/video/main-bg-art.mp4';

const Slider = () => (
  <div className="main-slider">
    <video className="main-slider__bg" playsInline autoPlay muted loop id="video">
      <source src={bgArt} type="video/mp4" />
    </video>
    <div className="main-slider__text">
      <pre> bienvenido </pre>
      <h1>
        Ayudamos a marcas y negocios a ganar ventaja competitiva en un mundo conectado.
      </h1>
    </div>
  </div>
);

export default Slider;
