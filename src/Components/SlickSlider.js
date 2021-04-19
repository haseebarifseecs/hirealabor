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
      <div style={{ backgroundColor: `white` }} className={`mb-5`}>
        <Slider {...settings}>
          <div>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img
                  src="https://img.icons8.com/cotton/2x/worker-male--v2.png"
                  className="img-fluid"
                  alt="Speciality"
                />
                <span>
                  <i className="fa fa-circle" aria-hidden="true" />
                </span>
              </div>
              <p>House Workers</p>
            </div>
          </div>
          <div>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img
                  src="https://www.pngitem.com/pimgs/m/222-2227146_cleaner-housekeeping-service-house-maid-cleaning-clean-cleaning.png"
                  className="img-fluid"
                  alt="Speciality"
                />
                <span>
                  <i className="fa fa-circle" aria-hidden="true" />
                </span>
              </div>
              <p>House Maids</p>
            </div>
          </div>
          <div>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img
                  src="https://thumbs.dreamstime.com/b/chef-woman-design-isolated-white-background-183449561.jpg"
                  className="img-fluid"
                  alt="Speciality"
                />
                <span>
                  <i className="fa fa-circle" aria-hidden="true" />
                </span>
              </div>
              <p>Premium Chefs</p>
            </div>
          </div>
          <div>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img
                  src="https://st.depositphotos.com/1476179/4722/v/950/depositphotos_47226797-stock-illustration-repair-plumbing-home.jpg"
                  className="img-fluid"
                  alt="Speciality"
                />
                <span>
                  <i className="fa fa-circle" aria-hidden="true" />
                </span>
              </div>
              <p>Plumbing Services</p>
            </div>
          </div>
          <div>
            <div className="speicality-item text-center">
              <div className="speicality-img">
                <img
                  src="https://media.istockphoto.com/vectors/plumber-mascot-plumber-character-worker-cartoon-vector-id890778568?k=6&m=890778568&s=612x612&w=0&h=J789OJpbvZwZJ98rvWZ2aySFWb793Rt1DV1C7iJhoWI="
                  className="img-fluid"
                  alt="Speciality"
                />
                <span>
                  <i className="fa fa-circle" aria-hidden="true" />
                </span>
              </div>
              <p>Best of the Best</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
