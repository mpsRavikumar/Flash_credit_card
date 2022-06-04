import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/SelectCard.css";
import header_image from "../Images/header_image.png";
import flash_logo from "../Images/flash-logo.png";
import SubTitle from "../component/SubTitle";
import Logo from "../component/Logo";
import Header from "../component/Header";
import Mycard from "../component/Mycard";
import Footer from "../component/Footer";

function SelectCard() {
  return (
    <div className="grid-container">
      <Header />
      <div className="main">
        <Logo />
        <div className="main">
          <p
            style={{
              width: "200rem",
              margin: "auto",
              fontSize: "18rem",
              fontWeight: "bold",
              marginBottom: "30rem",
            }}
          >
            Select your Card
          </p>
          <div className="mycards">
            <Mycard
              img_src="https://s3-ap-southeast-1.amazonaws.com/paymatrixuploads/static/new_home/credit_card_images/axis_bank_privilege_credit_card.png"
              card_name="Card: My Zone Visa Card"
            />
            <Mycard
              img_src="https://www.paisabazaar.com/wp-content/uploads/2019/05/axis-bank-neo-credit-card.png"
              card_name="Card:Neo Creadit Card"
            />
            <Mycard
              img_src="https://s3-ap-southeast-1.amazonaws.com/paymatrixuploads/static/new_home/credit_card_images/axis_bank_privilege_credit_card.png"
              card_name="Card:Axis bank credit card"
            />
          </div>
          <button className="select_card_btn">Next</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SelectCard;
