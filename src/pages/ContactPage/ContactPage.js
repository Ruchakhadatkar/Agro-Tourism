import React, { useState } from "react";
import "./ContactPage.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/path-to-your-php-file/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      if (result === "OK") {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError("There was a problem sending your message. Please try again.");
      }
    } catch (error) {
      setError("There was a problem sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Contact with us, write us a message.
          </p>
        </div>
        <div className="container info-contact" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6 contact-icon">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-geo-alt">
                      <IoLocationOutline />
                    </i>
                    <h3>Address</h3>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                  </div>
                </div>
                <div className="col-md-6 contact-icon">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-telephone">
                      <IoCallOutline />
                    </i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                    <p>+1 6678 254445 41</p>
                  </div>
                </div>
                <div className="col-md-6 contact-icon">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="400"
                  >
                    <i className="bi bi-envelope">
                      <AiOutlineMail />
                    </i>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-6 contact-icon">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="500"
                  >
                    <i className="bi bi-clock">
                      <GoClock />
                    </i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday</p>
                    <p>9:00AM - 05:00PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
                onSubmit={handleSubmit}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12 text-center pop-up">
                    {loading && <div className="loading">Loading</div>}
                    {error && <div className="error-message">{error}</div>}
                    {success && (
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )}
                    <button type="submit" className="send-btn" >Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
