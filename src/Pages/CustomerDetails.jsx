import React, { useContext, useState } from "react";
import header_image from "../Images/header_image.png";
import { useNavigate } from "react-router-dom";
import "../CSS/CustomerDetails.css";
import flash_logo from "../Images/flash-logo.png";
import ContactDetailsIcon from "../Images/ContactDetailsIcon.png";
import { FormContext } from "../App";
import axios from "axios";

function CustomerDetails() {
  const {
    formData,
    formData: { id, etag, mobile_no, pan_no, pincode, net_annual_income },
    setFormData,
  } = useContext(FormContext);

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
    // const { mobile_no, pan_no, pincode, net_annual_income } = formData;
    const fd = { mobile_no, pan_no, pincode, net_annual_income };
    e.preventDefault();
    axios
      .post("http://192.168.1.51:8082/bank_leads", fd)
      .then((res) => {
        console.log(res);
        setFormData((previous) => {
          return {
            ...previous,
            id: res.data._id,
            etag: res.data._etag,
          };
        });
        navigate("/personalDetails");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <header className="">
        <img className="header-image" src={header_image} alt="" />
        <p className="header-p">Credit Card Online Application</p>
      </header>
      <div className="GS-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="GS-logo">
                {/* <h1>FLASH</h1>
              <p>CREDIT CARDS PROCESSED, INSTANTLY</p> */}
                <img className="GS-flashlogo" src={flash_logo} alt="" />
              </div>
              <div>
                <h1 className="getStarted">Let's get started!</h1>

                <ul className="customerDetailsIcon">
                  <img src={ContactDetailsIcon} alt="" />
                  <li className="customerDetailsWord">Customer details</li>
                </ul>
              </div>
              <div className="GS-form-border">
                <form method="post" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-sm-6 labelInput">
                      <label style={{ color: "black" }} htmlFor="">
                        Mobile Number
                      </label>
                      <br />
                      <input
                        // type="number"
                        name="mobile_no"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        pattern="^[0-9]{10}$"
                        required
                      />
                      <br />
                      <br />
                      <label style={{ color: "black" }} htmlFor="">
                        Pincode
                      </label>
                      <br />
                      <input
                        // type="number"
                        name="pincode"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        pattern="^[0-9]{6}$"
                        required
                      />
                    </div>
                    <div className="col-sm-6 labelInput2">
                      <label style={{ color: "black" }} htmlFor="">
                        PAN Number
                      </label>
                      <br />
                      <input
                        type="text"
                        name="pan_no"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        // pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
                        required
                      />
                      <br />
                      <br />
                      <label style={{ color: "black" }} htmlFor="">
                        Net Annual Income
                      </label>
                      <br />
                      <input
                        type="number"
                        name="net_annual_income"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        min={0}
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="btn customerDetailsButton"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerDetails;
