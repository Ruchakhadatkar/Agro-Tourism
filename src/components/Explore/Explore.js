import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./Explore.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import seedPlant from "../../Assets/Explore/exploreImg.jpg";
import harvesting from "../../Assets/Explore/explore-1.jpg";
import organic from "../../Assets/Explore/explore-img-2.jpg";
import nursery from "../../Assets/Explore/plant-nursery.jpg";
import cattle from "../../Assets/Explore/explore-img-4.jpg";

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
    <section id="services-2" className="services-2 section ">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h5>Explore Farming with</h5>
        <h2>Our Agre Tourism</h2>
        <p>
          This form of tourism helps one stay with the farmer, engage oneself in
          farming activities. It involves staying in a
          farmhouse or separate guest house which will provide meals, organize
          activities involving observing and participating in farming
          operations. It is a leisure activity in an agricultural environment
          with an opportunity to help farming while staying.
        </p>
      </div>
      {/* End Section Title */}

      <div className="services-carousel-wrap dark-background">
        <div className="container">
          <div className="swiper" ref={swiperContainerRef}>
            <button className="navigation-prev js-custom-prev">
              <i>
                {" "}
                <FaArrowLeft />
              </i>
            </button>
            <button className="navigation-next js-custom-next">
              <i>
                <FaArrowRight />
              </i>
            </button>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">
                        Harvesting & Innovations
                      </h2>
                    </a>
                  </div>
                  <img src={harvesting} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Organic Farming</h2>
                    </a>
                  </div>
                  <img src={organic} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Plant Nursery</h2>
                    </a>
                  </div>
                  <img src={nursery} alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-item">
                  <div className="service-item-contents">
                    <a href="#">
                      <span className="service-item-category">We do</span>
                      <h2 className="service-item-title">Cattle Farming</h2>
                    </a>
                  </div>
                  <img src={cattle} alt="Image" className="img-fluid" />
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
                  <img src={seedPlant} alt="Image" className="img-fluid" />
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
