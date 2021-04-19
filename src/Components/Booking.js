import React, { useState, useEffect } from "react";
import TimeBomb from "./TimeBomb";
import HomeNav from "./HomeNav";
import LoginAvatar from "./LoginAvatar";
import Requriement from "./Requirement";
import { database } from "../services/firebase";
import { storage } from "../services/firebase";
const { v4 } = require('uuid');
export default function Booking(props) {
  const result = props.history.location.state.test;
  const ratingStore = [];
  const orderKey=v4()
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [nationality, setNationality] = React.useState("Pakistani");
  const [religion, setReligion] = React.useState("Islam");
  const [titleOfOffer, settitleOfOffer] = React.useState("");
  const [defineyourneeds, setdefineyourneeds] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [image1Url, setImage1Url] = useState(
    "https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/book.jpg"
  );
  const [completeAddress, setcompleteAddress] = React.useState("");
  const [contractSituation, setContractSituation] = React.useState("");
  const [monthlySalary, setmonthlySalary] = React.useState("");
  const [fullname, setFullName] = React.useState("");
  const handleUploadSuccess = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => setImage1Url(url));
  };
  const handleSubmit = () => {
    console.log(
      props.history.location.state.Id,
      localStorage.getItem("userId")
    );
    if (window.confirm("Confirm ?")) {
      database
        .ref("users/" + props.history.location.state.Id + "/userinfo/orders").child(orderKey)
        .set({
          selectedDate: selectedDate.toLocaleDateString(),
          selectedTime: selectedTime.toLocaleTimeString(),
          nationality,
          religion,
          titleOfOffer,
          defineyourneeds,
          completeAddress,
          contractSituation,
          monthlySalary,
          fullname,
          image1Url,
          phone,
          contractStatus:"Accept",
          clientId:localStorage.getItem("userId")
        })
        .then(() => {
          database
            .ref(
              "users/" + localStorage.getItem("userId") + "/userinfo/myorder"
            ).child(orderKey)
            .set({
              selectedDate: selectedDate.toLocaleDateString(),
              selectedTime: selectedTime.toLocaleTimeString(),
              nationality,
              religion,
              titleOfOffer,
              defineyourneeds,
              completeAddress,
              contractSituation,
              monthlySalary,
              fullname:result.fullname,
              image1Url,
              phone,
              contractStatus:"Pending",
              workerId:props.history.location.state.Id
            })
            .then(() => {
              props.history.push("/dashboard");
            });
        });
    }
  };
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };
  const handleTimeChange = (time) => {
    console.log(time);
    setSelectedTime(time);
  };
  const handleNationlaity = (event) => {
    setNationality(event.target.value);
  };
  const handleReligion = (event) => {
    setReligion(event.target.value);
  };
  const handleFullName = (d) => {
    setFullName(d);
  };
  const MuiPhoneHandler=(d) => {
    setPhone(d);
  }
  const calculateStars = (rating) => {
    for (let i = 0; i < rating; i++) {
      ratingStore.push(<i className="fas fa-star filled" />);
    }
    return ratingStore;
  };
  console.log(selectedDate, selectedTime);
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
    <div>
      <HomeNav history={props.history} />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="booking-doc-info">
                    <a href="doctor-profile.html" className="booking-doc-img">
                      {/* <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      /> */}
                      <LoginAvatar
                        username={result.fullname}
                        src={result.imageUrl}
                      />
                    </a>
                    <div className="booking-info">
                      <h4>
                        <a href="doctor-profile.html">{result.fullname}</a>
                      </h4>
                      <div className="rating">
                        {calculateStars(userInfo.ratingRatio).map((el) => {
                          return el;
                        })}
                        <span className="d-inline-block average-rating">
                          ({userInfo.feedBackNum})
                        </span>
                      </div>
                      <p className="text-muted mb-0">
                        <i className="fas fa-map-marker-alt" />{" "}
                        {result.location}, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-6">
                  <h4 class="m-1">Please Select Your Schedule</h4>
                </div>
              </div>
              <div class="m-5">
                <TimeBomb
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                  handleTimeChange={handleTimeChange}
                  selectedTime={selectedTime}
                />
              </div>
              <Requriement
                nationality={nationality}
                religion={religion}
                handleNationlaity={handleNationlaity}
                handleReligion={handleReligion}
                handleTimeChange={handleTimeChange}
                settitleOfOffer={settitleOfOffer}
                setdefineyourneeds={setdefineyourneeds}
                setcompleteAddress={setcompleteAddress}
                setContractSituation={setContractSituation}
                setmonthlySalary={setmonthlySalary}
                handleSubmit={handleSubmit}
                setFullName={handleFullName}
                image1Ur={image1Url}
                handleUploadSucces={handleUploadSuccess}
                MuiPhone={MuiPhoneHandler}
              />
              {/* Submit Section */}
              {/* <div className="submit-section proceed-btn text-right">
                <a href="checkout.html" className="btn btn-primary submit-btn">
                  Proceed to Pay
                </a>
              </div> */}
              {/* /Submit Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
