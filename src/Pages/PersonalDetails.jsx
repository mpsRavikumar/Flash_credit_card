import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import ActiveBar from "../component/ActiveBar";
import "../CSS/PersonalDetails.css";
import { FormContext } from "../App";
import axios from "axios";
import Header from "../component/Header";
import Logo from "../component/Logo";
import Footer from "../component/Footer";
import SubTitle from "../component/SubTitle";

function PersonalDetails() {
  const {
    formData: {
      id,
      etag,
      name,
      dob,
      mothers_maiden_name,
      gender,
      current_residence_address,
      city,
      state,
      education,
      email,
    },
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
    const fd = {
      name,
      dob,
      mothers_maiden_name,
      gender,
      current_residence_address,
      city,
      state,
      education,
      email,
    };
    console.log(fd);
    e.preventDefault();
    axios
      .patch("http://192.168.1.51:8082/bank_leads/" + id, fd, {
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
        navigate("/employementDetails");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="grid-container">
      <Header />
      <div className="main">
        <Logo />
        <SubTitle text="We would like to know you better " />
        <div className="PersonalDetails_forms">
          <form
            method="post"
            className="PersonalDetails_form"
            onSubmit={onSubmit}
            id="form2"
          >
            <div className="PersonalDetails_form1">
              <label className="PersonalDetails_label" htmlFor="Name">
                Name
              </label>
              <input
                className="PersonalDetails_input"
                name="name"
                type="text"
                onChange={onChange}
                required
              />

              <label className="PersonalDetails_label" htmlFor="Name">
                Date of Birth
              </label>
              <input
                className="PersonalDetails_input"
                name="dob"
                type="date"
                onChange={onChange}
                required
              />

              <label className="PersonalDetails_label" htmlFor="Name">
                Gender
              </label>
              <select
                className="PersonalDetails_input"
                name="gender"
                id=""
                onChange={onChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <label className="PersonalDetails_label" htmlFor="Name">
                Current residence address
              </label>
              <input
                className="PersonalDetails_input"
                type="text"
                name="current_residence_address"
                onChange={onChange}
                required
              />

              <label className="PersonalDetails_label" htmlFor="Name">
                Education
              </label>
              <select
                className="PersonalDetails_input"
                name="education"
                id=""
                onChange={onChange}
                required
              >
                <option value="">Education</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Diploma">Diploma</option>
                <option value="PHD">PHD</option>
              </select>
            </div>

            <div className="PersonalDetails_form2">
              <label className="PersonalDetails_label" htmlFor="Name">
                Mother's Maiden Name
              </label>
              <input
                className="PersonalDetails_input"
                name="mothers_maiden_name"
                type="text"
                required
                onChange={onChange}
              />

              <label className="PersonalDetails_label" htmlFor="Name">
                City
              </label>
              <input
                className="PersonalDetails_input"
                type="text"
                name="city"
                onChange={onChange}
                required
              />

              <label className="PersonalDetails_label" htmlFor="Name">
                State
              </label>
              <input
                className="PersonalDetails_input"
                type="text"
                name="state"
                onChange={onChange}
                required
              />

              <label className="PersonalDetails_label" htmlFor="Name">
                Email Id
              </label>
              <input
                className="PersonalDetails_input"
                type="email"
                name="email"
                onChange={onChange}
                required
              />
            </div>
            <div className="PersonalDetails_checkbox">
              <input
                className="PersonalDetails_input_checkbox"
                type="checkbox"
                required
              />
              <p className="PersonalDetails_input_checkbox_para">
                I am not a senior officer or relative of a director/senior
                officer of Induslnd bank and I am not a director(trustee) or
                relative of a directo(trustee) of any other bank/subsidiary of
                any bank(mutual funds/venture capital finds set up by banks).
              </p>
            </div>
            <button type="submit" form="form2" className="submit_btn">
              Next
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>

    //
  );
}
export default PersonalDetails;
