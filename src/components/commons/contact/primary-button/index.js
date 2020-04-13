import React, { Component } from 'react';
import { Link } from 'gatsby';

// DQ: Teaching oportunity

class AprimaryButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '/contact',
      name: 'contacto',
    };
  }

  render() {
    const { url, name } = this.state;
    return (
      <Link to={url} className="primaryButton">{name}</Link>
    );
  }
}

export default AprimaryButton;
