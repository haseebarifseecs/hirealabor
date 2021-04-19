import React from "react";
import { Link } from "react-router-dom";
function Looking() {
  return (
    <div>
      <section className="section home-tile-section lg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 m-auto">
              <div className="section-header text-center">
                <h2>What are you looking for?</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="card text-center doctor-book-card">
                    <img
                      src="https://cdn.arc.dev/images/landing-page/how-it-works/step-3-2x.png"
                      alt
                      className="img-fluid"
                      style={{verticalAlign:"middle",height:"305.75px"}}

                    />
                    <div className="doctor-book-card-content tile-card-content-1">
                      <div>
                        <h3 className="card-title mb-0">Hire a Worker!</h3>
                        <Link
                        style={{color:"white",backgroundColor:"#00a8ff"}}
                          to="/login"
                          className="btn book-btn1 px-3 py-2 mt-3"
                          tabIndex={0}
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="card text-center doctor-book-card">
                    <img
                      src="https://resources.workable.com/wp-content/uploads/2019/12/how_to_hire_in_construction.png"
                      alt
                      className="img-fluid"
                      style={{verticalAlign:"middle",height:"305.75px"}}
                    />
                    <div className="doctor-book-card-content tile-card-content-1">
                      <div>
                        <h3 className="card-title mb-0">Become a Worker</h3>
                        <Link
                                                style={{color:"white",backgroundColor:"#00a8ff"}}

                          to="/login"
                          className="btn book-btn1 px-3 py-2 mt-3"
                          tabIndex={0}
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Looking;
