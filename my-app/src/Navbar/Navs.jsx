import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "../assets/Images/logo1.png"
import ProtectedRoute from './ProtectedRoute';


function Navs() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate()
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
        <div className="logo-name-div">
          <img className="logo" src={log} alt="logo" />
          <Link to="/" className="navbar-brand text-dark mb-0" style={{ fontSize: "1.5rem" }}>
            <span className='span-mini'>MINI</span>
            <span className='span-zoo'>ZOO</span>
          </Link>
        </div>
      
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
              <a className=" nav-link text-dark" href="home" 
              onClick={(e) => {
                 e.preventDefault() 
                openModal()
              
                }}>Home</a>
            </li>
            <Link to="/about" className="nav-link text-dark text-decoration-none" href="#">About us  </Link>
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
      <ProtectedRoute show={showModal} onClose={closeModal} />

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
