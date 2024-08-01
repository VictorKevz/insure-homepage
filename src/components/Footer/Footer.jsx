import React from "react";
import "../css/footer.css";
import logo from "../../assets/images/logo.svg";
import fb from "../../assets/images/icon-facebook.svg";
import ig from "../../assets/images/icon-instagram.svg";
import pin from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import footerLinks from "./Data";

function Footer() {
  return (
    <div className="footer wrapper">
      <div className="footer-container">
        <div className="footer-logo-container-socials">
          <img src={logo} alt="footer-logo" className="footer-logo" />
          <div className="social-icons-container">
            <img src={fb} alt="facebook-icon" className="footer-icon" />
            <img src={twitter} alt="twitter-icon" className="footer-icon" />
            <img src={pin} alt="pinterest-icon" className="footer-icon" />
            <img src={ig} alt="instagram-icon" className="footer-icon" />
          </div>
        </div>
        <ul className="footer-links-container">
          {footerLinks.map((obj) => {
            let footerClassName;
            if (obj.id === 1) {
              footerClassName = "first";
            }
            if (obj.id === 2) {
              footerClassName = "second";
            }
            if (obj.id === 3) {
              footerClassName = "third";
            }
            else{
              footerClassName = "fourth"
            }
            return (
              <li key={obj.id} className={`link-name ${footerClassName}`}>
                {obj.name}
                <ul className="footer-link">
                  {obj.links.map((link, index) => (
                    <li key={index} className="link-item">
                      {link}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
