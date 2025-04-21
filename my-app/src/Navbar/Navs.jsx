import React, { useEffect } from 'react';
import "./Navs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Ensure Bootstrap JS is loaded (with Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


import img1 from "../assets/Images/logo.png"
function Navs() {
  return (
    <div className="container">
      {/* <nav className="navbar navbar-expand-sm navbar-light bg-white navbar-width"> */}
        {/* Brand + Toggle Button */}
        {/* <a href="#" className="navbar-brand text-dark">OUR SHOP</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
          aria-controls="mynavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar">
          
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">About us</a>
            </li>
          </ul>

          <div className=" mt-2 mt-sm-0">
            <Link to="/log">
              <FontAwesomeIcon icon={faUser} className="user-icon" style={{ marginLeft: "20px" }} />
            </Link>
          </div>

        </div>
      </nav> */}


<div className="container">
  <nav className="navbar navbar-expand-sm navbar-light bg-white navbar-width">
    <a href="#" className="navbar-brand text-dark">OUR SHOP</a>
    {/* <img className='navbar-logo-img' src={img1} alt='#' />  */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mynavbar"
      aria-controls="mynavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="mynavbar">
      {/* Center nav items */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-warning" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">About us</a>
        </li>
      </ul>

      {/* Right user icon */}
      <div className="d-flex ms-auto align-items-center">
        <Link to="/log">
          <FontAwesomeIcon icon={faUser} className="user-icon" style={{ marginLeft: "20px" }} />
        </Link>
      </div>
    </div>
  </nav>
</div>

    </div>
  );
}

export default Navs;
