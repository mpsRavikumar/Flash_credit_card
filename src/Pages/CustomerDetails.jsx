import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CustomerDetails.css";
import { FormContext } from "../App";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Logo from "../component/Logo";
import SubTitle from "../component/SubTitle";
import contactIcon from "../Images/ContactDetailsIcon.png";
import { useForm } from "react-hook-form";

function CustomerDetails() {
  const {
    formData,
    formData: { id, etag, mobile_no, pan_no, pincode, net_annual_income },
    setFormData,
  } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    e.preventDefault();
    const fd = { mobile_no, pan_no, pincode, net_annual_income };
    axios
      .post("https://mwbapi.usecasetechnologies.com/bank_leads", fd)
      .then((res) => {
        // console.log(res);
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
                  placeholder="Mobile number"
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
                  placeholder="Pin code"
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
                  placeholder="PAN number"
                  name="pan_no"
                  className="CustomerDetailsInput"
                  onChange={onChange}
                  pattern="^([A-Z]){5}([0-9]){4}([A-Z]){1}?$"
                  required
                />

                <label className="customerDetails_label" htmlFor="">
                  Net Annual Income
                </label>
                <input
                  type="number"
                  placeholder="Annual income"
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
