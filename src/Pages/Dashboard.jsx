import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Dashboard.css";
import header_image from "../Images/header_image.png";
// import PageBg from '../Images/PageBg.jpg'

function Dashboard() {
  return (
    <div>
      <header className="">
        <img className="header-image" src={header_image} alt="" />
        <p className="header-p">Credit Card Online Application</p>
      </header>

      <div className="Dash-page">
        <div className="container">
          {/* <img className="dash-img" src={PageBg} alt="" /> */}
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 mobile-padding">
              <div className="inner-content">
                <h1>Experience a world of rewards & offers!</h1>
                <p>We'll need a bit of information be get you started</p>
              </div>

              <div className="existingCustomer">
                <div className="existingCustomerLogoOuter">
                  <div className="existingCustomerLogo"></div>
                </div>
                <h4>Are you existing Induslnd Bank customer?</h4>
                <div className="buttons">
                  <Link
                    className="btn common-button"
                    id="button1"
                    type="button"
                    to="/personalDetails"
                  >
                    Yes
                  </Link>
                  <Link
                    className="btn common-button"
                    type="button"
                    to="/customerDetails"
                  >
                    No
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 mobile-padding"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
