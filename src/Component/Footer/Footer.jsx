import React from "react";
import { Link } from "react-router-dom";
import NYCLOGO from '../../assets/img/nyc logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="container-fluid footer py-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                <img  src={NYCLOGO}
              alt="NYC LOGO"
              className="img-fluid navbar-brand p-0 tw-w-auto tw-h-auto md:max-w-100 md:h-auto"
              style={{ maxWidth: "100px", height: "95px", padding: "6px" }}  />
                  <div className="footer-item">
                   
                    
                    <p className="mb-3 tw-text-gray-300">
                    At NYC, we're committed to earning your trust by providing the highest quality car repair services at a fair price.
                    </p>
                  </div>
                  {/* <div className="position-relative">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      Subscribe
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column tw-text-gray-300">
                  <h4 className="text-white mb-4">Quick Links</h4>
                  <Link to="/">
                    <i className="fas fa-angle-right me-2"></i> Home
                  </Link>
                  <Link to="/about">
                    <i className="fas fa-angle-right me-2"></i> About
                  </Link>
                  <Link to="/services">
                    <i className="fas fa-angle-right me-2"></i> Services
                  </Link>
                  <Link to="/gallery">
                    <i className="fas fa-angle-right me-2"></i> Gallery
                  </Link>
                  <Link to="#">
                    <i className="fas fa-angle-right me-2"></i> Contact us
                  </Link>
                  {/* <Link to="#">
                    <i className="fas fa-angle-right me-2"></i> Terms &
                    Conditions
                  </Link> */}
                </div>
              </div>
              
              <div className="col-md-6 col-lg-6 col-xl-3 ">
                <div className="footer-item d-flex flex-column -tw-px-1 tw-text-gray-300">
                  <h4 className="text-white mb-4">Contact Info</h4>
                  <Link to="#">
                    <i className="fa fa-map-marker-alt me-2 tw-text-white"></i> Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022
                  </Link>
                  <a href="mailto:info@example.com" className="negative-margin">
                    <i className="fas fa-envelope me-2 "></i>sales@elioratechnologies.com
                  </a>
                  <a href="tel:+91 8956854964">
                    <i className="fas fa-phone me-2"></i> +91 8956854964
                  </a>
                  <a href="tel:+91 8956854964" className="mb-3">
                    <i className="fas fa-print me-2"></i>+91 8956854964
                  </a>
                  <div className="d-flex">
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-3"
                      href="https://www.facebook.com/"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-3"
                      href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"
                    >
                      <i className="fab fa-twitter text-white"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-3"
                      href="https://www.instagram.com/accounts/login/?hl=en"
                    >
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-0"
                      href="https://www.linkedin.com/feed/"
                    >
                      <i className="fab fa-linkedin-in text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">Business Hours</h4>
                  <div className="mb-3">
                    <h6 className="text-muted mb-0">Mon - Friday:</h6>
                    <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-muted mb-0">Saturday:</h6>
                    <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                  </div>
                  <div className="mb-3">
                    {/* <h6 className="text-muted mb-0">Vacation:</h6> */}
                    {/* <p className="text-white mb-0">
                      All Sunday is our vacation
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-body">
                  <Link to="#" className="border-bottom text-white">
                    {/* <i className="fas fa-copyright text-light me-2"></i> */}
                    Copyright © 2024 Eliora Pvt. Ltd | <span>All right reserved.</span>
                  </Link>
                  
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end text-body">
                Designed By{" "}
                <a
                  className="border-bottom text-white"
                  href="https://htmlcodex.com"
                >
                Eliora Technology
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
