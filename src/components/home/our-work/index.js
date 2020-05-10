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
        color: 'black',
        zIndex: 1000,
        position: 'absolute',
      }}
    >
      <div
        className="content"
        style={{
          padding: '10rem 0 6rem 0',
        }}
      >
        <div
          className="flex-cc"
          style={{
            textAlign: 'center',
          }}
        >
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
          <Link
            className="content__link"
            to="/our-work/"
          >
            QUE HACEMOS
          </Link>
        </div>
      </div>
    </div>
    <Fluid style={{
      color: 'white',
      height: '100%', // Canvas is will respond to size changes without resetting fluid!
      width: '100%',
      margin: 0,
      position: 'relative',
    }}
    />
  </div>
);

export default OurWork;
