import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={`mb-5`}>
        <Slider {...settings}>
          <div>
            {/* Doctor Widget */}
            <div className="profile-widget mx-auto" style={{ width: `60%` }}>
              <div className="doc-img">
                <a href="doctor-profile.html">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src="assets/img/doctors/doctor-01.jpg"
                  />
                </a>
                <a href="javascript:void(0)" className="fav-btn">
                  <i className="far fa-bookmark" />
                </a>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <a href="doctor-profile.html">Padri Yahya</a>
                  <i className="fas fa-check-circle verified" />
                </h3>
                <p className="speciality">House Cleaner</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <span className="d-inline-block average-rating">(17)</span>
                </div>
                <ul className="available-info">
                  <li>
                    <i className="fas fa-map-marker-alt" /> Islamabad, Pakistan
                  </li>
                  <li>
                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt" /> Rs.5000 - 10,000
                    <i
                      className="fas fa-info-circle"
                      data-toggle="tooltip"
                      title="Lorem Ipsum"
                    />
                  </li>
                </ul>
                <div className="row row-sm">
                  <div className="col-6">
                    <a href="doctor-profile.html" className="btn view-btn">
                      View Profile
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="booking.html" className="btn book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Doctor Widget */}
            <div className="profile-widget mx-auto" style={{ width: `60%` }}>
              <div className="doc-img">
                <a href="doctor-profile.html">
                  <img
                    className="img-fluid"
                    alt="User Image"
                    src="assets/img/doctors/doctor-01.jpg"
                  />
                </a>
                <a href="javascript:void(0)" className="fav-btn">
                  <i className="far fa-bookmark" />
                </a>
              </div>
              <div className="pro-content">
                <h3 className="title">
                  <a href="doctor-profile.html">Padri Yahya</a>
                  <i className="fas fa-check-circle verified" />
                </h3>
                <p className="speciality">House Cleaner</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <span className="d-inline-block average-rating">(17)</span>
                </div>
                <ul className="available-info">
                  <li>
                    <i className="fas fa-map-marker-alt" /> Islamabad, Pakistan
                  </li>
                  <li>
                    <i className="far fa-clock" /> Available on Fri, 22 Mar
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt" /> Rs.5000 - 10,000
                    <i
                      className="fas fa-info-circle"
                      data-toggle="tooltip"
                      title="Lorem Ipsum"
                    />
                  </li>
                </ul>
                <div className="row row-sm">
                  <div className="col-6">
                    <a href="doctor-profile.html" className="btn view-btn">
                      View Profile
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="booking.html" className="btn book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
