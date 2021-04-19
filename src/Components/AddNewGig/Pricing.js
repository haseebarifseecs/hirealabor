import React, { useState } from "react";
import { storage } from "../../services/firebase";
import HomeNav from "../HomeNav";
import FileUploader from "react-firebase-file-uploader";

const Pricing = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/gig/Description", {
      ...props.history.location.state,
      packages: [
        { perk1, perk2, perk3, perk4 },
      ],
    });
  };
  const [twoPackages, setTwoPackages] = useState(false);
  console.log();
  const handleTwoPackages = (e) => {
    setTwoPackages(!twoPackages);
  };

  const [perk1, setPerk1] = useState("");
  const [perk2, setPerk2] = useState("");
  const [perk3, setPerk3] = useState("");
  const [perk4, setPerk4] = useState("");
  return (
    <>
      <HomeNav history={props.history}/>
      <div className="page-wrapper" style={{ width: "90%", margin: "auto" }}>
        <nav aria-label="breadcrumb" style={{ marginTop: "1rem" }}>
          <ol class="breadcrumb" style={{ padding: "20px" }}>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="#">Overview</a>
            </li>
            <li class="breadcrumb-item">Pricing</li>
            <li class="breadcrumb-item ">
              <a href="#">Description</a>
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-xl-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h4
                  className="card-title"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  Describe your Perks to StandOut!
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch1"
                      checked={twoPackages}
                      onChange={handleTwoPackages}
                    />
                    {/* <label
                      className="custom-control-label"
                      htmlFor="customSwitch1"
                    >
                      2 Packages
                    </label> */}
                  </div>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">Perk 1</label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          setPerk1(e.target.value);
                        }}
                        value={perk1}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">Perk 2 </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          setPerk2(e.target.value);
                        }}
                        value={perk2}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label"> Perk 3</label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        value={perk3}
                        required
                        onChange={(e) => {
                          setPerk3(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label"> Perk 4</label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        value={perk4}
                        required
                        onChange={(e) => {
                          setPerk4(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      type="submit"
                      name="form_submit"
                      value="submit"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Pricing;
