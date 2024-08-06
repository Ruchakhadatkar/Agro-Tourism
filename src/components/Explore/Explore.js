import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./Explore.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import exploreImg1 from "../../Assets/Explore/exploreImg.jpg";

const Explore = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperContainerRef.current, {
      loop: true,
      speed: 500,
      autoplay: {
        delay: 4000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".js-custom-next",
        prevEl: ".js-custom-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });

    return () => {
      swiperInstance.destroy();
    };
  }, []);

  return (
    // Services 2 Section
    <section id="services-2" className="services-2 section dark-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur</p>
      </div>
      {/* End Section Title */}

      <div className="services-carousel-wrap">
        <div className="container">
          <div className="swiper" ref={swiperContainerRef}>
            <button className="navigation-prev js-custom-prev">
              <FiArrowLeft />
            </button>
            <button className="navigation-next js-custom-next">
              <FiArrowRight />
            </button>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Planting</h2>
                    </a>
                  </div>
                  <img src={exploreImg1} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Mulching</h2>
                    </a>
                  </div>
                  <img src={exploreImg1} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Watering</h2>
                    </a>
                  </div>
                  <img src={exploreImg1} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Fertilizing</h2>
                    </a>
                  </div>
                  <img src={exploreImg1} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Harvesting</h2>
                    </a>
                  </div>
                  <img src={exploreImg1} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Mowing</h2>
                    </a>
                  </div>
                  <img src={exploreImg1} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Seeding Plants</h2>
                    </a>
                  </div>
                  <img src={exploreImg1} alt="Image" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    // /Services 2 Section
  );
};

export default Explore;
