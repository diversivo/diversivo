import React from 'react';
import PropTypes from 'prop-types';

const Service = ({ category, header, text, img, alt, cssClass }) => (

  <div className={`${cssClass} content service__content`}>

    <div className="service__text">
      <pre>{category}</pre>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>

    <div className="service__multimedia">
      <img className="service__img" src={img} alt={alt} />
    </div>

  </div>
);

Service.propTypes = {
  category: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  cssClass: PropTypes.string,
};

Service.defaultProps = {
  category: 'Categoría',
  header: 'Titulo',
  text: 'Sin texto aún',
  img: '',
  alt: 'Diversivo - no alt',
  cssClass: '',
};

export default Service;
