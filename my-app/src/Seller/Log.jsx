import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Log.css';

function Log() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validateLogin = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!loginData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(loginData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!loginData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      if (loginData.email === storedEmail && loginData.password === storedPassword) {
        alert('Login successful!');
        localStorage.setItem('login', 'true');
        window.dispatchEvent(new Event('loginStatusChanged'));
        navigate('/home');
      } else {
        alert('Invalid email or password.');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-form-section">
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleLoginSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="form-input"
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="form-input"
              />
              {errors.password && <div className="form-error">{errors.password}</div>}
            </div>
            <div className="form-footer">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/For" className="link-forgot">Forgot password?</Link>
            </div>
            <button type="submit" className="form-button">Login</button>
            <p className="register-link">
              Don't have an account? <Link to="/Sig">Register here</Link>
            </p>
          </form>
        </div>
        <div className="login-info-section">
  <div className="info-content">
   
    {/* <div className="info-overlay">
      <h3>Welcome Back to MiniZoo!</h3>
      <p>Access your personalized dashboard and manage your account with ease</p>
    </div> */}
  </div>
</div>

      </div>
    </div>
  );
}

export default Log;
