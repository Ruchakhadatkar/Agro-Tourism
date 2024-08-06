import React from "react";
import "./Activity.css";
import activity1 from "../../Assets/activityImg-1.jpg";

const Activity = () => {
  return (
    <div className="activity-container">
      <section id="team" className="team section light-background">
        <div className="container section-title" data-aos="fade-up" style={{ textAlign: "center" }}>
          <h5>What We Do</h5>
          <h2>Activities We Offer</h2>
          <p className="activity-info">
            At our Agro Tourism, we create a memorable holiday experience with
            all the modern facilities and conveniences that contribute to a
            luxurious and comfortable stay.
          </p>
        </div>

        <div className="container">
          <div className="row gy-5">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member-img">
                  <img src={activity1} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>{activity}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const activities = [
  "Jungle Safari",
  "Swimming",
  "Bird Watching",
  "Trekking",
  "Accommodation",
  "Boating",
  "Authentic Food",
  "Birthday Party"
];

export default Activity;
