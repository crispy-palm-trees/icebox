import React from "react";
import "./App.scss";

import Navbar from "./../../Components/Navbar/Navbar";
import Banner from "./../../Components/LandingPage/Banner/Banner";
import Intro from "./../../Components/LandingPage/Intro/Intro";
import Marketing from "./../../Components/LandingPage/Marketing/Marketing";
import AboutUs from "./../../Components/LandingPage/AboutUs/AboutUs";
import Contact from "../../Components/LandingPage/Contact/Contact";
import Footer from "./../../Components/LandingPage/Footer/Footer";

// images

const App: React.FC = () => {
  return (
    <div className="IceboxApp wrapper">
      <Navbar />
      <div className="app-content">
        <Banner />
        <Intro />
        <Marketing />
        <AboutUs />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
