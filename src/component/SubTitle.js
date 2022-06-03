import React from "react";
import "./Subtitle.css";
const SubTitle = ({ text }) => {
  return (
    <div>
      <p className="subtitle">{text}</p>
    </div>
  );
};

export default SubTitle;
