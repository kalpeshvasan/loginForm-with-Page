import React, { useState } from "react";
import "../styles/header.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo.svg";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="container">
          <div className="content">
            <div className="logo">
              <Link href="home">
                <img src={logo} alt="Logo" className="img-fluid" />
              </Link>
            </div>
            <div
              className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
              }
            >
              <ul>
                <li>
                  <NavLink to="#">Home</NavLink>
                </li>
                <li>
                  <NavLink to="#">About</NavLink>
                </li>
                <li>
                  <NavLink to="#">Products</NavLink>
                </li>
                <li>
                  <NavLink to="#">Services</NavLink>
                </li>
                <li>
                  <NavLink to="#">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="social-media">
              <ul className="social-media-desktop">
                <li>
                  <Link href="#">
                    <FaFacebookSquare className="facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaInstagramSquare className="instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaYoutubeSquare className="youtube" />
                  </Link>
                </li>
              </ul>
              <div className="hamburger-menu">
                <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <GiHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
