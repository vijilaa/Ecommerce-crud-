import React from 'react'
import "./Signup.css"
import { useState } from 'react';
import { FaRegUserCircle, FaPhoneSquareAlt, FaLock } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formError = { name: "",number:"", email: "", password: "" };
    let isValid = true;

           
  
    if (!formData.name) {
      formError.name = "name is required";
      isValid = false;
    }


    if (!formData.email) {
      formError.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formError.email = "Email address is invalid";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      formError.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formError.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setError(formError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // Proceed with form submission, API call, etc.
    }
  };
  return (
    <div>
    


<div className="user-signup-page">
      <div className="user-signup-bg-img">
        <div className="user-signup-box">
          <h4 className="user-signup-h4 mt-3"> SIGNUP</h4>

          <form  onSubmit={handleSubmit} className="user-signup-form mt-4 mb-5" >
            <div className="user-signup-logo-and-input">
              <div className="user-signup-icons"><FaRegUserCircle /></div>
              <input
                placeholder="Enter your name"
                className="user-signup-input"
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                />
           
                {<div style={{color:"red"}}>{error.name}</div>}

       
         
            </div>

            <div className="user-signup-logo-and-input">
              <div className="user-signup-icons"><MdOutlineMail /></div>
              <input
                placeholder="Enter your email"
                className="user-signup-input"
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
             
                {<div style={{color:"red"}}>{error.email}</div>}
          
           
            </div>

            <div className="user-signup-logo-and-input">
              <div className="user-signup-icons"><FaPhoneSquareAlt /></div>
              <input
                placeholder="Enter your number"
                className="user-signup-input"
                type="number"
                name='number'
                value={formData.number}
                onChange={handleChange}
                required
                />
                {<div style={{color:"red"}}>{error.number}</div>}
          
            </div>

            <div className="user-signup-logo-and-input">
              <div className="user-signup-icons"><FaLock /></div>
              <input
                placeholder="Enter a new password"
                className="user-signup-input"
                type="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                />
                {<div style={{color:"red"}}>{error.password}</div>}
              
            </div>

            <div className="user-signup-logo-and-input">
              <div className="user-signup-icons"><FaLock /></div>
              <input
                placeholder="Repeat password"
                className="user-signup-input"
                type="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                />
                {<div style={{color:"red"}}>{error.password}</div>}
           
            </div>

            <div className="checkbox-div">
              <input type="checkbox" id="agreeTerms" required />
              <label className="signup-agree" htmlFor="agreeTerms">
                I agree to the{' '}
                <Link to="" className="signup-link-a">Terms of Condition</Link>
              </label>
            </div>

            <button className="user-signupBtn" type="submit">
              SIGN UP
              <span className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)">
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Signup
