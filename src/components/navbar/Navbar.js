import React from 'react';
import "./navbar.css";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleLinks = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="app__navbar">
        <div className="app__navbar__logo">
            <h3>Gerícht</h3>
        </div>
        <div className="app__navbar__links">
            <p>Home</p>
            <p>pages</p>
            <p>contact us</p>
            <p>Blogs</p>
            <p>landing</p>
        </div>
        <div className="app__navbar__signin">
            <p>Signin / register</p>
            <div />
            <p>Table orders</p>
        </div>
        <div className="app__navbar__menu__container">
          { <span className="app__navbar__menu__icon" onClick={toggleLinks}>
            ☰
          </span>}
          {showMenu && ( <div className="app__navbar__menu">
          <span className="app__navbar__close" onClick={toggleLinks}>
              ✕
            </span>
          <div className="app__navbar__small__devices__links">
            <p>Home</p>
            <p>pages</p>
            <p>contact us</p>
            <p>Blogs</p>
            <p>landing</p>
          </div>
        </div>
          )
        }
        </div>
    </div>
  )
}

export default Navbar