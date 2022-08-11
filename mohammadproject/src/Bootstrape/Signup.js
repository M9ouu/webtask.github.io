import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Signup() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    address: "",
  });
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  //   firebase
  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message, address } = userData;
    if (firstName && lastName && email && phone && message && address) {
      const res = fetch(
        "https://reactfirebaseproject01-3-default-rtdb.firebaseio.com/userLoginRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            message,
            address,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          address: "",
        });
        alert("Data Stored");
        navigate("/login");
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
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <img
                    src="https://www.hirestar.io/jp/assets/login_new.jpg"
                    className="col-lg-5 d-none d-lg-block "
                  />
                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Create an Account!
                        </h1>
                      </div>
                      <form className="user" method="post">
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              name="firstName"
                              className="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="First Name"
                              value={userData.firstName}
                              onChange={postUserData}
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              name="lastName"
                              className="form-control form-control-user"
                              id="exampleLastName"
                              placeholder="Last Name"
                              value={userData.lastName}
                              onChange={postUserData}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            placeholder="Email Address"
                            value={userData.email}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="number"
                              name="phone"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Phone Number"
                              value={userData.phone}
                              onChange={postUserData}
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              name="message"
                              className="form-control form-control-user"
                              id="exampleRepeatPassword"
                              placeholder="Message"
                              value={userData.message}
                              onChange={postUserData}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <input
                              type="text"
                              name="address"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              placeholder=" Address"
                              value={userData.address}
                              onChange={postUserData}
                            />
                          </div>
                        </div>
                        <a
                          href="login.html"
                          className="btn btn-primary btn-user btn-block"
                          onClick={submitData}
                        >
                          Register Account
                        </a>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Register with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Register
                          with Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="login.html">
                          Already have an account? Login!
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
