import React from "react";
import { motion, AnimatePresence, delay, transform } from "framer-motion";
import patternRightDesktop from "../assets/images/bg-pattern-intro-right-desktop.svg";
import patternRightMobile from "../assets/images/bg-pattern-intro-right-desktop.svg";
import patternLeftDesktop from "../assets/images/bg-pattern-intro-left-desktop.svg";
import patternLeftMobile from "../assets/images/bg-pattern-intro-left-desktop.svg";
import introIMGDesktop from "../assets/images/image-intro-desktop.jpg";
import introIMGMobile from "../assets/images/image-intro-mobile.jpg";
import "./css/hero.css";

function Hero() {

    const heroTextVariants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            ease: "easeIn",
            delay: 0.4,
            duration:0.8
          },
        },
      };

      const heroImageVariants = {
        hidden: { opacity: 0, x: "100%",y:"50%" },
        visible: {
          opacity: 1,
          x: 0,
          y:0,
          transition: {
            type: "spring",
            stiffness:100,
            delay: 0.8,
            duration:0.8
          },
        },
      };

  return (
    <div className="hero wrapper">
      <div className="hero-container wrapper">
        <motion.div 
        className="pattern top-container"
        initial={{opacity:0,y:"-50%"}}
        animate={{opacity:1,y:0}}
        transition={{ease:"easeIn", duration:1}}
        >
          <picture>
            <source media="(max-width:860px)" srcSet={patternRightMobile} />
            <img src={patternRightDesktop} alt="bg-pattern-right" />
          </picture>
        </motion.div>
        <div className="hero-inner-container">
          <div className="hero-info-container">
            <motion.section 
            className="hero-text-container"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            >
              <div className="top-line"></div>
              <h1 className="hero-title">Humanizing <br/>your insurance.</h1>
              <p className="hero-parag">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <a className="hero-CTA link">View plans</a>
              <div className="bottom-line"></div>
            </motion.section>
            <motion.div 
            className="hero-image-container"
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
            >
              <picture >
                <source media="(max-width:500px)" srcSet={introIMGMobile} />
                <img src={introIMGDesktop} alt="hero-intro-image" className="hero-intro-img" />
              </picture>
            </motion.div>
          </div>
        </div>
      </div>
      

      <motion.div 
      className="pattern bottom-container"
      initial={{opacity:0,y:"100%"}}
        animate={{opacity:1,y:0}}
        transition={{ease:"easeIn", duration:1}}
      >
      <picture>
        <source media="(max-width:860px)" srcSet={patternLeftMobile} />
        <img src={patternLeftDesktop} alt="bg-pattern-left" />
      </picture>
      </motion.div>
    </div>
  );
}

export default Hero;
