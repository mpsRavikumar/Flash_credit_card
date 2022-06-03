import React from 'react'
import { useLocation } from 'react-router-dom'
import '../component/ActiveBar.css'

function ActiveBar() {

  const location = useLocation().pathname;
  return (
    <div>
        
        <div className="MF">
              <ul className="MFUl"> 
                <li className="MFLi" 
                 >
                  <span on className="MFSpan" style={location==="/personalDetails" ? {background: "#832625"}:{}}>
                    {" "}
                  </span>
                  <div className="MF-detail">
                    <strong>Personal Details</strong>
                    <span>Step 1 of 5</span>
                  </div>
                </li>
                <li className="MFLi">
                  <span className="MFSpan"  style={location==="/employementDetails" ? {background: "#832625" }:{}}> </span>
                  <div className="MF-detail">
                    <strong>Employment Details</strong>
                    <span>Step 2 of 5</span>
                  </div>
                </li>
                <li className="MFLi"  >
                  <span className="MFSpan" style={location==="/residentialDetails" ? {background: "#832625"}:{}}> </span>
                  <div className="MF-detail">
                    <strong>Residential Details</strong>
                    <span>Step 3 of 5</span>
                  </div>
                </li>
                <li className="MFLi">
                  <span className="MFSpan" style={location==="/selectCard" ? {background: "#832625"}:{}}> </span>
                  <div className="MF-detail">
                    <strong>Select Card</strong>
                    <span>Step 4 of 5</span>
                  </div>
                </li>
                <li className="MFLi">
                  <span className="MFSpan" style={location==="/varifyWithOtp" ? {background: "#832625"}:{}}> </span>
                  <div className="MF-detail">
                    <strong>Verify with OTP</strong>
                    <span>Step 5 of 5</span>
                  </div>
                </li>
              </ul>
            </div>

    </div>
  )
}

export default ActiveBar