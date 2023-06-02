import React, { useEffect } from "react";
import { Navbar } from "../components";
import { About, Footer, Header, Skills, Testimonial, Work } from "../container";

const Home = () => {
  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("geo-location", JSON.stringify(data));
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
