import React from "react";
import "./Home.css";
import Featured from "../../components/feature/Featured";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedaProperty from "../../components/featuredProperty/FeaturedaProperty";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
        <div className="homeTitle">Browse by property type</div>
        <FeaturedaProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
