import React from "react";

const HeroSection = (props) => {
  return (
    <div className="hero-section">
      <div>
        <p className="greeting">{props.greeting}</p>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default HeroSection;
