import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const navigate = useNavigate();

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileNavActive(false); // Optionally close mobile nav after navigation
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
          <a href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">AgriCulture</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#home" className="active" onClick={() => handleNavigation("/")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => handleNavigation("/about")}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#activities" onClick={() => handleNavigation("/activities")}>
                  Activities
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => handleNavigation("/products")}>
                  Our Products
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => handleNavigation("/gallery")}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => handleNavigation("/contact")}>
                  Contact
                </a>
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
