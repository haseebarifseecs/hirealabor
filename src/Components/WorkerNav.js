import React from "react";

function WorkerNav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Hire a Labor
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li className="nav-item mx-1 w-60 mb-2">
                <a
                  id="w-btn"
                  className="nav-link active btn btn-secondary btn-rounded w-100"
                  aria-current="page"
                  href="#"
                >
                  Why Become a Worker
                </a>
              </li>
              <li className="nav-item mx-1 w-20 mb-2">
                <a id="j-btn" className="nav-link btn btn-dark w-100" href="#">
                  Join
                </a>
              </li>
              <li className="nav-item mx-1 w-20 mb-2">
                <a
                  className="nav-link btn btn-outline-info w-100"
                  id="sign-in"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="false"
                >
                  Sign In
                </a>
              </li>
            </ul>
            <form className="d-flex input-group w-100">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default WorkerNav;
