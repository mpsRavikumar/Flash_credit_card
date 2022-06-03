import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import ActiveBar from "../component/ActiveBar";
import "../CSS/PersonalDetails.css";
import header_image from "../Images/header_image.png";
import flash_logo from "../Images/flash-logo.png";
import { FormContext } from "../App";
import axios from "axios";

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
    <div>
      <header className="">
        <img className="header-image" src={header_image} alt="" />
        <p className="header-p">Credit Card Online Application</p>
      </header>

      <div className="MF1-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="MF1-logo">
                <img className="MF1-flashlogo" src={flash_logo} alt="" />
              </div>
              <div>
                <h1 className="MF1-header">We would like to know you better</h1>
              </div>

              <form method="post" onSubmit={onSubmit} id="form1">
                <div className="row">
                  <div className="col-sm-6 MF1-labelInput ">
                    {/* <label className="MF1-Label" htmlFor="Name">
                      S. No : 1
                    </label>
                    <br />
                    <input className="MF1-Input" type="number" required />
                    <br />
                    <br /> */}

                    <label className="MF1-Label" htmlFor="Name">
                      Name
                    </label>
                    <br />
                    <input
                      className="MF1-Input"
                      name="name"
                      type="text"
                      onChange={onChange}
                      required
                    />
                    <br />
                    <br />
                    <label className="MF1-Label" htmlFor="Name">
                      Date of Birth
                    </label>
                    <br />
                    <input
                      className="MF1-Input"
                      name="dob"
                      type="date"
                      onChange={onChange}
                      required
                    />
                    <br />
                    <br />
                    <label className="MF1-Label" htmlFor="Name">
                      Gender
                    </label>
                    <br />
                    <select
                      className="MF1-Input"
                      name="gender"
                      id=""
                      onChange={onChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <br />
                    <br />
                    <label className="MF1-Label" htmlFor="Name">
                      Current residence address
                    </label>
                    <br />
                    <input
                      className="MF1-Input"
                      type="text"
                      name="current_residence_address"
                      onChange={onChange}
                      required
                    />
                    <br />
                    <br />
                    <label className="MF1-Label" htmlFor="Name">
                      Education
                    </label>
                    <br />
                    <select
                      className="MF1-Input"
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
                    <br />
                    <br />
                  </div>

                  <div className="col-sm-6 MF1-labelInput1 ">
                    <label className="MF1-Label" htmlFor="Name">
                      Mother's Maiden Name
                    </label>
                    <br />
                    <input
                      className="MF1-Input"
                      name="mothers_maiden_name"
                      type="text"
                      required
                      onChange={onChange}
                    />
                    <br />
                    <br />

                    <label className="MF1-Label" htmlFor="Name">
                      City
                    </label>
                    <br />
                    <input
                      className="MF1-Input"
                      type="text"
                      name="city"
                      onChange={onChange}
                      required
                    />
                    <br />
                    <br />
                    <label className="MF1-Label" htmlFor="Name">
                      State
                    </label>
                    <br />
                    <input
                      className="MF1-Input"
                      type="text"
                      name="state"
                      onChange={onChange}
                      required
                    />
                    <br />
                    <br />

                    <label className="MF1-Label" htmlFor="Name">
                      Email Id
                    </label>
                    <br />
                    <input
                      className="MF1-Input"
                      type="email"
                      name="email"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <input className="MF1-checkbox" type="checkbox" required />
                    <p className="MF1-checkboxP">
                      I am not a senior officer or relative of a director/senior
                      officer of Induslnd bank and I am not a director(trustee)
                      or relative of a directo(trustee) of any other
                      bank/subsidiary of any bank(mutual funds/venture capital
                      finds set up by banks).
                    </p>
                  </div>
                </div>

                <button type="submit" className="btn MF1-Button" id="next1">
                  Next
                </button>
              </form>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalDetails;
