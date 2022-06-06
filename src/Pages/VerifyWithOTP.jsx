import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/VerifyWithOTP.css";
import header_image from "../Images/header_image.png";
import flash_logo from "../Images/flash-logo.png";
import TermAndCondition from "../Modal/TermAndCondition";
import Logo from "../component/Logo";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { FormContext } from "../App";
import axios from "axios";

function VerifyWithOTP() {
  const {
    formData: { id, etag, bank_employee_no },
    setFormData,
  } = useContext(FormContext);
  // const [modalShow, setModalShow] = React.useState(false);
  const onChange = (e) => {
    setFormData((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const fd = {
      bank_employee_no,
    };
    console.log(fd);
    e.preventDefault();
    axios
      .patch("https://mwbapi.usecasetechnologies.com/bank_leads" + id, fd, {
        headers: {
          "If-Match": etag,
        },
      })
      .then((res) => {
        console.log(res);
        setFormData((previous) => {
          return {
            ...previous,
            id: res.data._id,
            etag: res.data._etag,
          };
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="grid-container">
      <Header />
      <div className="main">
        <div className="contain">
          <Logo />
          <div className="form">
            <form onSubmit={onSubmit}>
              <div className="box">
                <label className="VerifyOTP_Label">
                  Enter one time password that we have send to your Mobile
                  Number.
                </label>
                <input type="number" className="VerifyOTP_Input" />
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
                <label className="VerifyOTP_Label" htmlFor="staff_number">
                  Please enter the Bank Staff Employee No. if you are guided by
                  the Bank Official.
                </label>
                <input
                  className="VerifyOTP_Input"
                  type="number"
                  name="bank_employee_no"
                  onChange={onChange}
                  id="staff_number"
                  pattern="^[0-9]{10}$"
                  required
                />
              </div>
              <button className="Verify_btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VerifyWithOTP;
