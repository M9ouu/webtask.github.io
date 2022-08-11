import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../Css/Sec-1.css";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { LinkContainer } from "react-router-bootstrap";
export default function HomeA() {
  let section1 = {
    padding: "0 20px",
  };
  return (
    <>
      <Header />
      <div style={section1}>
        <div className="row spa mt-4">
          <div className="card col-lg-3">
            <img
              src="../image/shop-2.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-lg-3">
            <img
              src="../image/shop-3.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-lg-3">
            <img
              src="../image/shop-4.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-lg-3">
            <img
              src="../image/shop-3.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <LinkContainer to="/products">
          <a src="" className="more-d mb-3">
            More Detail
            <span>
              <i class="fa-solid fa-angles-right"></i>
            </span>
          </a>
        </LinkContainer>
        <div className="row spa">
          <div className="card col-3" style={{ width: "18rem" }}>
            <img
              src="../image/shop-5.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-3" style={{ width: "18rem" }}>
            <img
              src="../image/shop-6.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-3" style={{ width: "18rem" }}>
            <img
              src="../image/shop-7.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-3" style={{ width: "18rem" }}>
            <img
              src="../image/shop-8.jpg"
              className="card-img-top mb-3"
              alt="..."
            />
            <div className="card-body">
              <span>adidas</span>
              <h5 className="card-title mt-2">Cartoon Astronaut T-Shirt</h5>
              <div className="star mb-2">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="pri">
                <div className="price">
                  <h4>$78</h4>
                </div>
                <div className="cart">
                  <i className="fa-solid fa-cart-arrow-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <LinkContainer to="/products">
          <a src="" className="more-d mb-3">
            More Detail
            <span>
              <i class="fa-solid fa-angles-right"></i>
            </span>
          </a>
        </LinkContainer>
        {/* Shop us section start */}
        <div className="container-fluid shop-sec">
          <div className="container">
            <div className="sam-text pb-5">
              <h1 className="text-center text-dark">
                SHOP WITH <span>US</span>
              </h1>
              <p className="text-center">Handpicked Favourites just for you</p>
            </div>
            <div className="row">
              <div className="box-1 col-lg-2 mb-3">
                <div className="pro-detail">Porduct-1</div>
                <img src="../Image/img-1.jpg" className="mm-1" alt />
                <h6 className="mt-4">
                  <a href="../page/handbag.html">Hand Bags</a>
                </h6>
              </div>
              <div className="box-2 col-lg-2 mb-3">
                <div className="pro-detail">Porduct-2</div>
                <img src="../Image/img-2.jpg" className="mm-1" alt />
                <h6 className="mt-4">
                  <a href="../page/watches.html">Watches</a>
                </h6>
              </div>
              <div className="box-3 col-lg-2 mb-3">
                <div className="pro-detail">Porduct-3</div>
                <img src="../Image/img-3.jpg" className="mm-1" alt />
                <h6 className="mt-4">
                  <a href>Shoes</a>
                </h6>
              </div>
              <div className="box-4 col-lg-2 mb-3">
                <div className="pro-detail">Porduct-4</div>
                <img src="../Image/img-4.jpg" className="mm-1" alt />
                <h6 className="mt-4">
                  <a href>Suits</a>
                </h6>
              </div>
              <div className="box-5 col-lg-2 mb-3">
                <div className="pro-detail">Porduct-5</div>
                <img src="../Image/img-5.jpg" className="mm-1" alt />
                <h6 className="mt-4">
                  <a href>Accessories</a>
                </h6>
              </div>
              <div className="box-6 col-lg-2 mb-3">
                <div className="pro-detail">Porduct-6</div>
                <img src="../Image/img-6.jpg" className="mm-1" alt />
                <h6 className="mt-4">
                  <a href>Fragrances</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* shop us section end */}
        {/* 30% discount section start */}
        <div className="container-fluid bg back-colo py-5 mt-5">
          <div className="container pad">
            <div className="row">
              <div className="col-lg-6 col-12 text-pe">
                left-discount-box
                <h2 className="box-des">
                  all branded men's suits are flat <span>30% discount</span>
                </h2>
                <p>
                  Visit our shop to see amazing creations from our designers,
                  Visit our shop to see amazing creations from our designers.
                </p>
                <div className="shop-b">
                  <button className="btn btn-dark">Shop Now</button>
                </div>
              </div>
              <div className="right-discount-box col-12 col-lg-5 mt-4">
                <img src="../Image/Discount-imh.jpg" alt />
              </div>
            </div>
          </div>
        </div>
        {/* 30% discount section end  */}
      </div>
      <Footer />
    </>
  );
}
