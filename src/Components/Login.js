import React, { useState } from "react";
import Header from "./HomeNav";
import { auth, googleProvider,facebookProvider } from "../services/firebase";
import {Link} from "react-router-dom"
import { database } from "../services/firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        props.history.push("/choose");
      })
      .catch((err) => {
        window.alert(err.message);
      });
  };
  const googleSignIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((user) => {
        
        props.history.push("/choose");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  const faceBookLogin=()=>{
    auth
    .signInWithPopup(facebookProvider)
    .then((res) => {
      props.history.push("/choose");
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }
  return (
    <>
      <Header history={props.history}/>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      style={{ transform: `translate(-12px, -21px)` }}
                      src="assets/img/LoginImage.png"
                      className="img-fluid"
                      alt="Doccure Login"
                    ></img>
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>To Hire A Labor</span>
                      </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group ">
                        <input
                          type="email"
                          class="form-control"
                          onChange={handleEmail}
                          value={email}
                          placeholder="Email"
                          style={{ padding: "1.5rem 1rem" }}
                        ></input>
                      </div>
                      <div className="form-group ">
                        <input
                          type="password"
                          value={password}
                          onChange={handlePassword}
                          className="form-control "
                          placeholder="password"
                          style={{ padding: "1.5rem 1rem" }}
                        />
                      </div>
                      {/* <div className="text-right">
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div> */}
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6"  onClick={() => faceBookLogin()}>
                          <a href="#" className="btn btn-facebook btn-block" style={{color:"#3b5998"}}>
                            <i className="fab fa-facebook-f mr-1" /> Login
                          </a>
                        </div>
                        <div className="col-6" onClick={() => googleSignIn()}>
                          <a  className="btn btn-google btn-block" style={{color:"#EA4335"}}>
                            <i className="fab fa-google mr-1" /> Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="/signup">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
