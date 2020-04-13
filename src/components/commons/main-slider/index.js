import React from 'react';
import PropTypes from 'prop-types';

const MainSlider = ({ pre, title, text, img, alt }) => (
  <div className="content">
    <div className="main-slider">
      <div className="main-slider__text">
        {
          pre.length > 0 ? <pre>{pre}</pre> : <pre>{pre.defaultProps}</pre>
        }
        {
          title.length > 0 ? <h1>{title}</h1> : <h1>{title.defaultProps}</h1>
        }
        {
          text.length > 0 ? <p>{text}</p> : <p />
        }
      </div>
      {
        img
          ? <div className="main-slider__img"><img src={img} alt={alt} /></div>
          : <p />
      }
    </div>
  </div>
);

MainSlider.propTypes = {
  pre: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
};

MainSlider.defaultProps = {
  pre: '',
  title: 'Titulo',
  text: '',
  img: '',
  alt: 'Diversivo - no alt',
};

export default MainSlider;
