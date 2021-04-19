import React, { useState } from "react";
import { storage } from "../../services/firebase";
import HomeNav from "../HomeNav";
import FileUploader from "react-firebase-file-uploader";
import MultilineTextFields from '../QA';
const Overview = (props) => {
  
  const [gigTitle, setGigTitle] = useState("");
  const [category, setCategory] = useState("");
  const [serviceType, setServiceType] = useState("Full Time");
  const [searchTags, setSearchTags] = useState([]);
  const [qOne, setqOne] = useState('');
  const [qTwo, setqTwo] = useState('');
  const [qThree, setqThree] = useState('');
  const handleQOne = (e) => {
    // console.log(e.target.value);
    setqOne(e.target.value);
  }
  const handleQTwo = (e) => {
    // console.log(e.target.value);
    setqTwo(e.target.value);
  }
  const handleQThree = (e) => {
    // console.log(e.target.value);
    setqThree(e.target.value);
  }
  const handleGigTitle = (e) => {
    setGigTitle(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleServiceType = (e) => {
    setServiceType(e.target.value);
  };
  const handleSearchTags = (e) => {
    setSearchTags(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    props.history.push("/gig/pricing",{gigTitle,category,serviceType,searchTags,qOne,qTwo,qThree})
  }
  return (
    <>
      <HomeNav history={props.history}/>

      <div className="page-wrapper" style={{ width: "90%", margin: "auto" }}>
        <nav aria-label="breadcrumb" style={{ marginTop: "1rem" }}>
          <ol class="breadcrumb" style={{ padding: "20px" }}>
            <li class="breadcrumb-item active" aria-current="page">
              Overview
            </li>
            <li class="breadcrumb-item">
              <a href="#">Pricing</a>
            </li>
            <li class="breadcrumb-item ">
              <a href="#">Description</a>
            </li>
          </ol>
        </nav>
        <div className="content container-fluid">
          {/* Page Header */}
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body custom-edit-service">
                  {/* Add Blog */}
                  <form
                    autoComplete="off"
                    id="update_service"
                    onSubmit={handleSubmit}
                  >
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Gig Title <span className="text-danger">*</span>
                            </label>

                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="1"
                              style={{ minHeight: "100px" }}
                              placeholder="Something like, I will do cleaning of your house"
                              onChange={handleGigTitle}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Category <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              name="subcategory"
                              onChange={handleCategory}
                            >
                              <option value="English">Cleaning</option>
                              <option value="Urdu">Cooking</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Service Type{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              onChange={handleServiceType}
                              className="form-control"
                              name="subcategory"
                              value={serviceType}
                            >
                              <option value="Full Time">Full Time</option>
                              <option value="Weak day">Weak day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>
                              Search Tags(Comma seperated){" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="service_title"
                              id="service_title"
                              required
                              defaultValue=""
                              onChange={handleSearchTags}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-fields mb-3">
                      <div className="row" style={{display:"flex",flexDirection:"row"}}>
                        <div className="col-lg-12">
                          <div className="form-group" style={{display:"flex",flexDirection:"row"}}>
                            <MultilineTextFields question="Why would you hire me?" onChange={handleQOne}/>
                            <MultilineTextFields question="What it is your past experience?" onChange={handleQTwo}/>
                            <MultilineTextFields question="Can you show me your mern projects?" onChange={handleQThree}/>

                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
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
                        Continue
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
};

export default Overview;
