import React from "react";
import Header from "./Header";
import "../Css/contact.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div>
        {/* ======Contact-sec-1 start======== */}
        <div className="container-fluid py-5">
          <div className="container psa">
            <div className="row">
              <div className="text-left col-lg-6 col-12">
                <h3>
                  GET IN <span>TOUCH</span>
                </h3>
                <h6 className="mb-5">
                  We're ready to lead you into the future with Business Services
                </h6>
                <p>
                  <span>Call Us:</span> +(21) 255 999 8899
                </p>
                <p>
                  <span>Email :</span> fashionecom@gmail.com
                </p>
                <h6 className="mt-4 mb-5">
                  433 California St, Suite 300 San Francisco, CA 94104, USA
                </h6>
                <h3 className="mb-5">
                  WORKING <span>HOURS</span>
                </h3>
                <div className="bu">
                  <h5 className="mb-3">Business Service:</h5>
                  <ul className="bus">
                    <li>Monday to Friday 8.00 am - 6.00 pm</li>
                    <li>Saturday and Sunday - Closed</li>
                  </ul>
                  <h5 className="mb-3">Customer support:</h5>
                  <ul className="bus">
                    <li>Monday to Friday 8.00 am - 6.00 pm</li>
                    <li>Saturday 10.00 am - 4.00 pm</li>
                    <li>Sunday - Closed</li>
                  </ul>
                </div>
              </div>
              <div className="map col-lg-6 col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        {/* ======Contact-sec-1 end======== */}
        {/* ======Contact-sec-2 start======== */}
        <div className="container-fluid back-img py-5">
          <div className="container py-5">
            <div className="form">
              <h2 className="text-center text-white mb-5">
                FILL OUT THE FORM.
              </h2>
              <form action="#" method="post">
                <div className="input-grid">
                  <input type="text" placeholder="name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="input-textaria">
                  <textarea
                    name="FashionEcom Website"
                    id
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button>
                  <a href="#">Send</a>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* ======Contact-sec-2 end======== */}
      </div>
      <Footer />
    </>
  );
}
