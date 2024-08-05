import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active carousel-1" data-bs-interval="3000">
            {/* <img src={Img1} class="d-block w-100" alt="..." /> */}
            <h1>Slide1</h1>
          </div>
          <div class="carousel-item carousel-2" data-bs-interval="3000">
            {/* <img src={Img2} class="d-block w-100" alt="..." /> */}
            <h1>Slide2</h1>
          </div>
          <div class="carousel-item carousel-3">
            {/* <img src={Img3} class="d-block w-100" data-bs-interval="3000" /> */}
            <h1>Slide3</h1>
          </div>
          <div class="carousel-item carousel-4">
            {/* <img src={Img3} class="d-block w-100" data-bs-interval="3000" /> */}
            <h1>Slide4</h1>
          </div>
          <div class="carousel-item carousel-5">
            {/* <img src={Img3} class="d-block w-100" data-bs-interval="3000" /> */}
            <h1>Slide5</h1>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
