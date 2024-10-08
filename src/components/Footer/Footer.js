import React from "react";
import "./Footer.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer id="footer" class="footer position-relative light-background">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <span class="sitename">Agro-Tourism</span>
              </a>
              <p>
                We are leading in agro tourism in maharashtra for the welfare of
                farming and increasing knowledge among peoples.
              </p>
              <div class="social-links d-flex mt-4">
                <a href="">
                  <i class="bi bi-twitter-x">
                    <FaSquareFacebook />
                  </i>
                </a>
                <a href="">
                  <i class="bi bi-facebook">
                    <IoLogoTwitter />
                  </i>
                </a>
                <a href="">
                  <i class="bi bi-instagram">
                    <FaSquareInstagram />
                  </i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin">
                    <FaYoutube />
                  </i>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Farm Tour</a>
                </li>
                <li>
                  <a href="#">Organic Farming Workshops</a>
                </li>
                <li>
                  <a href="#">Outdoor Activities</a>
                </li>
                <li>
                  <a href="#">Farm-to-Table Dining</a>
                </li>
                <li>
                  <a href="#">Accommodation</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>A108 phase 1 Street</p>
              <p>Pune, Maharashtra </p>
              <p>India - 535022</p>
              <p class="mt-4">
                <strong>Phone:</strong> <span>+91 85589 55488</span>
              </p>
              <p>
                <strong>Email:</strong> <span>visava@example.com</span>
              </p>
            </div>
          </div>
        </div>

        <div class="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong class="sitename">Visava</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. --> */}
            {/* <!-- You can delete the links only if you've purchased the pro version. --> */}
            {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
          </div>
        </div>
      </footer>

      {/* <!-- Scroll Top --> */}
      <a
        href="#"
        id="scroll-top"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short">
          <FaArrowUp />
        </i>
      </a>
    </>
  );
};

export default Footer;
