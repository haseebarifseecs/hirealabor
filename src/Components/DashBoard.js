import React, { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import Avatar from "./LoginAvatar";
import { database } from "../services/firebase";
import PopUp from './PopUp';
import { Link } from "react-router-dom";
export default function DashBoard(props) {
  const [orders, setOrders] = useState([]);
  const approveOrder = (id, orderid) => {
  
    database
      .ref("users/" + id + "/userinfo/myorder/" + orderid + "/contractStatus")
      .set("Accepted")
      .then(() => {
        database
        .ref("users/" + localStorage.getItem("userId") + "/userinfo/orders/" + orderid + "/contractStatus")
        .set("Accepted")
      });
  };
  const cancelOrder=(id,orderid)=>{
    database
      .ref("users/" + id + "/userinfo/myorder/" + orderid + "/contractStatus")
      .set("Rejected")
      .then(() => {
        database
        .ref("users/" + localStorage.getItem("userId") + "/userinfo/orders/" + orderid + "/contractStatus")
        .set("Rejected")
      });
  }
  const [isWorker, setIsWorker] = useState(null);
  useEffect(() => {
    database
      .ref("users/" + localStorage.getItem("userId") + "/userinfo/worker")
      .on("value", function (snapshot) {
        // console.log(snapshot.val())
        setIsWorker(snapshot.val());
        if (snapshot.val()) {
          database
            .ref("users/" + localStorage.getItem("userId") + "/userinfo/orders")
            .on("value", function (snapshot) {
              console.log(snapshot.val());
              if (snapshot.val()) {
                var tempArr = Object.values(snapshot.val());
                var tempArr2 = Object.keys(snapshot.val());
                for (var i = 0; i < tempArr.length; i++) {
                  tempArr[0].key = tempArr2[i];
                }
                console.log(tempArr);
                setOrders(tempArr);
              }
            });
        } else {
          database
            .ref(
              "users/" + localStorage.getItem("userId") + "/userinfo/myorder"
            )
            .on("value", function (snapshot) {
              if (snapshot.val()) {
                var tempArr = Object.values(snapshot.val());
                console.log(tempArr);
                setOrders(tempArr);
              }
            });
        }
      });
  }, []);
  const handleLogOut = () => {
    localStorage.clear();
    props.history.push("/");
  };
  return (
    <>
      {console.log(orders)}
      <HomeNav history={props.history} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      {/* <img
                        src=""
                        alt={localStorage.getItem("username")}
                      /> */}
                      <Avatar username={localStorage.getItem("username")} />
                    </a>
                    <div className="profile-det-info">
                      <h3>{localStorage.getItem("username")}</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">Acount Type :{isWorker? ' Worker': ' Client'}</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <a href="doctor-dashboard.html">
                          <i className="fas fa-columns" />
                          <span>Contracts</span>
                          <small className="unread-msg">{orders.length}</small>
                        </a>
                      </li>
                      <li>
                        <a href="schedule-timings.html">
                          <i className="fas fa-hourglass-start" />
                          <span>Schedule Timings</span>
                        </a>
                      </li>
                      <li>
                        <a href="invoices.html">
                          <i className="fas fa-file-invoice" />
                          <span>Invoices</span>
                        </a>
                      </li>
                      <li>
                        <a href="reviews.html">
                          <i className="fas fa-star" />
                          <span>Reviews</span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            handleLogOut();
                          }}
                        >
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* /Profile Sidebar */}
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="card dash-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <div className="circle-bar circle-bar1">
                              <div className="circle-graph1" data-percent={75}>
                                <img
                                  src="assets/img/icon-01.png"
                                  className="img-fluid"
                                  alt="patient"
                                />
                              </div>
                            </div>
                            <div className="dash-widget-info">
                              <h6>Total Contracts</h6>
                              <h3>{orders.length}</h3>
                              {/* <p className="text-muted">Till Today</p> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <div className="circle-bar circle-bar2">
                              <div className="circle-graph2" data-percent={65}>
                                <img
                                  src="assets/img/icon-02.png"
                                  className="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                            <div className="dash-widget-info">
                              <h6>Accepted</h6>
                              <h3>{orders.filter( order => order.contractStatus==="Accepted").length}</h3>
                              {/* <p className="text-muted">06, Nov 2019</p> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget">
                            <div className="circle-bar circle-bar3">
                              <div className="circle-graph3" data-percent={50}>
                                <img
                                  src="assets/img/icon-03.png"
                                  className="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                            <div className="dash-widget-info">
                              <h6>Rejected</h6>
                              <h3>{orders.filter( order => order.contractStatus==="Rejected").length}</h3>
                              {/* <p className="text-muted">06, Apr 2019</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-4">Contracts</h4>
                  <div className="appointment-tab">
                    {/* Appointment Tab */}
                    {/* /Appointment Tab */}
                    <div className="tab-content">
                      {/* Upcoming Appointment Tab */}
                      <div
                        className="tab-pane show active"
                        id="upcoming-appointments"
                      >
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>
                                      {isWorker ? `Client Name` : `Worker Name`}
                                    </th>
                                    <th>Contract Date</th>
                                    <th>Phone</th>
                                    <th>Contract Situation</th>
                                    <th className="text-center">
                                      Offered Amount
                                    </th>
                                    <th />
                                  </tr>
                                </thead>
                                <tbody>
                                  {orders.map((order) => {
                                    return (
                                      <tr>
                                        <td>
                                          <h2 className="table-avatar">
                                            <a
                                              href="patient-profile.html"
                                              className="avatar avatar-sm mr-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={order.image1Url}
                                                alt="User Image"
                                              />
                                            </a>
                                            <a href="patient-profile.html">
                                              {order.fullname}
                                            </a>
                                          </h2>
                                        </td>
                                        <td>
                                          {order.selectedDate}{" "}
                                          <span className="d-block text-info">
                                            {order.selectedTime}
                                          </span>
                                        </td>
                                        <td>{order.phone}</td>
                                        <td>{order.contractSituation}</td>
                                        <td className="text-center">
                                          Rs.{order.monthlySalary}
                                        </td>
                                        <td className="text-right">
                                          {isWorker ? (
                                            order.contractStatus.toLowerCase() === 'rejected'?
                                            <div className="table-action">
                                              <button
                                                className="btn btn-sm bg-danger-light"
                                                disabled
                                              >
                                                <i className="fas fa-times" />{" "}
                                                Rejected
                                              </button>
                                              </div>:
                                               
                                            <div className="table-action">
                                            

                                              <PopUp order={order}/>
                                             
                                              
                                              <button
                                                href="javascript:void(0);"
                                                className="btn btn-sm bg-success-light"
                                                onClick={() =>
                                                  approveOrder(
                                                    order.clientId,
                                                    order.key
                                                  )
                                                }
                                              >
                                                <i className="fas fa-check" />{" "}
                                               {order.contractStatus}
                                              </button>
                                              {order.contractStatus.toLowerCase() === "accepted"?'':
                                                <button
                                                className="btn btn-sm bg-danger-light"
                                                onClick={() => cancelOrder(order.clientId, order.key)}
                                              >
                                                <i className="fas fa-times" />{" "}
                                                Cancel
                                              </button>
                                              }
                                              
                                            </div>
                                          ) : (
                                            <div className="table-action">
                                              <button disabled className="btn btn-sm bg-info-light">
                                              
                                                <i className="far fa-tick" />
                                                {order.contractStatus}
                                              </button>
                                              {order.contractStatus.toLowerCase() === "accepted"? 
                                                 <Link to={{pathname:"/checkout",state:{Order:order}}} className="btn btn-sm bg-danger" style={{color:"#ffffff"}}>
                                              
                                                 <i className="far fa-tick" />
                                                  Check Out
                                               </Link>:''
                                            }
                                            </div>
                                          )}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
