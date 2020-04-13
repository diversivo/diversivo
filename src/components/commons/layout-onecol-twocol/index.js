import React from 'react';
import PropTypes from 'prop-types';

const LayoutOneColTwoCol = ({ img, alt, pre, title, subtitle }) => (
  <div className="grid-onecol-twocol">
    <div className="grid-onecol-twocol__main">
      <img className="grid-onecol-twocol__img" src={img} alt={alt} />
    </div>
    <div className="grid-onecol-twocol__title">
      <pre>{pre}</pre>
      <h1>{title}</h1>
    </div>
    <div className="grid-onecol-twocol__subtitle">
      <h5>{subtitle}</h5>
    </div>
  </div>
);

LayoutOneColTwoCol.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  pre: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

LayoutOneColTwoCol.defaultProps = {
  img: 'Alt Missing',
  alt: 'Alt Missing',
  pre: 'Entry missing',
  title: 'Title Missing',
  subtitle: 'SubTitle Missing',
};

export default LayoutOneColTwoCol;
