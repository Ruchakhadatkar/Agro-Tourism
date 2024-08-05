import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../../components/Navbar/Navbar";
import Img1 from "../../Assets/hero-img1.jpg";
import Img2 from "../../Assets/hero-img-2.jpg";
import Img3 from "../../Assets/hero6.jpg";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import aboutImg1 from "../../Assets/about-1-img-1.jpg";
import aboutImg2 from "../../Assets/site-footer-farm.png";

const Home = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <Hero />

      <div className="about-container">
        {/* <!-- About Section --> */}
        <section id="about" class="about section light-background">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row align-items-xl-center gy-5">
              <div class="col-xl-5 content">
                <h3>About Us</h3>
                <h2>We’re Leading in AgroTourism</h2>
                <p>
                  Sanjivani Agro tourism is a ideal place to enjoy the nature in
                  an Eco friendly environment. The agriculture theme of the
                  resort is reflected in the landscaping, furniture, art,
                  textiles and color scheme. The best part of our efforts are
                  that you can truly experience the local populace in their own
                  natural habitat.
                  It has been designed in such a way that you
                  don't even have to leave your villa to have a full day at the
                  destination.
                </p>
                <a href="#" class="read-more">
                  <span>Learn More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>

              <div class="col-xl-7">
                <div class="row gy-4 icon-boxes">
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
                      <i class="bi bi-buildings"></i>
                      <h3>Eius provident</h3>
                      <p>
                        Magni repellendus vel ullam hic officia accusantium ipsa
                        dolor omnis dolor voluptatem
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                      <i class="bi bi-clipboard-pulse"></i>
                      <h3>Rerum aperiam</h3>
                      <p>
                        Autem saepe animi et aut aspernatur culpa facere. Rerum
                        saepe rerum voluptates quia
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
                      <i class="bi bi-command"></i>
                      <h3>Veniam omnis</h3>
                      <p>
                        Omnis perferendis molestias culpa sed. Recusandae quas
                        possimus. Quod consequatur corrupti
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                      <i class="bi bi-graph-up-arrow"></i>
                      <h3>Delares sapiente</h3>
                      <p>
                        Sint et dolor voluptas minus possimus nostrum.
                        Reiciendis commodi eligendi omnis quideme lorenda
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /About Section --> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
