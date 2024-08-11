import React from 'react'
import "./About.css"
import { PiTractorBold } from 'react-icons/pi'
import { FaCow } from 'react-icons/fa6'
import { GiFruitBowl } from 'react-icons/gi'
import { RiPlantLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  function handleLearnmore (){
    navigate("/about")
  }
  return (
    <div className="about-container">
    {/* <!-- About Section --> */}
    <section id="about" class="about section light-background">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-xl-center gy-5">
          <div class="col-xl-5 content">
            <h3>About Us</h3>
            <h2>We’re Leading in AgroTourism</h2>
            <p>
              Sanjivani Agro tourism is a ideal place to enjoy the nature in
              an Eco friendly environment. The agriculture theme of the
              resort is reflected in the landscaping, furniture, art,
              textiles and color scheme. The best part of our efforts are
              that you can truly experience the local populace in their own
              natural habitat. It has been designed in such a way that you
              don't even have to leave your villa to have a full day at the
              destination.
            </p>
            <a href="#" class="read-more"  onClick={handleLearnmore()}>
              <span>Learn More</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <div class="col-xl-7">
            <div class="row gy-4 icon-boxes">
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                  <i class="bi bi-buildings">
                    <PiTractorBold />
                  </i>
                  <h3>Harvesting & Innovations</h3>
                  <p>
                    Magni repellendus vel ullam hic officia accusantium ipsa
                    dolor omnis dolor voluptatem
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Box --> */}

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box">
                  <i class="bi bi-clipboard-pulse">
                    <FaCow />
                  </i>
                  <h3>Dairy Products</h3>
                  <p>
                    Autem saepe animi et aut aspernatur culpa facere. Rerum
                    saepe rerum voluptates quia
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Box --> */}

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box">
                  <i class="bi bi-command">
                    <GiFruitBowl />
                  </i>
                  <h3>Organic Farming</h3>
                  <p>
                    Omnis perferendis molestias culpa sed. Recusandae quas
                    possimus. Quod consequatur corrupti
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Box --> */}

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div class="icon-box">
                  <i class="bi bi-graph-up-arrow">
                    <RiPlantLine />
                  </i>
                  <h3>Plant Nursery</h3>
                  <p>
                    Sint et dolor voluptas minus possimus nostrum.
                    Reiciendis commodi eligendi omnis quideme lorenda
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Box --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- /About Section --> */}
  </div>
  )
}

export default About