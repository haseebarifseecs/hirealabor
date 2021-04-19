import React, { useState } from "react";
import { storage } from "../../services/firebase";
import HomeNav from "../HomeNav";
import { Link } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";
import { database } from "../../services/firebase";

const Gallery = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/addinfoprofessional", {});
  };
  const [image1Url, setImage1Url] = useState(
    "https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/book.jpg"
  );
  const [image2Url, setImage2Url] = useState(
    "https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/book.jpg"
  );
  const userId = localStorage.getItem("userId");

  const handleUploadSuccess = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => setImage1Url(url));
  };
  const handleUploadSuccess2 = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => setImage2Url(url));
  };
  const handlePublish = () => {
    if (window.confirm("Publish Gig?")) {
      database
        .ref("users/" + userId + "/userinfo/gig")
        .set({
          gig: props.history.location.state,
          image2Url,
          image1Url,
        })
        .then(() => {
          props.history.push("/profile");
        });
    }
  };
  return (
    <>
      <HomeNav history={props.history}/>

      <div className="page-wrapper" style={{ width: "90%", margin: "auto" }}>
        <nav aria-label="breadcrumb" style={{ marginTop: "1rem" }}>
          <ol class="breadcrumb" style={{ padding: "20px" }}>
            <li class="breadcrumb-item active" aria-current="page">
              <Link to="/gig/overview">Overview</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/gig/overview">Pricing</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/gig/overview">Description</Link>
            </li>
            <li class="breadcrumb-item">Gallery</li>
          </ol>
        </nav>
        <section className="section home-tile-section lg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9 m-auto">
                <div className="section-header text-center">
                  <h2>Upload Gig Photos</h2>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <div
                      className="card text-center "
                      style={{ width: "400px", height: "210px" }}
                    >
                      <img
                        src={image1Url}
                        alt
                        className="img-fluid"
                        style={{ width: "400px", height: "210px" }}
                      />
                      <div className="doctor-book-card-content tile-card-content-1">
                        <div style={{ marginTop: "4rem", color: "white" }}>
                          <FileUploader
                            accept="image/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={storage.ref("images")}
                            onUploadSuccess={handleUploadSuccess}
                            style={{ color: "white", cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <div
                      className="card text-center "
                      style={{ width: "400px", height: "210px" }}
                    >
                      <img
                        src={image2Url}
                        alt
                        className="img-fluid"
                        style={{ width: "400px", height: "210px" }}
                      />
                      <div className="doctor-book-card-content tile-card-content-1">
                        <div style={{ marginTop: "4rem", color: "white" }}>
                          <FileUploader
                            accept="image/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={storage.ref("images")}
                            onUploadSuccess={handleUploadSuccess2}
                            style={{ color: "white", cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="submit-section"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <button
                      className="btn btn-primary submit-btn"
                      type="submit"
                      name="form_submit"
                      value="submit"
                      style={{ margin: "auto" }}
                      onClick={handlePublish}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
