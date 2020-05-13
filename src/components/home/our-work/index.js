import React from 'react';
import { Link } from 'gatsby';

import Fluid from './fluid';

const OurWork = () => (
  <div className="container-fluid">
    <div className="fluid__content flex-cc">
      <div className="text-align-center">
        <pre style={{
          color: '#A8A8A8',
        }}
        >
          TE PODEMOS AYUDAR EN
        </pre>
        <h1 className="bigger-title">
          Desarrollo de Software,
          <br />
          Branding y Marketing Digital.
        </h1>
      </div>
      <div className="fluid__content-link">
        <Link
          className="fluid__link"
          to="/our-work/"
        >
          QUE HACEMOS
        </Link>
      </div>
    </div>
    <Fluid />
  </div>
);

export default OurWork;
