import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/EmployementDetails.css";
import { FormContext } from "../App";
import axios from "axios";
import Header from "../component/Header";
import Logo from "../component/Logo";
import Footer from "../component/Footer";
import SubTitle from "../component/SubTitle";
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
    e.preventDefault();
    axios
      .patch("http://192.168.1.51:8082/bank_leads/" + id, fd, {
        headers: {
          "If-Match": etag,
        },
      })
      .then((res) => {
        // console.log(res);
        navigate("/selectCard");
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
        <SubTitle text="We are Almost there.Tell us sommething about your work !" />
        <div className="nature_of_employment">
          <label className="EmployementDetails_Label">
            Nature of Employment
          </label>
          <br />
          <input
            type="radio"
            id="salaried"
            name="nature"
            value="salaried"
            onClick={handleSelfEmployes}
          />
          <label htmlFor="salaried" className="EmployementDetails_Label">
            salaried
          </label>
          <input
            type="radio"
            name="nature"
            id="selfemployed"
            value="selfemployed"
            style={{ marginLeft: "20px" }}
            onClick={handleSalaried}
          />
          <label htmlFor="selfemployed" className="EmployementDetails_Label">
            self employed
          </label>
          <br />
        </div>

        {/*  ***********form starts here *********** */}
        <div className="EmployementDetails_forms">
          <form
            method="post"
            className="EmployementDetails_form"
            onSubmit={sendData}
            id="form3"
          >
            {salaried ? (
              <div className="EmployementDetails_form_1">
                <div className="contain_1">
                  <label className="EmployementDetails_Label" htmlFor="">
                    Net Annual Income
                  </label>
                  <input
                    type="number"
                    name="net_annual_income"
                    className="EmployementDetails_Input"
                    onChange={onChange}
                    min={0}
                    required
                  />

                  <label className="EmployementDetails_Label" htmlFor="Name">
                    Employer Sector
                  </label>
                  <select
                    className="EmployementDetails_Input"
                    name="employee_sector"
                    onChange={onChange}
                    required
                  >
                    <option value="proprietorship">proprietorship</option>
                    <option value="abc">abc</option>
                  </select>

                  <label className="EmployementDetails_Label" htmlFor="Name">
                    Occupation Code
                  </label>
                  <input
                    onChange={onChange}
                    name="occupation_code"
                    className="EmployementDetails_Input"
                    type="number"
                    required
                  />

                  <label className="EmployementDetails_Label" htmlFor="Name">
                    Source of Fund
                  </label>
                  <select
                    className="EmployementDetails_Input"
                    name="source_of_fund"
                    onChange={onChange}
                    required
                  >
                    <option value="Salary">Salary</option>
                    <option value="abc">abc</option>
                  </select>
                </div>
                <div className="contain_1">
                  <label className="EmployementDetails_Label" htmlFor="Name">
                    Type of Industry
                  </label>
                  <select
                    className="EmployementDetails_Input"
                    name="type_of_industry"
                    onChange={onChange}
                    required
                  >
                    <option value="Banking">Banking</option>
                    <option value="abc">abc</option>
                  </select>

                  <label className="EmployementDetails_Label" htmlFor="Name">
                    Current Organization Name
                  </label>
                  <input
                    onChange={onChange}
                    name="current_organization_name"
                    className="EmployementDetails_Input"
                    type="text"
                    required
                  />

                  <label className="EmployementDetails_Label" htmlFor="Name">
                    Tenure in current job(yy)
                  </label>
                  <input
                    name="tenure_in_current_job"
                    onChange={onChange}
                    className="EmployementDetails_Input"
                    type="number"
                    required
                  />

                  <label className="EmployementDetails_Label" htmlFor="Name">
                    Total work Experience(yy)
                  </label>
                  <input
                    name="total_work_experience"
                    onChange={onChange}
                    className="EmployementDetails_Input"
                    type="number"
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="EmployementDetails_form_1">
                <div className="container_1">
                  <div className="box">
                    <label className="EmployementDetails_Label" htmlFor="">
                      Net Annual Income
                    </label>
                    <input
                      type="number"
                      name="net_annual_income"
                      className="EmployementDetails_Input"
                      onChange={onChange}
                      min={0}
                      required
                    />
                  </div>
                </div>
                <div className="container_2">
                  <div className="box">
                    <label className="EmployementDetails_Label" htmlFor="Name">
                      Occupation Code
                    </label>
                    <input
                      onChange={onChange}
                      name="occupation_code"
                      className="EmployementDetails_Input"
                      type="number"
                      required
                    />
                  </div>
                  <div className="box">
                    <label className="EmployementDetails_Label" htmlFor="Name">
                      Source of Fund
                    </label>
                    <select
                      className="EmployementDetails_Input"
                      name="source_of_fund"
                      onChange={onChange}
                      required
                    >
                      <option value="Salary">Salary</option>
                      <option value="abc">abc</option>
                    </select>
                  </div>
                </div>
                <div className="container_3">
                  <div className="box">
                    <label className="EmployementDetails_Label" htmlFor="">
                      Nature of Business
                    </label>
                    <input
                      type="text"
                      name="nature_of_business"
                      className="EmployementDetails_Input"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="container_4">
                  <div className="box">
                    <label className="EmployementDetails_Label" htmlFor="">
                      Ownership_type
                    </label>
                    <input
                      type="text"
                      name="ownership_type"
                      className="EmployementDetails_Input"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="box">
                    <label className="EmployementDetails_Label" htmlFor="">
                      NO. of years in business
                    </label>
                    <input
                      type="number"
                      name="no_of_years_in_business"
                      className="EmployementDetails_Input"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </form>
          <button
            type="submit"
            className="submit_btn employement_btn"
            form="form3"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmployementDetails;
