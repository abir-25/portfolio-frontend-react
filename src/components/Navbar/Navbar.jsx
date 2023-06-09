import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { images } from "../../constants";
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" onClick={handleHome} />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <HashLink to={`/#${item}`}>{item}</HashLink>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <HashLink to={`/#${item}`}>{item}</HashLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
