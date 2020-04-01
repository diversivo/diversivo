import React from 'react';
import { Link } from 'gatsby';

const OurWork = () => (
  <div className="container bg-white">
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
          fontSize: '1.25rem',
        }}
        >
          TE PODEMOS AYUDAR EN
        </pre>
        <h1 className="seccionQueHacemos__title">
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
);

export default OurWork;
