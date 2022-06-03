import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/SelectCard.css";
import header_image from "../Images/header_image.png";
import flash_logo from "../Images/flash-logo.png";

function SelectCard() {
  return (
    <div>
      <header className="">
        <img className="header-image" src={header_image} alt="" />
        <p className="header-p">Credit Card Online Application</p>
      </header>

      <div className="MF4-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 ">
              <div className="MF4-logo">
                <img className="MF4-flashlogo" src={flash_logo} alt="" />
                <h2 className="MF4-SelectCard">Select your Card</h2>
              </div>
              <div className="row">
                <div className="col-sm-4 MF4-labelInput ">
                  <Card className="MF4-Card-1">
                    <Card.Img
                      className="MF4-Card-Img"
                      variant="top"
                      src="https://s3-ap-southeast-1.amazonaws.com/paymatrixuploads/static/new_home/credit_card_images/axis_bank_privilege_credit_card.png"
                    />

                    <ul className="MF4-Card-Details">
                      <li className="MF4-Card-Details-li">
                        Card: My Zone Visa Card
                      </li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor</li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, nemo!
                      </li>
                      <li>
                        <Card.Body>
                          <Card.Link className="MF4-Card-Details-Link" href="#">
                            Know more
                          </Card.Link>
                        </Card.Body>
                      </li>
                    </ul>
                  </Card>
                </div>

                <div className="col-sm-4 MF4-labelInput ">
                  <Card className="MF4-Card-2">
                    <Card.Img
                      className="MF4-Card-Img"
                      variant="top"
                      src="https://www.paisabazaar.com/wp-content/uploads/2019/05/axis-bank-neo-credit-card.png"
                    />
                    <ul className="MF4-Card-Details">
                      <li className="MF4-Card-Details-li">
                        Card:Neo Creadit Card
                      </li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor</li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, nemo!
                      </li>
                      <li>
                        <Card.Body>
                          <Card.Link className="MF4-Card-Details-Link" href="#">
                            Know more
                          </Card.Link>
                        </Card.Body>
                      </li>
                    </ul>
                  </Card>
                </div>

                <div className="col-sm-4 MF4-labelInput ">
                  <Card className="MF4-Card-3">
                    <Card.Img
                      className="MF4-Card-Img"
                      variant="top"
                      src="https://s3-ap-southeast-1.amazonaws.com/paymatrixuploads/static/new_home/credit_card_images/axis_bank_privilege_credit_card.png"
                    />
                    <ul className="MF4-Card-Details">
                      <li className="MF4-Card-Details-li">
                        Card:Axis bank credit card
                      </li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor</li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, nemo!
                      </li>
                      <li>
                        <Card.Body>
                          <Card.Link className="MF4-Card-Details-Link" href="#">
                            Know more
                          </Card.Link>
                        </Card.Body>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
              <div>
                <Link
                  to="/varifyWithOtp"
                  className="btn MF4-next-Button"
                  id="next1"
                >
                  Next
                </Link>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCard;
