// import React from 'react'
// import "./Forgot.css"

// const Forgot = () => {
//    if (!formData.password) {
//     formError.password = "Password is required";
//     isValid = false;
//   } else if (formData.password.length < 6) {
//     formError.password = "Password must be at least 6 characters";
//     isValid = false;
//   }

//   if (!formData.repeatpassword) {
//     formError.repeatpassword = "Repeat password is required";
//     isValid = false;
//   } else if (formData.repeatpassword.length < 6) {
//     formError.repeatpassword = "Repeat password must be at least 6 characters";
//     isValid = false;
//   } else if (formData.password !== formData.repeatpassword) {
//     formError.repeatpassword = "Passwords do not match";
//     isValid = false;
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="user-form">
//           <input
//             type='email'
//             className='form-control input-line'
//             placeholder='Email'
//             name="email"
//             value={formData.email}
//             onChange={handleChange} />
//           <input
//             type='Password'
//             className='form-control input-line mt-3'
//             placeholder='New Password'
//             name="password"
//             value={formData.password}
//             onChange={handleChange} />
//           <input
//             type='password'
//             className='form-control input-line mt-3'
//             placeholder='Confirm Password'
//             name="password"
//             value={formData.password}
//             onChange={handleChange} />
//           <button className='btn btn-secondary mt-3 ' type='submit'>Continue</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Forgot


import React, { useState, useEffect } from 'react';
import "./Forgot.css";

const Forgot = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatpassword: ''
  });

  const [formError, setFormError] = useState({});
  const [oldPassword, setOldPassword] = useState('');

  // Load the existing password from localStorage when the component mounts
  useEffect(() => {
    const savedPassword = localStorage.getItem('userPassword');
    if (savedPassword) {
      setOldPassword(savedPassword);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    let isValid = true;

    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.repeatpassword) {
      errors.repeatpassword = "Repeat password is required";
      isValid = false;
    } else if (formData.repeatpassword !== formData.password) {
      errors.repeatpassword = "Passwords do not match";
      isValid = false;
    }

    setFormError(errors);

    if (isValid) {
      // Replace old password with the new confirmed password
      localStorage.setItem('userPassword', formData.repeatpassword);

      alert("Password has been updated successfully!");

      // Clear the form
      setFormData({
        email: '',
        password: '',
        repeatpassword: ''
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="user-form">
          <input
            type="email"
            className="form-control input-line"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control input-line mt-3"
            placeholder="New Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formError.password && <p className="error">{formError.password}</p>}
          <input
            type="password"
            className="form-control input-line mt-3"
            placeholder="Confirm Password"
            name="repeatpassword"
            value={formData.repeatpassword}
            onChange={handleChange}
          />
          {formError.repeatpassword && <p className="error">{formError.repeatpassword}</p>}
          <button className="btn btn-secondary mt-3" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forgot;
