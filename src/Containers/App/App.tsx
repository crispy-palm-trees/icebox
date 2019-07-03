import React from "react";
import "./App.scss";

import NavbarSite from "./../../Components/Navbar/NavbarSite/NavbarSite";
import NavbarLanding from "./../../Components/Navbar/NavBarLanding/NavbarLanding";
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
      <div className="search-container">
        <NavbarSite />
      </div>
      <div className="app-content">
        <NavbarLanding />
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
