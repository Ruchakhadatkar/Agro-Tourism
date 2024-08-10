import React from "react";
import "./GalleryPage.css";
import { BsZoomIn } from "react-icons/bs";

import overview from "../../Assets/overview/Plan-overview.jpg";
import seeding from "../../Assets/Explore/exploreImg.jpg";
import plan from "../../Assets/about.jpeg";
import aboutImg1 from "../../Assets/AboutPage/about-1-img-1.jpg";
import aboutImg2 from "../../Assets/AboutPage/about-1-img-2.jpg";
import swimmingPool from "../../Assets/swimmingPool.jpg";
import cattelfarming from "../../Assets/cow3.jpg";
import gardening from "../../Assets/Explore/plant-nursery.jpg";
import milkmachine from "../../Assets/milk-machine.jpg";
import cows from "../../Assets/from-Cattle-Farming.jpg";
import safari from "../../Assets/parashar-images-06-1024x576.jpg";
import dairyProducts from "../../Assets/dairy-products.jpg";
import organicFarm from "../../Assets/orgainic.jpeg";
import harvestingInnov from "../../Assets/harvesting.jpg";
import Greenery from "../../Assets/farm-of-happiness-agro.jpg";
import Trekking from "../../Assets/trekking-img1.jpeg";
import Thali from "../../Assets/Maha-thali.jpg";


const GalleryPage = () => {
  return (
    <div className="gallery-container">
      <section id="portfolio" class="portfolio section">
        <div class="container section-title" data-aos="fade-up">
          <h2></h2>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container">
          <div
            class="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              class="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-branding">About Visava</li>
              <li data-filter=".filter-app">Products</li>
              <li data-filter=".filter-product">Activities</li>
            </ul>
            {/* <!-- End Portfolio Filters --> */}

            <div
              class="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img
                  src={overview}
                  class="img-fluid"
                  alt="planoverview"
                  style={{ width: "100%", height: "60vh" }}
                />
                <div class="portfolio-info">
                  <h4>Over View of VISAVA</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                    title="App 1"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in">
                      <BsZoomIn />
                    </i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
                style={{ height: "45vh" }}
              >
                <img src={gardening} class="img-fluid" alt="nursery" />
                <div class="portfolio-info">
                  <h4>Plant Nursery</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                    title="Product 1"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in">
                      <BsZoomIn />
                    </i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
                style={{ height: "38vh" }}
              >
                <img src={cows} class="img-fluid" alt="pool" />
                <div class="portfolio-info">
                  <h4>cattle farming</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-branding"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                style={{ height: "40vh" }}
              >
                <img src={safari} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>App 2</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                    title="App 2"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product product1">
                <img
                  src={aboutImg1}
                  class="img-fluid"
                  alt=""
                  style={{ height: "100vh" }}
                />
                <div class="portfolio-info">
                  <h4>Product 2</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                    title="Product 2"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding cowsImg">
                <img src={swimmingPool} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Swimming Pool</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product dairy-products">
                <img src={dairyProducts} class="img-fluid" alt="dairy" />
                <div class="portfolio-info">
                  <h4>Dairy Products</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product plan-sunset">
                <img src={plan} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Sunset View</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app milkmachine">
                <img src={milkmachine} class="img-fluid" alt="milkmachine" />
                <div class="portfolio-info">
                  <h4>Milk Machine</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                    title="App 3"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product organic-farming">
                <img src={organicFarm} class="img-fluid" alt="organicFarming" />
                <div class="portfolio-info">
                  <h4>Organic Farming</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product  food-thali">
                <img src={Thali} class="img-fluid" alt="food" />
                <div class="portfolio-info">
                  <h4>Traditional Food</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product  greenery">
                <img src={Greenery} class="img-fluid" alt="nature" />
                <div class="portfolio-info">
                  <h4>Harvesting & Innovations</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product trekking">
                <img src={Trekking} class="img-fluid" alt="trekking" />
                <div class="portfolio-info">
                  <h4>Trekking</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product harvesting">
                <img src={harvestingInnov} class="img-fluid" alt="harvesting" />
                <div class="portfolio-info">
                  <h4>Harvesting & Innovations</h4>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Portfolio Section --> */}
    </div>
  );
};

export default GalleryPage;
