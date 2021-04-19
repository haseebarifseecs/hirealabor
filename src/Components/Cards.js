import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import HomeNav from "./HomeNav";
import { database } from "../services/firebase";
function Cards(props) {
  const [result, setResults] = useState([]);
  const [userInfo,setUserInfo]=useState({})
  
  useEffect(() => {
    var ref = database.ref();
    ref
      .child("users")
      .orderByChild(
        `userinfo/topskills/${props.history.location.state.searchTerm}`
      )
      .equalTo(true)
      .on("value", function (snapshot) {
        var tempArr = Object.values(snapshot.val());
        var tempArr2 = [];
        tempArr.forEach((el) => {
          tempArr2.push(el.userinfo);
        });
        var index = 0;
        snapshot.forEach((child) => {
          tempArr2[index].key = child.key;
          index++;
        });
        console.log(tempArr2);        
        setResults(tempArr2);
      });

  
  }, []);
  const manipulateData = (reviews) => {
    let averageReviews = 0;
    let feedBackNum = reviews.length;
    averageReviews = averageReviews + reviews.map( el => {
      return el.rating
    })
    let ratingRatio = averageReviews/feedBackNum;
    let percentage = (ratingRatio * 100) / 5;

    return {
      feedBackNum:feedBackNum,
      ratingRatio:ratingRatio,
      percentage:percentage
    }

  }
  const handleProfile=(key)=>{
    props.history.push("/profile",{userID:key})
  }
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Header */}
          <HomeNav />
          {console.log(result)}
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-8 col-12">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Search
                      </li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">
                    {result.length} matches found for : &nbsp;&nbsp;
                    {props.history.location.state.searchTerm} In{" "}
                    {props.history.location.state.location}
                  </h2>
                </div>
                <div className="col-md-4 col-12 d-md-block d-none">
                  <div className="sort-by">
                    <span className="sort-title">Sort by</span>
                    <span className="sortby-fliter">
                      <select className="select">
                        <option>Select</option>
                        <option className="sorting">Rating</option>
                        <option className="sorting">Popular</option>
                        <option className="sorting">Latest</option>
                        <option className="sorting">Free</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Page Content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                  {/* Search Filter */}
                  <div className="card search-filter">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Search Filter</h4>
                    </div>
                    <div className="card-body">
                      <div className="filter-widget">
                        <h4>Gender</h4>
                        <div>
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="gender_type"
                              defaultChecked
                            />
                            <span className="checkmark" /> Male
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="gender_type" />
                            <span className="checkmark" /> Female
                          </label>
                        </div>
                      </div>
                      <div className="filter-widget">
                        <h4>Budget</h4>
                        <div>
                          <select className="form-control" name="subcategory">
                            <option value="English">10$</option>
                            <option value="Urdu">20$</option>
                            <option value="English">50$</option>
                            <option value="Urdu">100$</option>
                            <option value="English">200$</option>
                            <option value="Urdu">500$</option>
                          </select>
                        </div>
                      </div>
                      <div className="btn-search">
                        <button type="button" className="btn btn-block">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* /Search Filter */}
                </div>

                <div className="col-md-12 col-lg-8 col-xl-9">
                  {/* Doctor Widget */}
                  {result.length > 0 ? (
                    result.map((el) => {
                      return (
                        <div className="card">
                          <div className="card-body">
                            <div className="doctor-widget">
                              <div className="doc-info-left">
                                <div className="doctor-img">
                                  <a href="doctor-profile.html">
                                    <img
                                      src={el.imageUrl}
                                      className="img-fluid"
                                      alt="User Image"
                                    />
                                  </a>
                                </div>
                                <div className="doc-info-cont">
                                  <h4 className="doc-name">
                                    <a href="doctor-profile.html">
                                      {el.fullname}
                                    </a>
                                  </h4>
                                  <p className="doc-speciality">
                                    Professional {el.occupation}
                                  </p>
                                  
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    <span className="d-inline-block average-rating">
                                      (17)
                                    </span>
                                  </div>
                                  <div className="clinic-details">
                                    <p className="doc-location">
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      {el.location}, Pakistan
                                    </p>
                                  </div>
                                  <div className="clinic-services">
                                    {Object.keys(el.topskills).length > 0
                                      ? Object.keys(el.topskills).map((el) => {
                                          return <span>{el}</span>;
                                        })
                                      : console.log("noe")}
                                  </div>
                                </div>
                              </div>
                              <div className="doc-info-right">
                                <div className="clini-infos">
                                  <ul>
                                    <li>
                                      <i className="far fa-thumbs-up" /> 98%
                                    </li>
                                    <li>
                                      <i className="far fa-comment" /> 17
                                      Feedback
                                    </li>
                                    <li>
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      {el.location}, Pakistan
                                    </li>
                                    <li>
                                      <i className="far fa-money-bill-alt" />{" "}
                                      {el.hourlyRate}/hr{" "}
                                      <i
                                        className="fas fa-info-circle"
                                        data-toggle="tooltip"
                                        title="Worker Expected Estimate"
                                      />{" "}
                                    </li>
                                  </ul>
                                </div>
                                <div className="clinic-booking">
                                  <a
                                    className="view-pro-btn"
                                    href="javascript:void(0)"
                                    onClick={()=>handleProfile(el.key)}
                                  >
                                    View Profile
                                  </a>
                                  <a className="apt-btn" href="booking.html">
                                    Hire Labor
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="outerLAyerofSpinner"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                  {/* <div className="load-more text-center">
                    <a
                      className="btn btn-primary btn-sm"
                      href="javascript:void(0);"
                    >
                      Load More
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          {/* Footer */}
          <footer className="footer">
            {/* Footer Top */}
            <div className="footer-top">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-about">
                      <div className="footer-logo">
                        <img src="assets/img/footer-logo.png" alt="logo" />
                      </div>
                      <div className="footer-about-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <div className="social-icon">
                          <ul>
                            <li>
                              <a href="#" target="_blank">
                                <i className="fab fa-facebook-f" />{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <i className="fab fa-twitter" />{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <i className="fab fa-dribbble" />{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Patients</h2>
                      <ul>
                        <li>
                          <a href="search.html">Search for Doctors</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li>
                          <a href="booking.html">Booking</a>
                        </li>
                        <li>
                          <a href="patient-dashboard.html">Patient Dashboard</a>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Doctors</h2>
                      <ul>
                        <li>
                          <a href="appointments.html">Appointments</a>
                        </li>
                        <li>
                          <a href="chat.html">Chat</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="doctor-register.html">Register</a>
                        </li>
                        <li>
                          <a href="doctor-dashboard.html">Doctor Dashboard</a>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-3 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-contact">
                      <h2 className="footer-title">Contact Us</h2>
                      <div className="footer-contact-info">
                        <div className="footer-address">
                          <span>
                            <i className="fas fa-map-marker-alt" />
                          </span>
                          <p>
                            {" "}
                            3556 Beech Street, San Francisco,
                            <br /> California, CA 94108{" "}
                          </p>
                        </div>
                        <p>
                          <i className="fas fa-phone-alt" />
                          +1 315 369 5943
                        </p>
                        <p className="mb-0">
                          <i className="fas fa-envelope" />
                          doccure@example.com
                        </p>
                      </div>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                </div>
              </div>
            </div>
            {/* /Footer Top */}
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="container-fluid">
                {/* Copyright */}
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-text">
                        <p className="mb-0">
                          © 2020 Doccure. All rights reserved.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      {/* Copyright Menu */}
                      <div className="copyright-menu">
                        <ul className="policy-menu">
                          <li>
                            <a href="term-condition.html">
                              Terms and Conditions
                            </a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">Policy</a>
                          </li>
                        </ul>
                      </div>
                      {/* /Copyright Menu */}
                    </div>
                  </div>
                </div>
                {/* /Copyright */}
              </div>
            </div>
            {/* /Footer Bottom */}
          </footer>
          {/* /Footer */}
        </div>
        {/* /Main Wrapper */}
        {/* jQuery */}
      </>
    </>
  );
}

export default Cards;
