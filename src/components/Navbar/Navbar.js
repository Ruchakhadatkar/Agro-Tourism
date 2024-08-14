import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo1 from "../../Assets/Logo/logo1.jpg"
import logo2 from "../../Assets/Logo/logo2.jpg"
import logo3 from "../../Assets/Logo/logo3.jpg"
import logo4 from "../../Assets/Logo/logo4.png"
import logo5 from "../../Assets/Logo/logo5.png"
import logo6 from "../../Assets/Logo/logo6.jpg"
import logo7 from "../../Assets/Logo/logo7.png"
import logo8 from "../../Assets/Logo/logo8.png"



const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const navigate = useNavigate();

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileNavActive(false); 
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
              <img src={logo1} alt="logo" className="logo-img" />
            <div className="logo-nav">
              <h1 className="sitename">VISAVA</h1>
              <p className="sub-name">agro-tourism</p>
            </div>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a
                  href="/"
                  className="active"
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => handleNavigation("/about")}>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  onClick={() => handleNavigation("/activities")}
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={() => handleNavigation("/products")}
                >
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
