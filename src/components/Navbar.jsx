import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import open from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { motion, AnimatePresence, delay } from "framer-motion";
import "./css/navbar.css";

function Navbar() {
  const [isOpen, setopen] = useState(false);
  function toggleMenu() {
    setopen(!isOpen);
  }

  const navVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.5,
        stiffness: "300",
      },
    },
  };

  //   const linkVariants = {
  //     hidden: { opacity: 1 },
  //     visible: { opacity: 1 },
  //     hover: {
  //         scale:1.1,
  //       transition: {
  //         yoyo: Infinity,
  //         duration: 0.3,
  //       },
  //     },
  //   };

  return (
    <motion.header
      className="nav wrapper"
      // variants={navVariants}
      // initial="hidden"
      // animate="visible"
    >
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
        <ul className={`links-container ${isOpen ? "open" : ""}`}>
          <li className="nav-link">How we work</li>
          <li className="nav-link">Blog</li>
          <li className="nav-link">Account</li>
          <li className="nav-link link">View plans</li>
        </ul>
        <div className="toggle-container" onClick={toggleMenu}>
          <img
            src={isOpen ? close : open}
            className={`${isOpen ? "close-icon" : "open-icon"}`}
            alt={`${isOpen ? "close-icon" : "open-icon"}`}
          />
        </div>
      </nav>
      <div className={`mask ${isOpen ? "open" : ""}`}></div>
    </motion.header>
  );
}

export default Navbar;
