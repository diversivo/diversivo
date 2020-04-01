
import React from 'react';
import IsometricArt from '../../../assets/svg/stylesheet/isometric-art-tecnology.svg';

// DQ: Review ways to import SVG
const Stack = () => (
  <div className="container">
    <div className="content h-100v">
      <div className="g-30-70">
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
        <div className="content__left">
          <img
            className="seccionMejoresTecnologias__img"
            src={IsometricArt}
            alt="Mejores tecnologías arte"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Stack;
