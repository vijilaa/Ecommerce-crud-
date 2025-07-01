import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "../assets/Images/logo1.png"
import adminImg from "../assets/Images/ecom-7.jpg"
import sellerImg from "../assets/Images/ecom-8.jpg"
import userImg from "../assets/Images/ecom-9.jpg"



function Navs() {
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
      <nav className="navbar navbar-expand-sm bg-white shadow-sm px-3 navbar-width">
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

        <div className="collapse navbar-collapse " id="mynavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className=" nav-link text-dark " href="/log"
              >Home</a>
            </li>
            <Link to="/about" className="nav-link text-dark text-decoration-none" href="#">About us  </Link>
          </ul>


          <div className="d-flex justify-content-center mt-3">
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
              <h5 className="modal-title" id="userModalLabel">Select Login Type</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-row gap-3 justify-content-center text-center">

              <div className='admin-button-overall-div'>
                <img className='admin-button-logo-img' src={adminImg} alt='' height={100} width={100} />
                <Link to="" data-bs-dismiss="modal">
                  <button className="btn-admin btn-outline-dark">Admin</button>
                </Link>
              </div>

              <div className='seller-button-overall-div'>
                <img className='admin-button-logo-img' src={sellerImg} alt='' height={100} width={100} />
                <Link to="" data-bs-dismiss="modal">
                  <button className="btn-seller btn-outline-dark">Seller</button>
                </Link>
              </div>

              <div className='user-button-overall-div'>
                <img className='admin-button-logo-img' src={userImg} alt='' height={100} width={100} />
                <Link to="/log" >
                  <button className="btn-user btn-outline-dark" onClick={() => handleNavigation('/log')}>User</button>
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div>




    </div>





    // <div className="container">
    //   <nav className="navbar navbar-expand-sm navbar-light bg-white navbar-width">
    //     <div className="logo-name-div">
    //       <img className="logo" src={log} alt="logo" />
    //       <Link to="/" className="navbar-brand text-dark mb-0" style={{ fontSize: "1.5rem" }}>
    //         <span className='span-mini'>MINI</span>
    //         <span className='span-zoo'>ZOO</span>
    //       </Link>
    //     </div>

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#mynavbar"
    //       aria-controls="mynavbar"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="mynavbar">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a className=" nav-link text-dark " href="/log"
    //           >Home</a>
    //         </li>
    //         <Link to="/about" className="nav-link text-dark text-decoration-none" href="#">About us  </Link>
    //       </ul>


    //       <div className="d-flex ms-auto align-items-center">
    //         <FontAwesomeIcon
    //           icon={faUser}
    //           className="user-icon"
    //           data-bs-toggle="modal"
    //           data-bs-target="#userModal"
    //           style={{ marginLeft: "20px", cursor: "pointer" }}
    //         />
    //       </div>
    //     </div>
    //   </nav>

    //   <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="userModalLabel">User Options</h5>
    //           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div className="modal-body d-flex justify-content-between gap-2">
    //           {isLoggedin ? (
    //             <>
    //               <button
    //                 type="button"
    //                 className="btn btn-danger"
    //                 onClick={handleLogout}
    //                 data-bs-dismiss="modal"
    //               >
    //                 Logout
    //               </button>
    //               <Link to="/profile">
    //                 <button type="button" className="btn btn-outline-primary btn-2">Profile</button>
    //               </Link>
    //             </>
    //           ) : (
    //             <>
    //               <a
    //                 href="/log"
    //                 className="btn btn-outline-primary btn-2"
    //                 onClick={() => window.dispatchEvent(new Event("loginStatusChanged"))}
    //               >
    //                 Login
    //               </a>
    //               <Link to="/profile">
    //                 <button type="button" className="btn btn-outline-primary btn-2">Profile</button>
    //               </Link>
    //             </>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>



    // </div>
  );
}

export default Navs;
