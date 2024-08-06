import React from "react";
import "./Overview.css"
import planOverview from "../../Assets/Plan-overview.jpg"

const Overview = () => {
  return (
    <div className="overview">
      {/* <!-- Call To Action Section --> */}
      <section
        id="call-to-action"
        class="call-to-action section dark-background"
      >
        <img src={planOverview} alt="" />

        <div class="container">
          <div
            class="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="col-xl-10">
              <div class="text-center">
                <h3>Overview View of our Agro Tourism</h3>
               
                <a class="cta-btn" href="#">
                  View All Images
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Call To Action Section --> */}
    </div>
  );
};

export default Overview;
