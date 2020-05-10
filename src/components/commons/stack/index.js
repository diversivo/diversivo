
import React from 'react';
import IsometricArt from '../../../assets/images/tecnologias-isometrica.jpg';

// DQ: Review ways to import SVG
const Stack = () => (
  <div className="container bg__dark-color">
    <div className="content">
      <div className="grid-col40-col60">
        <div className="stack__text">
          <pre>EN MUNDO CONECTADO</pre>
          <h1>
            Usamos las mejores tecnologías.
          </h1>
        </div>
        <div className="stack-animation__content">
          <div className="stack-animation__box stack-animation__box__frontend react" />
          <div className="stack-animation__box stack-animation__box__develop ruby" />
          <div className="stack-animation__box stack-animation__box__backend aws" />
          <img
            className="stack__img"
            src={IsometricArt}
            alt="Mejores tecnologías arte"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Stack;
