import React from "react";
import "../Assets/css/bootstrap.min.css";
import "../Assets/css/style.css";
import "../Assets/css/custom.css";
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LoginAvatar from './LoginAvatar';

function HomeNav(props) {
  const handleLogOut=()=>{
    localStorage.clear()
    props.history.push("/")
  }
  return (
    <div className="main-wrapper" style={{ backgroundColor: `#000000` }}>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/" className="navbar-brand logo">
              <img
                style={{ width: "85px" }}
                src="https://i.ibb.co/sWkYmjR/Screenshot-from-2021-04-14-20-35-46.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="index.html" className="menu-logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
              >
                <i className="fas fa-times" />
              </a>
            </div>

          </div>
          <ul className="nav header-navbar-rht">
            {props.becomeaworker ? (
              <li className="nav-item">
                <Link
                  to="/becomeaworker"
                  className="nav-link header-login"
                  href="#"
                >
                  Become A Worker{" "}
                </Link>
              </li>
            ) : (
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital" />
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
            )}
            {localStorage.getItem("userId")?            
            <ul className="main-nav">
              <li className="has-submenu">
                <a href="#">
                 <LoginAvatar username={localStorage.getItem("username")}/> Hi, {localStorage.getItem("username")} <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/dashboard"><DashboardIcon/> Dashboard</Link>
                  </li>
                  <li>
                    <a href="doctor-profile.html"><AccountBoxIcon/> My Account</a>
                  </li>
                  <li>
                    <a href="booking.html"><YoutubeSearchedForIcon/> Start Searching</a>
                  </li>
                  <li>
                    <a href="#" onClick={()=>handleLogOut()}><ExitToAppIcon/> Log Out</a>
                  </li>
                </ul>
              </li>

              <li className="login-link">
                <a
                  href="login.html"
                  ref={(node) => {
                    if (node) {
                      node.style.setProperty("color", "#31c5f2", "important");
                    }
                  }}
                >
                  Login / Signup
                </a>
              </li>
            </ul>:
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link header-login"
                href="login.html"
              >
                login / Signup{" "}
              </Link>
            </li>}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HomeNav;
