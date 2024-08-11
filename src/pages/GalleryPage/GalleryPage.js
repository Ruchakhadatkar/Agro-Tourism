import React, { useEffect, useRef } from "react";
import "./GalleryPage.css";
import { BsZoomIn } from "react-icons/bs";
import Isotope from "isotope-layout";
import overview from "../../Assets/overview/Plan-overview.jpg";
import plan from "../../Assets/about.jpeg";
import aboutImg1 from "../../Assets/AboutPage/about-1-img-1.jpg";
import swimmingPool from "../../Assets/swimmingPool.jpg";
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
  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });

    // Cleanup on unmount
    return () => isotope.current.destroy();
  }, []);

  const handleFilter = (filter) => {
    isotope.current.arrange({ filter });
  };

  return (
    <div className="gallery-container">
      <section id="portfolio" className="portfolio section">
        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li
                onClick={() => handleFilter("*")}
                className="filter-active"
              >
                All
              </li>
              <li onClick={() => handleFilter(".filter-about")}>
                About
              </li>
              <li onClick={() => handleFilter(".filter-product")}>
                Products & Activities
              </li>
              <li onClick={() => handleFilter(".filter-farming")}>
                Farming
              </li>
            </ul>
            {/* End Portfolio Filters */}
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-about">
                <img src={overview} className="img-fluid" alt="planoverview" />
                <div className="portfolio-info">
                  <h4>Over View of Plan</h4>
                  <a
                    href={overview}
                    title="Overview"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-about">
                <img src={plan} className="img-fluid" alt="Plan" />
                <div className="portfolio-info">
                  <h4>Radiant View</h4>
                  <a
                    href={plan}
                    title="Plan"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-about">
                <img src={aboutImg1} className="img-fluid" alt="About Image 1" />
                <div className="portfolio-info">
                  <h4>Top view</h4>
                  <a
                    href={aboutImg1}
                    title="About Image 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              {/* Repeat similar blocks for each image */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={swimmingPool} className="img-fluid" alt="Swimming Pool" />
                <div className="portfolio-info">
                  <h4>Swimming Pool</h4>
                  <a
                    href={swimmingPool}
                    title="Swimming Pool"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={gardening} className="img-fluid" alt="Gardening" />
                <div className="portfolio-info">
                  <h4>Nursery of Plants</h4>
                  <a
                    href={gardening}
                    title="Gardening"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-farming">
                <img src={milkmachine} className="img-fluid" alt="Milk Machine" />
                <div className="portfolio-info">
                  <h4>Milk Machine</h4>
                  <a
                    href={milkmachine}
                    title="Milk Machine"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-farming">
                <img src={cows} className="img-fluid" alt="Cows" />
                <div className="portfolio-info">
                  <h4>Cattle Farming</h4>
                  <a
                    href={cows}
                    title="Cows"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={safari} className="img-fluid" alt="Safari" />
                <div className="portfolio-info">
                  <h4>Eco-safari</h4>
                  <a
                    href={safari}
                    title="Safari"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={dairyProducts} className="img-fluid" alt="Dairy Products" />
                <div className="portfolio-info">
                  <h4>Dairy Products</h4>
                  <a
                    href={dairyProducts}
                    title="Dairy Products"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-farming">
                <img src={organicFarm} className="img-fluid" alt="Organic Farm" />
                <div className="portfolio-info">
                  <h4>Organic Farming</h4>
                  <a
                    href={organicFarm}
                    title="Organic Farm"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-farming">
                <img src={harvestingInnov} className="img-fluid" alt="Harvesting Innovation" />
                <div className="portfolio-info">
                  <h4>Harvesting & Innovation</h4>
                  <a
                    href={harvestingInnov}
                    title="Harvesting Innovation"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-farming">
                <img src={Greenery} className="img-fluid" alt="Greenery" />
                <div className="portfolio-info">
                  <h4>Evergreen Surroundings</h4>
                  <a
                    href={Greenery}
                    title="Greenery"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={Trekking} className="img-fluid" alt="Trekking" />
                <div className="portfolio-info">
                  <h4>Trekking Tour</h4>
                  <a
                    href={Trekking}
                    title="Trekking"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={Thali} className="img-fluid" alt="Thali" />
                <div className="portfolio-info">
                  <h4>Authentic Fare</h4>
                  <a
                    href={Thali}
                    title="Thali"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <BsZoomIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
