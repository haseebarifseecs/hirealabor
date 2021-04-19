import React, { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import { database } from "../services/firebase";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Profile(props) {
  const location = useLocation();
  const [id, setId] = useState('');
  useEffect(() => {
    if(location.state){
      console.log(props.history.location.state.userID);
      setId(props.history.location.state.userID);
      var starCountRef = database
        .ref()
        .child(`users/${location.state.userID}/userinfo`);
  
      starCountRef.on("value", (snapshot) => {
        const data = snapshot.val();
  
        setResult(data);
        var data2 = manipulateData(data.reviews);
        setUserInfo(data2);
        console.log(data);
      });
    }
    
  }, []);
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
  const [result, setResult] = useState({});
  const [userInfo, setUserInfo] = useState({});
  return (
    <>
      <HomeNav history={props.history}/>
      <div
        className="content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {Object.keys(result).length !== 0 ? (
          <div className="container">
            {/* Doctor Widget */}
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <img
                        src={result.imageUrl}
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">{result.fullname}</h4>
                      <p
                        className="doc-speciality"
                        style={{ textTransform: "capitalize" }}
                      >
                        {result.occupation} Expert
                      </p>

                      <div className="rating">
                        {calculateStars(parseInt(userInfo.ratingRatio)).map(
                          (el) => {
                            return el;
                          }
                        )}
                        {/* <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" /> */}
                        <span className="d-inline-block average-rating">
                          &nbsp;&nbsp; ({parseInt(userInfo.ratingRatio)})
                        </span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" />{" "}
                          {result.location},Pakistan{" "}
                        </p>
                      </div>
                      <div className="clinic-services">
                        {Object.keys(result.topskills)
                          ? Object.keys(result.topskills).map((el) => {
                              return <span>{el}</span>;
                            })
                          : ""}
                        {}
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up" />{" "}
                          {userInfo.percentage} %
                        </li>
                        <li>
                          <i className="far fa-comment" />{" "}
                          {userInfo.feedBackNum} Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />{" "}
                          {result.location},Pakistan{" "}
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> Rs.
                          {result.hourlyRate} per hour{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="clinic-booking">
                      <Link
                        to={{
                          pathname: "/description",
                          state:{
                            test:result,
                            userId:id
                          }
                        }}
                        className="apt-btn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Widget */}
            {/* Doctor Details Tab */}
            <div className="card">
              <div className="card-body pt-0">
                {/* Tab Menu */}
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#doc_overview"
                        data-toggle="tab"
                        ref={(node) => {
                          if (node) {
                            node.style.setProperty(
                              "color",
                              "#2e3842",
                              "important"
                            );
                          }
                        }}
                      >
                        Overview
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#doc_reviews"
                        data-toggle="tab"
                        ref={(node) => {
                          if (node) {
                            node.style.setProperty(
                              "color",
                              "#2e3842",
                              "important"
                            );
                          }
                        }}
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Menu */}
                {/* Tab Content */}
                <div className="tab-content pt-0">
                  {/* Overview Content */}
                  <div
                    role="tabpanel"
                    id="doc_overview"
                    className="tab-pane fade show active"
                  >
                    <div className="row">
                      <div className="col-md-12 col-lg-9">
                        {/* About Details */}
                        <div className="widget about-widget">
                          <h4 className="widget-title">About Me</h4>
                          <p>{result.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Overview Content */}
                  {/* Locations Content */}
                  <div
                    role="tabpanel"
                    id="doc_locations"
                    className="tab-pane fade"
                  >
                    {/* Location List */}
                    <div className="location-list">
                      <div className="row">
                        {/* Clinic Content */}
                        <div className="col-md-6">
                          <div className="clinic-content">
                            <h4 className="clinic-name">
                              <a href="#">Smile Cute Dental Care Center</a>
                            </h4>
                            <p className="doc-speciality">
                              MDS - Periodontology and Oral Implantology, BDS
                            </p>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                (4)
                              </span>
                            </div>
                            <div className="clinic-details mb-0">
                              <h5 className="clinic-direction">
                                {" "}
                                <i className="fas fa-map-marker-alt" /> 2286
                                Sundown Lane, Austin, Texas 78749, USA <br />
                                <a href="javascript:void(0);">Get Directions</a>
                              </h5>
                              <ul>
                                <li>
                                  <a
                                    href="assets/img/features/feature-01.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-01.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-02.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-02.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-03.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-03.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-04.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-04.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* /Clinic Content */}
                        {/* Clinic Timing */}
                        <div className="col-md-4">
                          <div className="clinic-timing">
                            <div>
                              <p className="timings-days">
                                <span> Mon - Sat </span>
                              </p>
                              <p className="timings-times">
                                <span>10:00 AM - 2:00 PM</span>
                                <span>4:00 PM - 9:00 PM</span>
                              </p>
                            </div>
                            <div>
                              <p className="timings-days">
                                <span>Sun</span>
                              </p>
                              <p className="timings-times">
                                <span>10:00 AM - 2:00 PM</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Clinic Timing */}
                        <div className="col-md-2">
                          <div className="consult-price">$250</div>
                        </div>
                      </div>
                    </div>
                    {/* /Location List */}
                    {/* Location List */}
                    <div className="location-list">
                      <div className="row">
                        {/* Clinic Content */}
                        <div className="col-md-6">
                          <div className="clinic-content">
                            <h4 className="clinic-name">
                              <a href="#">The Family Dentistry Clinic</a>
                            </h4>
                            <p className="doc-speciality">
                              MDS - Periodontology and Oral Implantology, BDS
                            </p>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                (4)
                              </span>
                            </div>
                            <div className="clinic-details mb-0">
                              <p className="clinic-direction">
                                {" "}
                                <i className="fas fa-map-marker-alt" /> 2883
                                University Street, Seattle, Texas Washington,
                                98155 <br />
                                <a href="javascript:void(0);">Get Directions</a>
                              </p>
                              <ul>
                                <li>
                                  <a
                                    href="assets/img/features/feature-01.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-01.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-02.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-02.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-03.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-03.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="assets/img/features/feature-04.jpg"
                                    data-fancybox="gallery2"
                                  >
                                    <img
                                      src="assets/img/features/feature-04.jpg"
                                      alt="Feature Image"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* /Clinic Content */}
                        {/* Clinic Timing */}
                        <div className="col-md-4">
                          <div className="clinic-timing">
                            <div>
                              <p className="timings-days">
                                <span> Tue - Fri </span>
                              </p>
                              <p className="timings-times">
                                <span>11:00 AM - 1:00 PM</span>
                                <span>6:00 PM - 11:00 PM</span>
                              </p>
                            </div>
                            <div>
                              <p className="timings-days">
                                <span>Sat - Sun</span>
                              </p>
                              <p className="timings-times">
                                <span>8:00 AM - 10:00 AM</span>
                                <span>3:00 PM - 7:00 PM</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Clinic Timing */}
                        <div className="col-md-2">
                          <div className="consult-price">$350</div>
                        </div>
                      </div>
                    </div>
                    {/* /Location List */}
                  </div>
                  {/* /Locations Content */}
                  {/* Reviews Content */}
                  <div
                    role="tabpanel"
                    id="doc_reviews"
                    className="tab-pane fade"
                  >
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
                                          {calculateStars(el.rating).map(
                                            (el) => {
                                              return el;
                                            }
                                          )}
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

                                      <p className="comment-content">
                                        {el.content}
                                      </p>
                                      <div className="comment-reply">
                                        {/* <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a> */}
                                        <p className="recommend-btn">
                                          <span>Recommend?</span>
                                          <a href="#" className="like-btn">
                                            <i className="far fa-thumbs-up" />{" "}
                                            Yes
                                          </a>
                                          <a href="#" className="dislike-btn">
                                            <i className="far fa-thumbs-down" />{" "}
                                            No
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
                  {/* /Reviews Content */}
                  {/* Business Hours Content */}
                  <div
                    role="tabpanel"
                    id="doc_business_hours"
                    className="tab-pane fade"
                  >
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        {/* Business Hours Widget */}
                        <div className="widget business-widget">
                          <div className="widget-content">
                            <div className="listing-hours">
                              <div className="listing-day current">
                                <div className="day">
                                  Today <span>5 Nov 2019</span>
                                </div>
                                <div className="time-items">
                                  <span className="open-status">
                                    <span className="badge bg-success-light">
                                      Open Now
                                    </span>
                                  </span>
                                  <span className="time">
                                    07:00 AM - 09:00 PM
                                  </span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Monday</div>
                                <div className="time-items">
                                  <span className="time">
                                    07:00 AM - 09:00 PM
                                  </span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Tuesday</div>
                                <div className="time-items">
                                  <span className="time">
                                    07:00 AM - 09:00 PM
                                  </span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Wednesday</div>
                                <div className="time-items">
                                  <span className="time">
                                    07:00 AM - 09:00 PM
                                  </span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Thursday</div>
                                <div className="time-items">
                                  <span className="time">
                                    07:00 AM - 09:00 PM
                                  </span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Friday</div>
                                <div className="time-items">
                                  <span className="time">
                                    07:00 AM - 09:00 PM
                                  </span>
                                </div>
                              </div>
                              <div className="listing-day">
                                <div className="day">Saturday</div>
                                <div className="time-items">
                                  <span className="time">
                                    07:00 AM - 09:00 PM
                                  </span>
                                </div>
                              </div>
                              <div className="listing-day closed">
                                <div className="day">Sunday</div>
                                <div className="time-items">
                                  <span className="time">
                                    <span className="badge bg-danger-light">
                                      Closed
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Business Hours Widget */}
                      </div>
                    </div>
                  </div>
                  {/* /Business Hours Content */}
                </div>
              </div>
            </div>
            {/* /Doctor Details Tab */}
          </div>
        ) : (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
