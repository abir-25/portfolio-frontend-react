import React, { useEffect } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "../container";
import NavbarSPA from "../components/NavbarSPA/NavbarSPA";

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
      <NavbarSPA />
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
