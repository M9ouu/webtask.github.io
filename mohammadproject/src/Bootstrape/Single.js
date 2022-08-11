import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/single.css";
import Footer from "./Footer";
import Header from "./Header";
export default function Single() {
  let { id } = useParams();
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setSingleData(json));
  }, []);

  return (
    <>
      <div>
        <Header />
        {/* Shop us section start */}
        <div className="container-fluid shop-sec">
          <div className="container">
            <div className="sam-text pb-5"></div>
            <div className="row">
              <div className="img-boxx col-12 ">
                <img src={singleData.image} alt />
              </div>
              <div className="desp-box col-6 ">
                <h5 className="mb-3">{singleData.category}</h5>
                <h2 className="mb-4">{singleData.title}</h2>
                <div className="rating-box mb-4">
                  <div className="icon-n">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="icon-desp">
                    <h6>RATING</h6>
                  </div>
                </div>
                <div className="price-box mb-4">
                  <div className="icon">
                    <i className="fa-solid fa-dollar-sign" />
                  </div>
                  <div className="icon-desp">
                    <h2>{singleData.price}</h2>
                  </div>
                </div>
                <p>{singleData.description}</p>
                <div className="but-n mt-4">
                  <button type="button" className="bll col-6" id="liveToastBtn">
                    <a href="#">ADD TO CART</a>
                  </button>
                  <button className="orr col-6">
                    <a href="#" className="text-white">
                      BUY NOW
                    </a>
                  </button>
                </div>
                {/* bootstrap btn */}
                <div className="toast-container position-fixed bottom-0 end-0 p-3">
                  <div
                    id="liveToast"
                    className="toast p-3"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <div className="toast-header">
                      <strong className="me-auto">CART</strong>
                      <small>11 mins ago</small>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                      />
                    </div>
                    <div className="bag-desp p-2">
                      <div className="textt">
                        <h6>RED HANDBAG</h6>
                      </div>
                      <div className="prii">
                        <input type="number" />
                        <button
                          type="button"
                          className="btn-close"
                          id="btt"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        />
                        <h5 mt-2>$99.99</h5>
                      </div>
                    </div>
                    <div className="tott">
                      <div className="parr mt-2">
                        <h5>Subtotal:99.99 USD</h5>
                      </div>
                      <div className="che">
                        <span>CHECK OUT</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* bootstrap btn */}
              </div>
            </div>
          </div>
        </div>
        {/* shop us section end */}
        <Footer />
      </div>
    </>
  );
}
