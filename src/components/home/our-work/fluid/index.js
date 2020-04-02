/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';

export default class Fluid extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <canvas className="fluid-canvas" style={style} />
    );
  }
}
