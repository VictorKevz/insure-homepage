import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Varinats";
import "../css/footer.css";
import logo from "../../assets/images/logo.svg";
import fb from "../../assets/images/icon-facebook.svg";
import ig from "../../assets/images/icon-instagram.svg";
import pin from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import footerLinks from "./Data";

function Footer() {
  return (
    <motion.div
      className="footer wrapper"
      // variants={fadeIn("up", 0)}
      // initial="hidden"
      // whileInView={"visible"}
      // viewport={{ once: false, amount: 0.1 }}
    >
      <div className="footer-container">
        <div className="footer-logo-container-socials">
          <img src={logo} alt="footer-logo" className="footer-logo" />
          <motion.div
            className="social-icons-container"
            // variants={fadeIn("right", 0.3)}
            // initial="hidden"
            // whileInView={"visible"}
            // viewport={{ once: false, amount: 0.1 }}
            // exit="exit"
          >
            <img src={fb} alt="facebook-icon" className="footer-icon" />
            <img src={twitter} alt="twitter-icon" className="footer-icon" />
            <img src={pin} alt="pinterest-icon" className="footer-icon" />
            <img src={ig} alt="instagram-icon" className="footer-icon" />
          </motion.div>
        </div>
        <ul className="footer-links-container">
          {footerLinks.map((obj) => {
            let footerClassName;
            if (obj.id === 1) {
              footerClassName = "first";
            } else if (obj.id === 2) {
              footerClassName = "second";
            } else if (obj.id === 3) {
              footerClassName = "third";
            } else {
              footerClassName = "fourth";
            }
            return (
              <motion.li
                key={obj.id}
                className={`link-name ${footerClassName}`}
                // variants={fadeIn("down", 0.3)}
                // initial="hidden"
                // whileInView={"visible"}
                // viewport={{ once: false, amount: 0.1 }}
              >
                {obj.name}
                <ul className={`footer-link ${footerClassName}`}>
                  {obj.links.map((link, index) => (
                    <li key={index} className={`link-item ${footerClassName}`}>
                      {link}
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default Footer;
