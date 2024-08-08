import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar, IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import user1 from "../../Assets/Testimonials/testi-user1.jpg";
import user2 from "../../Assets/Testimonials/testi-user2.jpg";
import user4 from "../../Assets/Testimonials/testt-user4.jpg";
import user5 from "../../Assets/Testimonials/testi-user5.jpg";

const testimonials = [
  {
    name: "Ishika Gokhale",
    position: "Customer",
    quote:
      "my name is rucha rttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: user1,
  },
  {
    name: "Nishant Patil",
    position: "Customer",
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: user2,
  },
  {
    name: "Sharad Shinde",
    position: "Customer",
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: user1,
  },
  {
    name: "Sanju Jain",
    position: "Customer",
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: user4,
  },
  {
    name: "Aarti Sune",
    position: "Customer",
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: user5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: (i) => (
      <div
        className="slick-dot-custom bottom-dots"
        style={{ margin: "0px", position: "absolute" }}
      >
        <FaCircle
          style={{
            margin: "0px",
            padding: "0",
            position: "relative",
            top: "1.2rem",

            
          }}
        />
      </div>
    ),
    // nextArrow: (
    //   <div className="slick-arrow-custom slick-next">
    //     <IoArrowForward style={{ fontSize: "30px", color: "black" }} />
    //   </div>
    // ),
    // prevArrow: (
    //   <div className="slick-arrow-custom slick-prev">
    //     <IoArrowBack style={{ fontSize: "30px", color: "black" }} />
    //   </div>
    // ),
  };

  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      <div className="container">
        <div
          className="row align-items-center"
          // style={{ display: "block", textAlign: "center", margin: "0 auto" }}
        >
          <div
            className="col-lg-5 info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h5>Reviews</h5>
            <h2>Testimonials</h2>
            <p>
              Our customers are mostly from urban areas, who would like to spend
              some great time with their family, School trips to get a knowledge
              about farming plus some functional events.
            </p>
          </div>
          <div
            className="col-lg-7 user-info"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ width: "756px", padding: "2rem ", paddingBottom:"4rem" }}
          >
            <Slider {...settings} className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <div className="d-flex">
                    <img
                      src={testimonial.image}
                      className="testimonial-img flex-shrink-0"
                      alt={testimonial.name}
                    />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.position}</h4>
                      <div className="stars d-flex">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </div>
                    </div>
                  </div>
                  <p 
                  // style={{ textAlign: "center", padding: "1rem" }}
                  >
                    <span>{testimonial.quote}</span>
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
