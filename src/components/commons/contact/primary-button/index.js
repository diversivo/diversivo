import React, { Component } from 'react'
import { Link } from "gatsby"

// DQ: Teaching oportunity

class AprimaryButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      url: "/contacto",
      nombre: "contacto"
    }
  }

  render() {
    return (
      <Link to={this.state.url} className="primaryButton">{this.state.nombre}</Link>
    )
  }
}

export default AprimaryButton
