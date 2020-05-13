import React from 'react';
import { Link } from 'gatsby';

import Fluid from './fluid';

const OurWork = () => (
  <div style={{
    position: 'relative',
  }}
  >
    <div
      className="container"
      style={{
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <div className="content">
        <div
          className="flex-cc"
          style={{
            textAlign: 'center',
          }}
        >
          <pre className="color-white">
            TE PODEMOS AYUDAR EN
          </pre>
          <h1 className="bigger-title color-white">
            Desarrollo de Software,
            <br />
            Branding y Marketing Digital.
          </h1>
          {/* <Link
            className="content__link"
            to="/our-work"
          >
            QUE HACEMOS
          </Link> */}
        </div>
      </div>
    </div>
    <Fluid style={{
      position: 'relative',
    }}
    />
  </div>
);

export default OurWork;
