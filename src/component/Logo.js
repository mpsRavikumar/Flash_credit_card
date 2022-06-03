import React from "react";
import logo from "../Images/flash-logo.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img className="logo_image" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
