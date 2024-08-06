import React from "react";
import "./Activity.css";
import activity1 from "../../Assets/activityImg-1.jpg";

const Activity = () => {
  return (
    <div className="activity-container">
      {/* <!-- Team Section --> */}
      <section id="team" class="team section light-background">
        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up" style={{textAlign:"center"}}>
          <h5>What We Do</h5>
          <h2>Activities We Offer</h2>
          <p className="activity-info">
            At our Agro Tourism we create a memorable holiday experience with
            all the modern facilities and conveniences that contributes to a
            luxurious and comfortable stay.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container">
          <div class="row gy-5">
            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Jungle Safari</h4>
              </div>
            </div>
            {/* <!-- End activity --> */}
            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Swimminng</h4>
              </div>
            </div>
            {/* <!-- End activity --> */}

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Bird Watching</h4>
              </div>
            </div>
            {/* <!-- End activity --> */}

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Trekking</h4>
              </div>
            </div>
            {/* <!-- End activity --> */}

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Accommodation</h4>
              </div>
            </div>
            {/* <!-- End activity --> */}

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Boating</h4>
              </div>
            </div>
            {/* <!-- End activity --> */}

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Authentic Food</h4>
              </div>
            </div>
            {/* <!-- End activity --> */}

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={activity1} class="img-fluid" alt="" />
                <div class="social">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Birthday Party </h4>
              </div>
            </div>
            {/* <!-- End activity --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Team Section --> */}
    </div>
  );
};

export default Activity;
