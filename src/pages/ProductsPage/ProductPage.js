import React from "react";
import "./ProductPage.css";
import vegetableFarm from "../../Assets/ProductPage/vegetable-farm.jpg";
import dairy from "../../Assets/ProductPage/Dairy-Farming.jpg";
import flowerFarm from "../../Assets/ProductPage/flower-farming-pic.jpg";

const ProductPage = () => {
  return (
    <div className="container-products">
      <div className="heading">
        <h5>Naturally Grown, Perfectly Fresh </h5>
        <h2>Our Products</h2>
      </div>
      <div className="card-container d-flex ">
        <div className="card-1">
          <div class="card" style={{ width: "22rem" }}>
            <img src={vegetableFarm} class="card-img-top" alt="" />
            <div class="card-body">
              <h2>Vegetable Farming</h2>
              <p class="card-text">
                Sustainably grown, organic vegetables, cultivated with care and
                tradition.
              </p>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div class="card" style={{ width: "22rem" }}>
            <img src={dairy} class="card-img-top" alt="" />
            <div class="card-body">
              <h2>Dairy products</h2>
              <p class="card-text">
                Naturally crafted dairy, delivering freshness and quality from
                our farm.
              </p>
            </div>
          </div>
        </div>
        <div className="card-3">
          <div class="card" style={{ width: "22rem" }}>
            <img src={flowerFarm} class="card-img-top" alt="" />
            <div class="card-body">
              <h2>Flower Farming</h2>

              <p class="card-text">
                Cultivating vibrant blooms, our flower farming brings nature's
                beauty to life.
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
