import React from "react";
import { Link } from "react-router-dom";
import "../CSS/VarifyWithOTP.css";
import header_image from "../Images/header_image.png";
import flash_logo from "../Images/flash-logo.png";
import TermAndCondition from "../Modal/TermAndCondition";

function VarifyWithOTP() {
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <header className="">
        <img className="header-image" src={header_image} alt="" />
        <p className="header-p">Credit Card Online Application</p>
      </header>
      <div className="MF5-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="MF5-logo">
                <img className="MF5-flashlogo" src={flash_logo} alt="" />
              </div>

              <div className="MF5-Container">
                <form action="" id="form1">
                  <label class="MF5-Label" for="Name">
                    Enter one time password that we have send to your Mobile
                    Number.
                  </label>
                  <br />
                  <input class="MF5-Input" type="number" />
                  <br />
                  <Link to=" " className="MF5-Resend">
                    Resend OTP?
                  </Link>
                  <br />
                  <br />

                  <input className="MF5-checkbox" type="checkbox" required />
                  <p className="MF5-checkbox-P">
                    I Agree to{" "}
                    <Link
                      to=""
                      className="MF5-checkbox-TC"
                      onClick={() => setModalShow(true)}
                    >
                      term and condition
                    </Link>{" "}
                    of OTP.
                  </p>

                  <label class="MF5-Label" for="Name">
                    Please enter the Bank Staff Employee No. if you are guided
                    by the Bank Official.
                  </label>
                  <br />
                  <input class="MF5-Input" type="text" />

                  <Link to="/" class="btn MF5-submit-Button" id="next1">
                    Submit
                  </Link>
                </form>
              </div>

              <div>
                <TermAndCondition
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>

            <div className="col-sm-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VarifyWithOTP;
