import React, { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import { ReactSlider } from "./ReactSlider";
import AccordianQ from "./AccordianQ";
import "../Assets/css/mycss.css";
import { Link } from "react-router-dom";
function Description(props) {
  const result = props.history.location.state.test;
  const Id=props.history.location.state.userId
  console.log(Id)
  console.log(result.reviews);
  const ratingStore = [];

  const calculateStars = (rating) => {
    for (let i = 0; i < rating; i++) {
      ratingStore.push(<i className="fas fa-star filled" />);
    }
    return ratingStore;
  };
  const manipulateData = (reviews) => {
    let averageReviews = 0;
    let feedBackNum = reviews.length;
    averageReviews =
      averageReviews +
      reviews.map((el) => {
        return el.rating;
      });
    let ratingRatio = averageReviews / feedBackNum;
    let percentage = (ratingRatio * 100) / 5;
    return {
      feedBackNum: feedBackNum,
      ratingRatio: ratingRatio,
      percentage: percentage,
    };
  };
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(manipulateData(result.reviews));
  }, []);
  return (
    <>
      <HomeNav />
      {/* Description Container */}
      <div className="row">
        <div
          id="d-card"
          className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 mx-auto"
        >
          {/* Breadcrumb */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Service</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Category</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">{result.gig.gig.category}</a>
                  </li>
                </ol>
              </nav>
            </div>
          </nav>
          {/* Carousel */}
          <div className="container">
            <ReactSlider
              imageOne={result.gig.image1Url}
              imageTwo={result.gig.image2Url}
            />
          </div>
          <div className="description mt-2">
            <h4 className="h4 note note-primary">About This Service</h4>
            <p
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: result.gig.gig.description }}
            ></p>
            <h4 className="h4 note note-primary">What will you get?</h4>
            <ul>
              <li className="text-muted">{result.gig.gig.packages[0].perk1}</li>
              <li className="text-muted">{result.gig.gig.packages[0].perk2}</li>
              <li className="text-muted">{result.gig.gig.packages[0].perk3}</li>
              <li className="text-muted">{result.gig.gig.packages[0].perk4}</li>
            </ul>
          </div>
          <div>
            <Link
              to={{
                pathname: "/booking",
                state: {
                  test: result,
                  Id
                },
              }}
              className="btn btn-dark my-3 w-100"
            >
              Purchase
            </Link>
          </div>
          <h4 className="h4 note note-secondary">
            Do you have Special Requirements?
          </h4>
          <div>
            <button className="btn btn-secondary my-1 w-100">
              Get Custom Quote!
            </button>
          </div>
          <div>
            <h4 className="h4 note note-danger mt-3">FAQs</h4>
            <AccordianQ
              qOne="Why would you hire me?"
              aOne={result.gig.gig.qOne}
              qTwo="What it is your past experience?"
              aTwo={result.gig.gig.qTwo}
              qThree="Can you show me your mern projects?"
              aThree={result.gig.gig.qThree}
            />
          </div>
        </div>
        <div className="mx-auto col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="card mt-3" id="d-card">
            <div className="card-body">
              <h5 className="card-title text-center text-muted">Summary</h5>
              <p className="card-text text-muted">{result.gig.gig.gigTitle}</p>
              <div>
                <h4 className="h4 text-muted">Rs.{result.hourlyRate}/hr</h4>
              </div>
              <p />

              <Link
                to={{
                  pathname: "/booking",
                  state: {
                    test: result,
                    Id
                  },
                }}
                className="btn btn-primary my-3 w-100"
              >
                Purchase
              </Link>
              <button type="button" className="btn btn-secondary w-100">
                Get Custom Quote
              </button>
            </div>
          </div>
          <div className="card mt-3" id="d-card">
            <div className="card-body">
              <h5 className="card-title text-center text-muted">
                About Worker
              </h5>
              <div className="w-100 text-center">
                <img
                  src={result.imageUrl}
                  className="img-fluid rounded-pill w-50 h-50"
                  alt
                />
                <h6 className="h6 text-center mt-3">
                  <a href="#" className="text-dark">
                    {" "}
                    {result.fullname}{" "}
                  </a>
                </h6>
              </div>
              <p className="card-text text-muted"></p>
              <div className="card">
                <div className="card-body" id="performance-card">
                  <h5 className="card-title text-muted text-center">
                    <i className="fa fa-star" aria-hidden="true" />
                    <span className="rating-count">
                      ({userInfo.feedBackNum} Reviews)
                    </span>
                  </h5>
                  <div className="card-text">
                    {/* 3 sections */}
                    <div className="w-100">
                      <div className="w-100 d-flex justify-content-start">
                        <h6 className="text-muted w-50 mx-auto">
                          <i className="fas fa-comment-dots" />
                          Response Rate
                        </h6>
                        <h6 className="text-muted w-50 mx-auto">100%</h6>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="w-100 d-flex justify-content-start">
                        <h6 className="text-muted w-50 mx-auto">
                          <i className="fas fa-chart-line" />
                          Contract Acceptance Rate
                        </h6>
                        <h6 className="text-muted w-50 mx-auto">100%</h6>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="w-100 d-flex justify-content-start">
                        <h6 className="text-muted w-50 mx-auto">
                          <i className="far fa-check-circle" />
                          Successful Contracts
                        </h6>
                        <h6 className="text-muted w-50 mx-auto">100%</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div className="worker-personal-info">
                <p className="text-muted">{result.description}</p>
              </div>
              <button type="button" className="btn btn-dark w-100 my-2">
                Contact Me!
              </button>
              <div className="contact-worker w-100">
                <div className="w-100 item d-flex justify-content-start">
                  <h6 className="text-muted w-50 mx-auto">
                    <i className="fas fa-map-marker-alt" /> From
                  </h6>
                  <h6 className="text-muted w-50 mx-auto">
                    {result.location}, Pakistan
                  </h6>
                </div>
                <div className="w-100">
                  <div className="w-100 d-flex justify-content-start">
                    <h6 className="text-muted w-50 mx-auto">
                      <i className="fas fa-user" /> Member Since
                    </h6>
                    <h6 className="text-muted w-50 mx-auto">2020</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mt-5 col-lg-11 col-xl-11 col-md-11 col-sm-12 col-xs-12 mx-auto">
            {/* Reviews Section */}
            <div role="tabpanel" id="doc_reviews">
              {/* Review Listing */}

              <div className="widget review-listing">
                <ul className="comments-list">
                  {/* Comment List */}
                  {result.reviews
                    ? result.reviews.map((el) => {
                        return (
                          <li>
                            <div className="comment">
                              <img
                                className="avatar avatar-sm rounded-circle"
                                alt="User Image"
                                src="assets/img/patients/patient.jpg"
                              />
                              <div className="comment-body">
                                <div className="meta-data">
                                  <span className="comment-author">
                                    {el.name}
                                  </span>
                                  <span className="comment-date">
                                    Reviewed {Date(toString(el.date))}
                                  </span>
                                  <div className="review-count rating">
                                    {calculateStars(el.rating).map((el) => {
                                      return el;
                                    })}
                                    {/* <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" /> */}
                                  </div>
                                </div>
                                {el.recommended == true ? (
                                  <p className="recommended">
                                    <i className="far fa-thumbs-up" /> I
                                    recommend the doctor
                                  </p>
                                ) : (
                                  <p
                                    className="recommended"
                                    style={{ color: "red" }}
                                  >
                                    <i
                                      className="far fa-thumbs-down"
                                      style={{ color: "red" }}
                                    />{" "}
                                    I do not recommend the doctor
                                  </p>
                                )}

                                <p className="comment-content">{el.content}</p>
                                <div className="comment-reply">
                                  {/* <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a> */}
                                  <p className="recommend-btn">
                                    <span>Recommend?</span>
                                    <a href="#" className="like-btn">
                                      <i className="far fa-thumbs-up" /> Yes
                                    </a>
                                    <a href="#" className="dislike-btn">
                                      <i className="far fa-thumbs-down" /> No
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* Comment Reply */}
                            {/* /Comment Reply */}
                          </li>
                        );
                      })
                    : ""}
                  {/* /Comment List */}
                  {/* Comment List */}
                  {/* /Comment List */}
                </ul>
                {/* Show All */}
                <div className="all-feedback text-center">
                  <a href="#" className="btn btn-primary btn-sm">
                    Show all feedback <strong>(167)</strong>
                  </a>
                </div>
                {/* /Show All */}
              </div>
              {/* /Review Listing */}
              {/* Write Review */}
              <div className="write-review">
                <h4>
                  Write a review for <strong>Dr. Darren Elder</strong>
                </h4>
                {/* Write Review Form */}
                <form>
                  <div className="form-group">
                    <label>Review</label>
                    <div className="star-rating">
                      <input
                        id="star-5"
                        type="radio"
                        name="rating"
                        defaultValue="star-5"
                      />
                      <label htmlFor="star-5" title="5 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-4"
                        type="radio"
                        name="rating"
                        defaultValue="star-4"
                      />
                      <label htmlFor="star-4" title="4 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-3"
                        type="radio"
                        name="rating"
                        defaultValue="star-3"
                      />
                      <label htmlFor="star-3" title="3 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-2"
                        type="radio"
                        name="rating"
                        defaultValue="star-2"
                      />
                      <label htmlFor="star-2" title="2 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-1"
                        type="radio"
                        name="rating"
                        defaultValue="star-1"
                      />
                      <label htmlFor="star-1" title="1 star">
                        <i className="active fa fa-star" />
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Title of your review</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="If you could say it in one sentence, what would you say?"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your review</label>
                    <textarea
                      id="review_desc"
                      maxLength={100}
                      className="form-control"
                      defaultValue={""}
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <small className="text-muted">
                        <span id="chars">100</span> characters remaining
                      </small>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <div className="terms-accept">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="terms_accept" />
                        <label htmlFor="terms_accept">
                          I have read and accept{" "}
                          <a href="#">Terms &amp; Conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                    >
                      Add Review
                    </button>
                  </div>
                </form>
                {/* /Write Review Form */}
              </div>
              {/* /Write Review */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Description;
