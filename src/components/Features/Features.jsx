import React from "react";
import "../css/features.css";
import featuresData from "./Data";

function Features() {
 
    
    
  return (
    <div className="features wrapper">
      <div className="features-container">
        <h2 className="features-main-title">We're different</h2>
        <div className="features-card">
        {featuresData.map((feature) => {
           let featureClassName;
           if(feature.id === 1){featureClassName = "first"}
           if(feature.id === 2){featureClassName = "second"}
           if(feature.id === 3){featureClassName = "third"}
          return (
            <div key={feature.id} className={`feature-item ${featureClassName}`}>
              <div className="feature-icon-container">
                <img src={feature.icon} alt={`${feature.title} icon`} 
                className={`feature-icon ${featureClassName}`} />
              </div>
              <section className={`feature-text-container ${featureClassName}`}>
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
        </div>
        <div className="cta-container">
            <h4 className="cta-title">Find out more <br/>about how we work</h4>
            <a className="cta link">How we work</a>
        </div>
      </div>
    </div>
  );
}

export default Features;