import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/EmployementDetails.css";
import header_image from "../Images/header_image.png";
import flash_logo from "../Images/flash-logo.png";
import { FormContext } from "../App";
import axios from "axios";
function EmployementDetails() {
  const {
    formData,
    formData: {
      id,
      etag,
      employee_sector,
      occupation_code,
      source_of_fund,
      type_of_industry,
      current_organization_name,
      tenure_in_current_job,
      total_work_experience,
      nature_of_business,
      ownership_type,
      no_of_years_in_business,
      bank_employee_no,
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
  const [salaried, setsalaried] = useState(true);
  // for conditional rendering radio btn salaried/selfEmployed
  const handleSalaried = (e) => {
    setsalaried(false);
  };
  const handleSelfEmployes = (e) => {
    setsalaried(true);
  };
  const navigate = useNavigate();

  const sendData = (e) => {
    const fd = {
      employee_sector,
      occupation_code,
      source_of_fund,
      type_of_industry,
      current_organization_name,
      tenure_in_current_job,
      total_work_experience,
      nature_of_business,
      ownership_type,
      no_of_years_in_business,
      bank_employee_no,
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
        navigate("/selectCard");
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

      <div className="MF2-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="MF2-logo">
                <img className="MF2-flashlogo" src={flash_logo} alt="" />
              </div>
              <div>
                <h1 className="MF2-header">
                  We are almost there. Tell us something more about you!
                </h1>
              </div>
              <div className="nature_of_employment">
                <label className="MF2-Label" htmlFor="Name">
                  <b>nature of Employment</b>
                </label>
                <br />
                <input
                  type="radio"
                  name="nature"
                  value="salaried"
                  onClick={handleSelfEmployes}
                />
                <label className="MF2-Label">salaried</label>
                <input
                  type="radio"
                  name="nature"
                  value="selfemployed"
                  style={{ marginLeft: "20px" }}
                  onClick={handleSalaried}
                />
                <label className="MF2-Label">self employed</label>
                <br />
              </div>

              <form method="post" onSubmit={sendData} id="form1">
                {salaried ? (
                  <div className="row">
                    <div className="col-sm-6 MF2-labelInput ">
                      <label className="MF2-Label" htmlFor="">
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
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="Name">
                        Employer Sector
                      </label>
                      <select
                        className="MF1-Input"
                        name="employee_sector"
                        onChange={onChange}
                        required
                      >
                        <option value="proprietorship">proprietorship</option>
                        <option value="abc">abc</option>
                      </select>
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="Name">
                        Occupation Code
                      </label>
                      <br />
                      <input
                        onChange={onChange}
                        name="occupation_code"
                        className="MF2-Input"
                        type="number"
                        required
                      />
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="Name">
                        Source of Fund
                      </label>
                      <select
                        className="MF1-Input"
                        name="source_of_fund"
                        onChange={onChange}
                        required
                      >
                        <option value="Salary">Salary</option>
                        <option value="abc">abc</option>
                      </select>
                      <br />
                      <br />
                    </div>

                    <div className="col-sm-6 MF1-labelInput1 ">
                      <label className="MF2-Label" htmlFor="Name">
                        Type of Industry
                      </label>
                      <select
                        className="MF1-Input"
                        name="type_of_industry"
                        onChange={onChange}
                        required
                      >
                        <option value="Banking">Banking</option>
                        <option value="abc">abc</option>
                      </select>
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="Name">
                        Current Organization Name
                      </label>
                      <br />
                      <input
                        onChange={onChange}
                        name="current_organization_name"
                        className="MF2-Input"
                        type="text"
                        required
                      />
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="Name">
                        Tenure in current job(yy)
                      </label>
                      <br />
                      <input
                        name="tenure_in_current_job"
                        onChange={onChange}
                        className="MF2-Input"
                        type="number"
                        required
                      />
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="Name">
                        Total work Experience(yy)
                      </label>
                      <br />
                      <input
                        name="total_work_experience"
                        onChange={onChange}
                        className="MF2-Input"
                        type="number"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-sm-6 MF2-labelInput ">
                      <label className="MF2-Label" htmlFor="">
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
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="">
                        Nature of Business
                      </label>
                      <br />
                      <input
                        type="text"
                        name="nature_of_business"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        required
                      />
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="">
                        Ownership_type
                      </label>
                      <br />
                      <input
                        type="text"
                        name="ownership_type"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        required
                      />
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="">
                        NO. of years in business
                      </label>
                      <br />
                      <input
                        type="number"
                        name="no_of_years_in_business"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        required
                      />
                      <br />
                      <br />
                      <label className="MF2-Label" htmlFor="">
                        Bank Employee number
                      </label>
                      <br />
                      <input
                        type="number"
                        name="bank_employee_no"
                        className="CustomerDetailsInput"
                        onChange={onChange}
                        required
                      />
                      <br />
                      <br />
                    </div>
                  </div>
                )}
                <button type="submit" className="btn MF2-Button" id="next1">
                  Next
                </button>
              </form>
              {/* </div> */}
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployementDetails;
