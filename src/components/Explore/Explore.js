import React from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./Explore.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import exploreImg1 from "../../Assets/explore-1.jpg";
import exploreImg2 from "../../Assets/explore-img-2.jpg";
import exploreImg3 from "../../Assets/explore-img-3.jpg";
import exploreImg4 from "../../Assets//explore-img-4.jpg";
import exploreImg5 from "../../Assets/explore-vegetable.jpg";
import exploreImg6 from "../../Assets/garden.jpg";

class Explore extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
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
  }

  render() {
    const images = [
      { src: exploreImg1, title: "Harvesting & Innovations" },
      { src: exploreImg2, title: "Organic Farming" },
      { src: exploreImg3, title: "Plant Nursery" },
      { src: exploreImg4, title: "Cattel Farming" },
     
    ];

    return (
      <div className="explore-container">
        <section id="services-2" className="services-2 section">
          <div className="container section-title">
            <h5>Explore</h5>
            <h2>Our Agro Tourism</h2>
          </div>

          <div className="services-carousel-wrap explore-main">
            <div className="container">
              <div className="swiper-container init-swiper">
                <button className="navigation-prev js-custom-prev">
                  <i className="bi bi-arrow-left-short">
                    <FiArrowLeft />
                  </i>
                </button>
                <button className="navigation-next js-custom-next">
                  <i className="bi bi-arrow-right-short">
                    <FiArrowRight />
                  </i>
                </button>
                <div className="swiper-wrapper">
                  {images.map((image, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="service-item">
                        <div className="service-item-contents">
                          <a href="#">
                            <span className="service-item-category">We do</span>
                            <h2 className="service-item-title">{image.title}</h2>
                          </a>
                        </div>
                        <img
                          src={image.src}
                          alt="Service"
                          className="img-fluid"
                          style={{width:"100vw", height:"100%"}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Explore;
