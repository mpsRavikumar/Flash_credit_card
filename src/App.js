import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDetails from "./Pages/CustomerDetails";
import Dashboard from "./Pages/Dashboard";
import EmployementDetails from "./Pages/EmployementDetails";
import PersonalDetails from "./Pages/PersonalDetails";
import SelectCard from "./Pages/SelectCard";
import VarifyWithOTP from "./Pages/VarifyWithOTP";

export const FormContext = createContext({
  formData: {
    id: "",
    etag: "",
    mobile_no: "",
    pan_no: "",
    pincode: "",
    net_annual_income: "",
    name: "",
    dob: "",
    mothers_maiden_name: "",
    gender: "",
    current_residence_address: "",
    city: "",
    state: "",
    education: "",
    email: "",
    employee_sector: "",
    occupation_code: "",
    source_of_fund: "",
    type_of_industry: "",
    current_organization_name: "",
    tenure_in_current_job: "",
    total_work_experience: "",
    nature_of_business: "",
    ownership_type: "",
    no_of_years_in_business: "",
    bank_employee_no: "",
  },
  setFormData: () => {},
});
function App() {
  const [formData, setFormData] = useState({
    id: "",
    etag: "",
    mobile_no: "",
    pan_no: "",
    pincode: "",
    net_annual_income: "",
    name: "",
    dob: "",
    mothers_maiden_name: "",
    gender: "",
    current_residence_address: "",
    city: "",
    state: "",
    education: "",
    email: "",
    employee_sector: "",
    occupation_code: "",
    source_of_fund: "",
    type_of_industry: "",
    current_organization_name: "",
    tenure_in_current_job: "",
    total_work_experience: "",
    nature_of_business: "",
    ownership_type: "",
    no_of_years_in_business: "",
    bank_employee_no: "",
  });
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="customerDetails" element={<CustomerDetails />} />
          <Route path="personalDetails" element={<PersonalDetails />} />
          <Route path="employementDetails" element={<EmployementDetails />} />
          <Route path="selectCard" element={<SelectCard />} />
          <Route path="varifyWithOtp" element={<VarifyWithOTP />} />
        </Routes>
      </BrowserRouter>
    </FormContext.Provider>
  );
}

export default App;
