/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './commons/header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div>
        <div>{children}</div>
      </div>
      <footer className="container footer__container">
        <div className="footer__grid">
          <div>
            <p>
              Dr. Manuel Barros Borgoño 71, 1105.
              <br />
              Providencia, Santiago Chile.
              <br />
              hola@diversivo.cl
              <br />
              +569 4884 4960
              <br />
            </p>
            <h6>
              ©
              {new Date().getFullYear()}
              , Todos los derechos reservados Diversivo SPA.
            </h6>
          </div>
          <div className="s-hidden">
            <nav className="footer__nav">
              <ul className="footer__nav__ul">
                <li className="footer__nav__li"><Link to="/our-work">QUE HACEMOS</Link></li>
                <li className="footer__nav__li"><Link to="/trabajos">TRABAJOS</Link></li>
                <li className="footer__nav__li"><Link to="/somos">SOMOS</Link></li>
                <li className="footer__nav__li"><Link to="/contacto">CONTACTO</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
