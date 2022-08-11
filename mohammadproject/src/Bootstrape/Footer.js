import React from "react";
import "../Css/footer.css";
export default function Footer() {
  return (
    <>
      {/* Footer section start */}
      <div className="container-fliud B-G">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 footer-sec-box pt-5">
              <h2 className="mb-4">
                SPRY<span>S</span>TORE
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo
                non suscipit.
              </p>
              <div className="I-C-O-N-S">
                <div className="fb">
                  <i className="fa-brands fa-facebook-f" />
                </div>
                <div className="tw">
                  <i className="fa-brands fa-twitter" />
                </div>
                <div className="g">
                  <i className="fa-brands fa-google-plus-g" />
                </div>
                <div className="in">
                  <i className="fa-brands fa-instagram" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 footer-sec-box-2 pt-5">
              <h3 className="text-white">
                Women's Day Special Offer All Branded Sandals are Flat 50%
                Discount
              </h3>
              <div className="sub-coulmn">
                <div className="sub-one-left">
                  <h6>usefule links</h6>
                  <div className="footer-ul">
                    <ul className="ul">
                      <li>Home</li>
                      <li>About</li>
                      <li>Blog</li>
                      <li>Contact</li>
                    </ul>
                    <ul className="ul">
                      <li>Careers</li>
                      <li>Privacy Policy</li>
                      <li>Terms</li>
                      <li>Support</li>
                    </ul>
                  </div>
                </div>
                <div className="sub-two-right">
                  <h6>our store</h6>
                  <p className="mb-5">
                    49436 Broaddus Honey Court Avenue, Madisonville KY 95020,
                    United States of America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer section end */}
    </>
  );
}
