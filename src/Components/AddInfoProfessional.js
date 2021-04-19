import React, { useState } from "react";
import HomeNav from "./HomeNav";
import { database } from "../services/firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
function AddInfoProfessional(props) {
  console.log(props.location.state);
  const [occupation, setOccupation] = useState("Cleaner");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tags, handleTags] = useState([]);
  const [phone, setPhone] = useState("");
  const userId = localStorage.getItem("userId");
  const [hourlyRate, setHourlyRate] = useState(0);
  const handleoccupation = (e) => {
    setOccupation(e.target.value);
  };
  const handleHourlyRate = (e) => {
    setHourlyRate(e.target.value);
  };
  const handlephone = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let topskills = tags.reduce((acc, curr) => ((acc[curr] = true), acc), {});
    console.log(topskills);
    if (window.confirm("Are You Done with your profile?")) {
      database.ref("users/" + userId + "/userinfo/").set({
        occupation,
        startDate: startDate.toString(),
        endDate: endDate.toString(),
        phone,
        topskills,
        location: "Islamabad",
        hourlyRate,
        reviews: [
          {
            name: "Bilal",
            profileImageUrl: "sds.png",
            content: "helpfull reivew",
            rating: 4,
            recommended: true,
            date:Date.now()
          },
        ],
        ...props.location.state,
      });
    } else {
    }
  };
  return (
    <>
      <HomeNav history={props.history}/>
      <div className="page-wrapper" style={{ width: "90%", margin: "auto" }}>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Professional Info</h3>
                <p>
                  This is your time to shine. Let potential buyers know what you
                  <br></br>
                  do best and how you gained your skills, certifications and
                  <br></br>
                  experience.
                </p>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body custom-edit-service">
                  {/* Add Blog */}
                  <form
                    method="post"
                    encType="multipart/form-data"
                    autoComplete="off"
                    id="update_service"
                    onSubmit={handleSubmit}
                  >
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>
                              Your Occupation{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-select"
                              name="subcategory"
                              defaultValue="Cleaning"
                              onChange={handleoccupation}
                            >
                              <option value="Cleaner">Cleaner</option>
                              <option value="Repairer">Repairer</option>
                              <option value="Maid">Maid</option>
                              <option value="Gardener">Gardener</option>
                              <option value="Driver">Driver</option>
                              <option value="Babysitter">Babysitter</option>
                              <option value="Cook">Cook</option>
                              <option value="Security guard">
                                Security guard
                              </option>
                              <option value="Ironer">Ironer</option>
                              <option value="Elder Care Taker">
                                Elder Care Taker
                              </option>
                              <option value="Housekeeper">Housekeeper</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-group">
                            <label>
                              From <span className="text-danger">*</span>
                            </label>

                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              className="form-control"
                              dateFormat="MMMM d, yyy"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div
                            className="form-group"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <label>
                              To <span className="text-danger">*</span>
                            </label>
                            <DatePicker
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              className="form-control"
                              dateFormat="MMMM d, yyy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Your Phone Number{" "}
                              <span className="text-danger">*</span>
                            </label>

                            <input
                              className="form-control"
                              type="number"
                              name="service_title"
                              id="service_title"
                              required
                              defaultValue=""
                              onChange={handlephone}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>
                              Hourly Rate <span className="text-danger">*</span>
                            </label>

                            <input
                              className="form-control"
                              type="number"
                              name="service_title"
                              id="service_title"
                              required
                              defaultValue=""
                              onChange={handleHourlyRate}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Top 2 Skills </label>
                            <TagsInput value={tags} onChange={handleTags} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Education <span className="text-danger">*</span>
                            </label>
                            <select className="form-select" name="subcategory">
                              <option value={6}>ssc</option>
                              <option value={7}>HSSC</option>
                              <option value={5}>School</option>
                              <option value={5}>College</option>
                              <option value={5}>University</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        type="submit"
                        name="form_submit"
                        value="submit"
                      >
                        Finish
                      </button>
                    </div>
                  </form>
                  {/* /Add Blog */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddInfoProfessional;
