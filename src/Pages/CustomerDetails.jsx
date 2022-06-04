import React, { useContext, useState } from "react";
import header_image from "../Images/header_image.png";
import { useNavigate } from "react-router-dom";
import "../CSS/CustomerDetails.css";
import flash_logo from "../Images/flash-logo.png";
import ContactDetailsIcon from "../Images/ContactDetailsIcon.png";
import { FormContext } from "../App";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Logo from "../component/Logo";
import SubTitle from "../component/SubTitle";
import contactIcon from "../Images/ContactDetailsIcon.png";

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
      .post("http://192.168.1.51:8082/bank_leads/", fd)
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
    <div className="grid-container">
      <Header />
      <div className="main">
        <div className="contain">
          <Logo />
          <SubTitle text="Let's get started !" />
          <div className="widget">
            <img className="contactIcon" src={contactIcon} alt="contactIcon" />
            <p className="customertext">Customer Details</p>
          </div>
          <div className="CustomerDetails_forms">
            <form
              className="CustomerDetails_form"
              id="form1"
              method="post"
              onSubmit={onSubmit}
            >
              <div className="customer_contain">
                <label className="customerDetails_label" htmlFor="">
                  Mobile Number
                </label>
                <input
                  // type="number"
                  name="mobile_no"
                  className="CustomerDetailsInput"
                  onChange={onChange}
                  pattern="^[0-9]{10}$"
                  required
                />

                <label className="customerDetails_label" htmlFor="">
                  Pincode
                </label>

                <input
                  // type="number"
                  name="pincode"
                  className="CustomerDetailsInput"
                  onChange={onChange}
                  pattern="^[0-9]{6}$"
                  required
                />
              </div>
              <div className="customer_contain">
                <label className="customerDetails_label" htmlFor="">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="pan_no"
                  className="CustomerDetailsInput"
                  onChange={onChange}
                  // pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
                  required
                />

                <label className="customerDetails_label" htmlFor="">
                  Net Annual Income
                </label>
                <input
                  type="number"
                  name="net_annual_income"
                  className="CustomerDetailsInput"
                  onChange={onChange}
                  min={0}
                  required
                />
              </div>
            </form>
            <button
              type="submit"
              form="form1"
              className="submit_btn customer_form_btn"
              style={{ margin: "20rem" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CustomerDetails;
