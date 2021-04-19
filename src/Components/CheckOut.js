import React from "react";
import HomeNav from "./HomeNav";
export default function CheckOut(props) {
  const orderDetails=props.history.location.state.Order
  return (
    <div>{console.log(props.history.location.state.Order)}
      <HomeNav />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="card">
                <div className="card-body">
                  {/* Checkout Form */}
                  <form action="https://doccure-html.dreamguystech.com/template/booking-success.html">
                    {/* Personal Information */}
                    <div className="info-widget">
                      <h4 className="card-title">Personal Information</h4>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>First Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Last Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Email</label>
                            <input className="form-control" type="email" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Phone</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="exist-customer">
                        Existing Customer? <a href="#">Click here to login</a>
                      </div>
                    </div>
                    {/* /Personal Information */}
                    <div className="payment-widget">
                      <h4 className="card-title">Payment Method</h4>
                      {/* Credit Card Payment */}
                      <div className="payment-list">
                        <label className="payment-radio credit-card-option">
                          <input type="radio" name="radio" defaultChecked />
                          <span className="checkmark" />
                          Credit card
                        </label>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_name">Name on Card</label>
                              <input
                                className="form-control"
                                id="card_name"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_number">Card Number</label>
                              <input
                                className="form-control"
                                id="card_number"
                                placeholder="1234  5678  9876  5432"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_month">Expiry Month</label>
                              <input
                                className="form-control"
                                id="expiry_month"
                                placeholder="MM"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_year">Expiry Year</label>
                              <input
                                className="form-control"
                                id="expiry_year"
                                placeholder="YY"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="cvv">CVV</label>
                              <input
                                className="form-control"
                                id="cvv"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Credit Card Payment */}
                      {/* Paypal Payment */}
                      <div className="payment-list">
                        <label className="payment-radio paypal-option">
                          <input type="radio" name="radio" />
                          <span className="checkmark" />
                          Paypal
                        </label>
                      </div>
                      {/* /Paypal Payment */}
                      {/* Terms Accept */}
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label htmlFor="terms_accept">
                            I have read and accept{" "}
                            <a href="#">Terms &amp; Conditions</a>
                          </label>
                        </div>
                      </div>
                      {/* /Terms Accept */}
                      {/* Submit Section */}
                      <div className="submit-section mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Confirm and Pay
                        </button>
                      </div>
                      {/* /Submit Section */}
                    </div>
                  </form>
                  {/* /Checkout Form */}
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 theiaStickySidebar">
              {/* Booking Summary */}
              <div className="card booking-card">
                <div className="card-header">
                  <h4 className="card-title">Booking Summary</h4>
                </div>
                <div className="card-body">
                  {/* Booking Doctor Info */}
                  <div className="booking-doc-info">
                    <a href="doctor-profile.html" className="booking-doc-img">
                      <img
                        src={orderDetails.image1Url}
                        alt="User Image"
                      />
                    </a>
                    <div className="booking-info">
                      <h4>
                        <a href="doctor-profile.html">{orderDetails.fullname}</a>
                      </h4>
                      
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" /> Pakistan
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Booking Doctor Info */}
                  <div className="booking-summary">
                    <div className="booking-item-wrap">
                      <ul className="booking-date">
                        <li>
                          Date <span>{orderDetails.selectedDate}</span>
                        </li>
                        <li>
                          Time <span>{orderDetails.selectedTime}</span>
                        </li>
                      </ul>
                      <ul className="booking-fee">
                        <li>
                          Offer <span>{orderDetails.titleOfOffer}</span>
                        </li>
                        <li>
                          Payment Due  <span>Rs.{orderDetails.monthlySalary}</span>
                        </li>
                        
                      </ul>
                      <div className="booking-total">
                        <ul className="booking-total-list">
                          <li>
                            <span>Total</span>
                            <span className="total-cost">Rs.{orderDetails.monthlySalary}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Booking Summary */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
