
import React from 'react';
import IsometricArt from '../../../assets/images/tecnologias-isometrica.jpg';

// DQ: Review ways to import SVG
const Stack = () => (
  <div className="container">
    <div className="content height-100vh">
      <div className="grid-col40-col60">
        <div className="content__right">
          <pre>
            PARA UN MUNDO CONECTADO
          </pre>
          <h2 className="biggerTitle">
            Usamos
            <br />
            las mejores
            <br />
            tecnologías.
          </h2>
        </div>
        <div className="content__left stack-animation__content">
          <div className="stack-animation__box stack-animation__box__frontend" />
          <div className="stack-animation__box stack-animation__box__develop" />
          <div className="stack-animation__box stack-animation__box__backend" />
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
