import React from "react";
import "./Mycard.css";
const Card = ({ img_src, card_name }) => {
  return (
    <div className="mycard">
      <img className="card_image" src={img_src} alt="card" />
      <ul>
        <li>{card_name}</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          nemo!
        </li>
        <li>
          <a href="#">Know more</a>
        </li>
      </ul>
    </div>
  );
};

export default Card;
