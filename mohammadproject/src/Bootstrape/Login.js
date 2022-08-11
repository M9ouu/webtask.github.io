import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "./Footer";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (email && password) {
      const res = fetch(
        "https://reactfirebaseproject01-3-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      if (res) {
        setUserData({
          email: "",
          password: "",
        });
        alert("Data Stored");
        navigate("/");
      } else {
        alert("Plz Fill the Data");
      }
    } else {
      alert("Plz Fill the Data");
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  {/* <div className="col-lg-6 d-none d-lg-block bg-login-image" /> */}
                  <img
                    src="https://www.hirestar.io/jp/assets/login_new.jpg"
                    className="col-lg-6 d-none d-lg-block"
                  />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            value={userData.email}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            value={userData.password}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                          onClick={submitData}
                        >
                          Login
                        </a>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
