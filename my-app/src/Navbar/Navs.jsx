import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "../assets/Images/logo1"


function Navs() {
  const [isLoggedin, setIsLoggedin] = useState(false);
const navigate=useNavigate()
  useEffect(() => {
    const checkLogin = () => {
      const loginStatus = localStorage.getItem("login");
      setIsLoggedin(loginStatus === "true");
    };

    checkLogin(); // Initial check

    window.addEventListener("storage", checkLogin);
    window.addEventListener("loginStatusChanged", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("loginStatusChanged", checkLogin);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("login");
    navigate("/")
 
    window.dispatchEvent(new Event("loginStatusChanged"));
  }



  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-white navbar-width">
         {/* <img className='user-login-logo mt-1' src={} alt='User Logo' /> */}
        <a href="#" style={{ fontSize: '2.3rem' }} className="navbar-brand text-dark ">MINIZOO</a>

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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Home</a>
            </li>
            <Link to="/about"  className="nav-link text-dark text-decoration-none" href="#">About us  </Link>
          </ul>

          
          <div className="d-flex ms-auto align-items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="user-icon"
              data-bs-toggle="modal"
              data-bs-target="#userModal"
              style={{ marginLeft: "20px", cursor: "pointer" }}
            />
          </div>
        </div>
      </nav>

    
      <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userModalLabel">User Options</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {isLoggedin ? (
                <button className="btn btn-danger" onClick={handleLogout} data-bs-dismiss="modal">Logout</button>
              ) : (
                <a href="/log" className="btn btn-primary" onClick={() => {
                  
                  window.dispatchEvent(new Event("loginStatusChanged"));
                }}>Login</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navs;
