import React from "react";
import "./ProductPage.css";
import vegetableFarm from "../../Assets/ProductPage/vegetable-farm.jpg";
import dairy from "../../Assets/ProductPage/Dairy-Farming.jpg";
import flowerFarm from "../../Assets/ProductPage/flower-farming-pic.jpg";
import { GiPlantSeed } from "react-icons/gi";
import { FaTractor } from "react-icons/fa";

import { GiFruitBowl } from "react-icons/gi";
import { GiWateringCan } from "react-icons/gi";

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
      <div className="info-container">
        <div className="heading">
          {/* <h5>Our Benefits </h5> */}
          <h2 className="head">Agriculture & Eco Farming</h2>
          <p className="para">
            This form of tourism helps one stay with the farmer, engage oneself
            in farming activities, and eat authentic food. It involves staying
            in a farmhouse or separate guest house which will provide meals,
            organize activities involving observing and participating in farming
            operations. It is a leisure activity in an agricultural environment
            with an opportunity to help farming while staying.
          </p>
        </div>
        <div className="card-icon d-flex">
          <div class="card cards">
            <div class="card-body">
              <div className="icon">
                <i>
                  <FaTractor />
                </i>
              </div>
              <h2 className="card-head">Old & New Technology</h2>
            </div>
          </div>
          <div class="card cards" >
            <div class="card-body">
              <div className="icon">
                <i>
                  <GiPlantSeed />
                </i>
              </div>
              <h2 className="card-head">Vegetable Farms</h2>
            </div>
          </div>
          <div class="card cards" >
            <div class="card-body">
              <div className="icon">
                <i>
                  <GiWateringCan />
                </i>
              </div>
              <h2 className="card-head">Watering Plants</h2>
            </div>
          </div>
          <div class="card cards" >
            <div class="card-body">
              <div className="icon">
                <i>
                  <GiFruitBowl />
                </i>
              </div>
              <h2 className="card-head">Qaulity Products</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
