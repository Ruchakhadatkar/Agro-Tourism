import React from "react";
import "./AboutPage.css";
import overview from "../../Assets/overview/Plan-overview.jpg";

const AboutPage = () => {
  return (
    <div className="container-about">
      <div className="container1">
        <h5>Visava Agro Tourism</h5>
        <h2>About Us</h2>
        <p>
          Visava Agro tourism is a ideal place to enjoy the nature in an Eco
          friendly environment. The agriculture theme of the resort is reflected
          in the landscaping, furniture, art, textiles & color scheme. The best
          part of our efforts are that you can truly experience the local
          populace in their own natural habitat. It has been designed in such a
          way that you don't even have to leave your villa to have a full day at
          the destination.
        </p>
        <p>
          Come stay at our farm and enjoy our agricultural tours, the serenity
          of the river, our village culture and traditional art forms, and the
          fun activities we offer.
        </p>
      </div>
      <div className="image-about">
        <img src={overview} class="img-fluid" alt="overviewPlan" />
      </div>

      <div className="container1 container-vision">
        <h5>Visava Agro Tourism</h5>
        <h2>Vision</h2>
        <p>
          To build an environment in which all living beings can coexist in
          harmony and enjoy their lives to the fullest. To promote responsible
          tourism while also providing entertainment and joy. Providing all
          visitors with an enjoyable experience of entertainment and happiness
          in an environmentally friendly environment, as well as to raise
          awareness and insights about the balance and synergism between nature
          and life. To show visitors a sustainable lifestyle model as well as
          various rural activities such as farming, animal husbandry, and water
          activities.
        </p>
      </div>
      <div className="card-container">
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  20 Official Staff to Guide to the Journey
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  We Have 2 years of experience in this field
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
