import React from "react";
import "./Activity.css";
import jungleSafari from "../../Assets/Activities/activityImg-1.jpg";
import swimming from "../../Assets/Activities/swimming.jpg";
import birdWatching from "../../Assets/Activities/bird.jpg";
import trekking from "../../Assets/Activities/trekkinggg.jpg";
import accommodation from "../../Assets/Activities/accomodation.jpg";
import boating from "../../Assets/Activities/boating.jpg";
import authenticFood from "../../Assets/Activities/food.jpg";
import birthdayParty from "../../Assets/Activities/bday.jpg";

const activities = [
  { name: "Jungle Safari", image: jungleSafari },
  { name: "Swimming", image: swimming },
  { name: "Bird Watching", image: birdWatching },
  { name: "Trekking", image: trekking },
  { name: "Accommodation", image: accommodation },
  { name: "Boating", image: boating },
  { name: "Authentic Food", image: authenticFood },
  { name: "Birthday Party", image: birthdayParty }
];

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
                  <img src={activity.image} className="img-fluid" alt={activity.name} />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>{activity.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activity;
