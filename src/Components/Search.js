import React from "react";

function Search() {
  return (
    <div className="main-wrapper">
      {/* Header */}
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
            <a href="index.html" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
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
            <ul className="main-nav">
              <li className="has-submenu">
                <a href="#">
                  Home <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index-1.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home slider 1</a>
                  </li>
                  <li>
                    <a href="index-slide.html">Home slider 2</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Doctors <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="doctor-dashboard.html">Doctor Dashboard</a>
                  </li>
                  <li>
                    <a href="appointments.html">Appointments</a>
                  </li>
                  <li>
                    <a href="schedule-timings.html">Schedule Timing</a>
                  </li>
                  <li>
                    <a href="my-patients.html">Patients List</a>
                  </li>
                  <li>
                    <a href="patient-profile.html">Patients Profile</a>
                  </li>
                  <li>
                    <a href="chat-doctor.html">Chat</a>
                  </li>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="doctor-profile-settings.html">Profile Settings</a>
                  </li>
                  <li>
                    <a href="reviews.html">Reviews</a>
                  </li>
                  <li>
                    <a href="doctor-register.html">Doctor Register</a>
                  </li>
                  <li className="has-submenu">
                    <a href="doctor-blog.html">Blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="doctor-blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog view</a>
                      </li>
                      <li>
                        <a href="doctor-add-blog.html">Add Blog</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu active">
                <a href="#">
                  Patients <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className="has-submenu">
                    <a href="#">Doctors</a>
                    <ul className="submenu">
                      <li>
                        <a href="map-grid.html">Map Grid</a>
                      </li>
                      <li>
                        <a href="map-list.html">Map List</a>
                      </li>
                    </ul>
                  </li>
                  <li className="active">
                    <a href="search.html">Search Doctor</a>
                  </li>
                  <li>
                    <a href="doctor-profile.html">Doctor Profile</a>
                  </li>
                  <li>
                    <a href="booking.html">Booking</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="booking-success.html">Booking Success</a>
                  </li>
                  <li>
                    <a href="patient-dashboard.html">Patient Dashboard</a>
                  </li>
                  <li>
                    <a href="favourites.html">Favourites</a>
                  </li>
                  <li>
                    <a href="chat.html">Chat</a>
                  </li>
                  <li>
                    <a href="profile-settings.html">Profile Settings</a>
                  </li>
                  <li>
                    <a href="change-password.html">Change Password</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Pharmacy <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="pharmacy-index.html">Pharmacy</a>
                  </li>
                  <li>
                    <a href="pharmacy-details.html">Pharmacy Details</a>
                  </li>
                  <li>
                    <a href="pharmacy-search.html">Pharmacy Search</a>
                  </li>
                  <li>
                    <a href="product-all.html">Product</a>
                  </li>
                  <li>
                    <a href="product-description.html">Product Description</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="product-checkout.html">Product Checkout</a>
                  </li>
                  <li>
                    <a href="payment-success.html">Payment Success</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Pages <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="voice-call.html">Voice Call</a>
                  </li>
                  <li>
                    <a href="video-call.html">Video Call</a>
                  </li>
                  <li>
                    <a href="search.html">Search Doctors</a>
                  </li>
                  <li>
                    <a href="calendar.html">Calendar</a>
                  </li>
                  <li>
                    <a href="components.html">Components</a>
                  </li>
                  <li className="has-submenu">
                    <a href="invoices.html">Invoices</a>
                    <ul className="submenu">
                      <li>
                        <a href="invoices.html">Invoices</a>
                      </li>
                      <li>
                        <a href="invoice-view.html">Invoice View</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blank-page.html">Starter Page</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Blog <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="blog-list.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#" target="_blank">
                  Admin <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="admin/index.html" target="_blank">
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="pharmacy/index.html" target="_blank">
                      Pharmacy Admin
                    </a>
                  </li>
                </ul>
              </li>
              <li className="login-link">
                <a href="login.html">Login / Signup</a>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="far fa-hospital" />
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Contact</p>
                <p className="contact-info-header"> +1 315 369 5943</p>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link header-login" href="login.html">
                login / Signup{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* /Header */}
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Search
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">
                2245 matches found for : Dentist In Bangalore
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
                    <div className="cal-icon">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Gender</h4>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="gender_type"
                          defaultChecked
                        />
                        <span className="checkmark" /> Male Doctor
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="gender_type" />
                        <span className="checkmark" /> Female Doctor
                      </label>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Select Specialist</h4>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked
                        />
                        <span className="checkmark" /> Urology
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked
                        />
                        <span className="checkmark" /> Neurology
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Dentist
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Orthopedic
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Cardiologist
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Cardiologist
                      </label>
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
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile.html">
                          <img
                            src="assets/img/doctors/doctor-thumb-01.jpg"
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile.html">Dr. Ruby Perrin</a>
                        </h4>
                        <p className="doc-speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <h5 className="doc-department">
                          <img
                            src="assets/img/specialities/specialities-05.png"
                            className="img-fluid"
                            alt="Speciality"
                          />
                          Dentist
                        </h5>
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
                            <i className="fas fa-map-marker-alt" /> Florida, USA
                          </p>
                          <ul className="clinic-gallery">
                            <li>
                              <a
                                href="assets/img/features/feature-01.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-01.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-02.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-02.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-03.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-03.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-04.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-04.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Dental Fillings</span>
                          <span> Whitneing</span>
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
                            <i className="far fa-comment" /> 17 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt" /> Florida, USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <a className="view-pro-btn" href="doctor-profile.html">
                          View Profile
                        </a>
                        <a className="apt-btn" href="booking.html">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile.html">
                          <img
                            src="assets/img/doctors/doctor-thumb-02.jpg"
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile.html">Dr. Darren Elder</a>
                        </h4>
                        <p className="doc-speciality">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
                        </p>
                        <h5 className="doc-department">
                          <img
                            src="assets/img/specialities/specialities-05.png"
                            className="img-fluid"
                            alt="Speciality"
                          />
                          Dentist
                        </h5>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (35)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </p>
                          <ul className="clinic-gallery">
                            <li>
                              <a
                                href="assets/img/features/feature-01.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-01.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-02.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-02.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-03.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-03.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-04.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-04.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Dental Fillings</span>
                          <span> Whitneing</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-thumbs-up" /> 100%
                          </li>
                          <li>
                            <i className="far fa-comment" /> 35 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $50 - $300{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <a className="view-pro-btn" href="doctor-profile.html">
                          View Profile
                        </a>
                        <a className="apt-btn" href="booking.html">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile.html">
                          <img
                            src="assets/img/doctors/doctor-thumb-03.jpg"
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile.html">Dr. Deborah Angel</a>
                        </h4>
                        <p className="doc-speciality">
                          MBBS, MD - General Medicine, DNB - Cardiology
                        </p>
                        <p className="doc-department">
                          <img
                            src="assets/img/specialities/specialities-04.png"
                            className="img-fluid"
                            alt="Speciality"
                          />
                          Cardiology
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (27)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt" /> Georgia, USA
                          </p>
                          <ul className="clinic-gallery">
                            <li>
                              <a
                                href="assets/img/features/feature-01.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-01.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-02.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-02.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-03.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-03.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-04.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-04.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Dental Fillings</span>
                          <span> Whitneing</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-thumbs-up" /> 99%
                          </li>
                          <li>
                            <i className="far fa-comment" /> 35 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <a className="view-pro-btn" href="doctor-profile.html">
                          View Profile
                        </a>
                        <a className="apt-btn" href="booking.html">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile.html">
                          <img
                            src="assets/img/doctors/doctor-thumb-04.jpg"
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile.html">Dr. Sofia Brient</a>
                        </h4>
                        <p className="doc-speciality">
                          MBBS, MS - General Surgery, MCh - Urology
                        </p>
                        <p className="doc-department">
                          <img
                            src="assets/img/specialities/specialities-01.png"
                            className="img-fluid"
                            alt="Speciality"
                          />
                          Urology
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (4)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt" /> Louisiana,
                            USA
                          </p>
                          <ul className="clinic-gallery">
                            <li>
                              <a
                                href="assets/img/features/feature-01.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-01.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-02.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-02.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-03.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-03.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-04.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-04.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Dental Fillings</span>
                          <span> Whitneing</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-thumbs-up" /> 97%
                          </li>
                          <li>
                            <i className="far fa-comment" /> 4 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $150 - $250{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <a className="view-pro-btn" href="doctor-profile.html">
                          View Profile
                        </a>
                        <a className="apt-btn" href="booking.html">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile.html">
                          <img
                            src="assets/img/doctors/doctor-thumb-06.jpg"
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile.html">
                            Dr. Katharine Berthold
                          </a>
                        </h4>
                        <p className="doc-speciality">
                          MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                        </p>
                        <p className="doc-department">
                          <img
                            src="assets/img/specialities/specialities-03.png"
                            className="img-fluid"
                            alt="Speciality"
                          />
                          Orthopaedics
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (52)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt" /> Texas, USA
                          </p>
                          <ul className="clinic-gallery">
                            <li>
                              <a
                                href="assets/img/features/feature-01.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-01.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-02.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-02.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-03.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-03.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="assets/img/features/feature-04.jpg"
                                data-fancybox="gallery"
                              >
                                <img
                                  src="assets/img/features/feature-04.jpg"
                                  alt="Feature"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Dental Fillings</span>
                          <span> Whitneing</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-thumbs-up" /> 100%
                          </li>
                          <li>
                            <i className="far fa-comment" /> 52 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt" /> Texas, USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $500{" "}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <a className="view-pro-btn" href="doctor-profile.html">
                          View Profile
                        </a>
                        <a className="apt-btn" href="booking.html">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              <div className="load-more text-center">
                <a
                  className="btn btn-primary btn-sm"
                  href="javascript:void(0);"
                >
                  Load More
                </a>
              </div>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
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
                    <p className="mb-0">© 2020 Doccure. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <a href="term-condition.html">Terms and Conditions</a>
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
  );
}

export default Search;
