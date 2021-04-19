import React from "react";
import { Link } from "react-router-dom";
function Jumbotron() {
  return (
    <div
      className="jumbotron container-fluid text-center px-5"
      id="join-header"
    >
      <h1 className="display-4 font-weight-bolder" style={{ color: "white" }}>
        Become a Worker!
      </h1>
      <p className="lead font-weight-bolder">Earn doing what you Love!</p>
      <hr className="my-4 font-weight-bolder" />
      <p className="font-weight-bolder text-light">
        Join family of thousands of Domestic Workers!
      </p>
      <p className="lead">
        {localStorage.getItem("userId") ? (
          <Link to="/addinfopersonal">
            <a className="btn btn-secondary btn-lg mb-3" href="#" role="button">
              Join Now
            </a>
          </Link>
        ) : (
          <Link to="/login">
            <a className="btn btn-secondary btn-lg mb-3" href="#" role="button">
              Join Now
            </a>
          </Link>
        )}
      </p>
    </div>
  );
}

export default Jumbotron;
