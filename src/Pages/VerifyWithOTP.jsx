import React from "react";
import { Link } from "react-router-dom";
import "../CSS/VerifyWithOTP.css";
import header_image from "../Images/header_image.png";
import flash_logo from "../Images/flash-logo.png";
import TermAndCondition from "../Modal/TermAndCondition";
import Logo from "../component/Logo";
import Header from "../component/Header";

function VerifyWithOTP() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="grid-container">
      <Header />
      <div className="main">
        <div className="contain">
          <Logo />
          <div className="form">
            <form>
              <div className="box">
                <label className="VerifyOTP_Label">
                  Enter one time password that we have send to your Mobile
                  Number.
                </label>
                <input className="VerifyOTP_Input" type="text" />
              </div>
              <div className="box">
                <a className="resend">Resend OTP ?</a>
              </div>
              <input
                type="checkbox"
                name="terms_conditions"
                id="terms_condition"
              />
              <label className="VerifyOTP_Label" htmlFor="terms_condition">
                I agree to terms and conditions of OTP
              </label>
              <div className="box">
                <input
                  className="VerifyOTP_Input"
                  type="number"
                  id="staff_number"
                />
                <label className="VerifyOTP_Label" htmlFor="staff_number">
                  Please enter the Bank Staff Employee No. if you are guided by
                  the Bank Official.
                </label>
              </div>
              <button className="Verify_btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyWithOTP;
