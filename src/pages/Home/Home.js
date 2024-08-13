import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Activity from "../../components/Activity/Activity";
import Explore from "../../components/Explore/Explore";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Overview from "../../components/PlanOverview/Overview";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="Home-container">
      <Hero />
      <About />
      <Activity />
      <Explore />
      <Overview />
      <Testimonials />
    </div>
  );
};

export default Home;
