import React from "react";
import "./Banner.css";

const Banner = ({
  title,
  subtitle,
  backgroundImage,
  height = "auto", // changed default
}) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height,
  };

  return (
    <section className="banner" style={bannerStyle}>
      <div className="banner-content">
        {/* <h1>{title}</h1>
        <p>{subtitle}</p> */}
      </div>
    </section>
  );
};

export default Banner;