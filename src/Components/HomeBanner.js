import React, { useState } from "react";
import Particles from "react-particles-js";
import { Hint } from "react-autocomplete-hint";

function HomeBanner(props) {
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/searchResults",{location,searchTerm});
  };
  const hintDataLocation = [
    "Islamabad",
    "Karachi",
    "Lahore",
    "Faislabad",
    "Multan",
    "Peshawar",
  ];

  const hintData = [
    "cleaning",
    "cooking",
    "washing",
    "maid",
    "houseKeeper",
    "Cook",
  ];
  return (
    <section className="section section-search">
      <div className="container-fluid">
        <div className="banner-wrapper">
          <div className="banner-header text-center">
            <p style={{ height: `10vh` }}>
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 200,
                      density: {
                        enable: false,
                      },
                    },
                    size: {
                      value: 4,
                      random: true,
                      anim: {
                        speed: 10,
                        size_min: 0.3,
                      },
                    },
                    line_linked: {
                      enable: false,
                    },
                    move: {
                      random: true,
                      speed: 1,
                      direction: "top",
                      out_mode: "out",
                    },
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble",
                      },
                      onclick: {
                        enable: true,
                        mode: "repulse",
                      },
                    },
                    modes: {
                      bubble: {
                        distance: 250,
                        duration: 2,
                        size: 0,
                        opacity: 0,
                      },
                      repulse: {
                        distance: 400,
                        duration: 4,
                      },
                    },
                  },
                }}
              />
            </p>
            <h1 style={{ color: "#ffd96a" }}>
              Find a Worker!, Fire up a Contract
            </h1>
            <p>Discover the best Workers in the city nearest to you.</p>
          </div>
          {/* Search */}
          <div className="search-box">
            <form
              action="https://QA Dentist-html.dreamguystech.com/template/search.html"
              onSubmit={handleSubmit}
            >
              <div className="form-group search-location">
                <Hint options={hintDataLocation} allowTabFill>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                    value={location}
                    onChange={handleLocation}
                  />
                </Hint>
                <span className="form-text">Based on your Location</span>
              </div>
              <div className="form-group search-info">
                <Hint options={hintData} allowTabFill>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search House Cleaning, Cooking services etc..."
                    value={searchTerm}
                    onChange={handleSearchTerm}
                  />
                </Hint>
                <span className="form-text">
                  Ex : Cleaning Services or Chef
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-primary search-btn mt-0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  cursor: "pointer",
                  zIndex: "100000000000000",
                }}
              >
                <i className="fas fa-search" style={{ cursor: "pointer" }} />{" "}
                <span>Search</span>
              </button>
            </form>
          </div>
          {/* /Search */}
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
