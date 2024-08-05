import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <div className="index-page">
      <header
        id="header"
        className={`header d-flex align-items-center position-absolate ${
          mobileNavActive ? "mobile-nav-active" : ""
        }`}
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="sitename">AgriCulture</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="index.html" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="services.html">Activities</a>
              </li>
              <li>
                <a href="testimonials.html">Our Products</a>
              </li>
              <li>
                <a href="blog.html">Gallery</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={handleMobileNavToggle}
              style={{ marginTop: "10px", color: "#2d465e" }}
            >
              <GiHamburgerMenu />
            </i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
