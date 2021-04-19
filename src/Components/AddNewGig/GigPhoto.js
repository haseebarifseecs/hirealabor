import React, { useState } from "react";
import { storage } from "../../services/firebase";
import HomeNav from "../HomeNav";
import FileUploader from "react-firebase-file-uploader";

const Overview = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/addinfoprofessional", {
      fullname,
      language,
      description,
      imageUrl,
    });
  };
  const [fullname, setFullName] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "data:image/png;base64,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"
  );
  const [progress, setProgress] = useState(0);
  const handleUploadStart = () => setProgress(0);
  const handleProgress = (progress) => {
    console.log(progress);
    setProgress(progress);
  };
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleLanguage = (e) => {
    console.log(e.target.value);

    setLanguage(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleUploadSuccess = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => setImageUrl(url));
  };
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
                    <input
                      type="hidden"
                      name="csrf_token_name"
                      defaultValue="0146f123a4c7ae94253b39bca6bd5a5e"
                    />
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
                              onChange={handleLanguage}
                              className="form-control"
                              name="subcategory"
                              value={language}
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
                              onChange={handleLanguage}
                              className="form-control"
                              name="subcategory"
                              value={language}
                            >
                              <option value="English">Full Time</option>
                              <option value="Urdu">Weak day</option>
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
                            />
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
