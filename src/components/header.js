import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../assets/svg/logodiversivo.svg";
import HamburguerMenu from "../assets/svg/hamburguermenu.svg";


const triggerMenu = () => {
    const menuNav = document.getElementById('js-header__nav')
    menuNav.classList.toggle('js-header__nav--active')
}


const Header = ({ siteTitle, menuLinks }) => (
  <header className="header__container">
    <div className="header__content">
      <div className="header__logo">
          <Link to="/">
            <Logo></Logo>
          </Link>
      </div>
      <div>
        
      </div>
        <HamburguerMenu className="header__hamburguer-menu" id="js-trigger-menu" onClick={triggerMenu}>
        </HamburguerMenu>
      <nav className="header__nav">
            <ul id="js-header__nav" className="header__nav__ul">
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `.75rem 0rem .75rem 2.50rem`,
                    margin: `0`,
                  }}
                >
                  <Link style={{ color: `white`, textDecoration: `none` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
