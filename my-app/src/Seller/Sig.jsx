import React, { useState } from 'react';
import './Sig.css';
import { FaRegUserCircle, FaPhoneSquareAlt, FaLock } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Sig() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.number.trim()) {
      newErrors.number = 'Phone number is required';
      isValid = false;
    } else if (formData.number.length < 10) {
      newErrors.number = 'Phone number must be at least 10 digits';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('name', formData.name);
      localStorage.setItem('email', formData.email);
      localStorage.setItem('number', formData.number);
      localStorage.setItem('password', formData.password);
      alert('Signup successful!');
      navigate('/log');
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2 className="signup-title">Create Account</h2>

          <div className="signup-field">
            <FaRegUserCircle className="signup-icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="signup-input"
            />
          </div>
          {error.name && <p className="signup-error">{error.name}</p>}

          <div className="signup-field">
            <MdOutlineMail className="signup-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
            />
          </div>
          {error.email && <p className="signup-error">{error.email}</p>}

          <div className="signup-field">
            <FaPhoneSquareAlt className="signup-icon" />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="signup-input"
            />
          </div>
          {error.number && <p className="signup-error">{error.number}</p>}

          <div className="signup-field">
            <FaLock className="signup-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
            />
          </div>
          {error.password && <p className="signup-error">{error.password}</p>}

          <div className="signup-agreement">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="/">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Sig;
