import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ title, img, alt }) => (
  <div className="content">
    <div className="main-secondary">
      <h1>{title}</h1>
      <img src={img} alt={alt} />
    </div>
  </div>
);

Slider.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
};


Slider.defaultProps = {
  title: 'Titulo',
  img: '',
  alt: 'Diversivo - no alt',
};

export default Slider;
