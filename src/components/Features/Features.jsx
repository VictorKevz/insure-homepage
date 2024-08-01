import React from "react";
import "../css/features.css";
import featuresData from "./Data";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../Varinats";

function Features() {
  return (
    <div className="features wrapper">
      <div className="features-container">
        <motion.h2
          className="features-main-title"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.2 }}
          exit="exit"
        >
          We're different
        </motion.h2>
        <motion.div
          className="features-card"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.1 }}
        >
          {featuresData.map((feature) => {
            let featureClassName;
            if (feature.id === 1) {
              featureClassName = "first";
            }
            if (feature.id === 2) {
              featureClassName = "second";
            }
            if (feature.id === 3) {
              featureClassName = "third";
            }
            return (
              <div
                key={feature.id}
                className={`feature-item ${featureClassName}`}
              >
                <div className="feature-icon-container">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className={`feature-icon ${featureClassName}`}
                  />
                </div>
                <section
                  className={`feature-text-container ${featureClassName}`}
                >
                  <h3 className={`feature-title ${featureClassName}`}>
                    {feature.title}
                  </h3>
                  <p className={`feature-parag ${featureClassName}`}>
                    {feature.parag}
                  </p>
                </section>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="cta-container"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h4 className="cta-title">
            Find out more <br />
            about how we work
          </h4>
          <a className="cta link">How we work</a>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
