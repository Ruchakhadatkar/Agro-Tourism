import React from "react";
import "./ProductPage.css";
import overview from "../../Assets/overview/Plan-overview.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import seedPlant from "../../Assets/Explore/exploreImg.jpg";
import organic from "../../Assets/Explore/explore-img-2.jpg";
import nursery from "../../Assets/Explore/plant-nursery.jpg";
import cattle from "../../Assets/Explore/explore-img-4.jpg";

const ProductPage = () => {
  return (
    <div className="container-products">
      <div className="card-container d-flex">
        <div className="card-1">
          <div class="card" style={{ width: "18rem" }}>
            <img src={nursery} class="card-img-top" alt="" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div class="card" style={{ width: "18rem" }}>
            <img src={organic} class="card-img-top" alt="" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="card-3">
          <div class="card" style={{ width: "18rem" }}>
            <img src={cattle} class="card-img-top" alt="" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-container"></div>
    </div>
  );
};

export default ProductPage;
