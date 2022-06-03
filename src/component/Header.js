import React from "react";
import "./Header.css";
import header_imgae from "../Images/header_image.png";
const Header = () => {
  return (
    <div className="header">
      <img className="hearder_image" src={header_imgae} alt="header" />
      <p className="header_text">
        <b>Create Credit Card Online</b>
      </p>
    </div>
  );
};

export default Header;
