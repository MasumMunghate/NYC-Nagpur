import React from "react";
import { Link } from "react-router-dom";
import attachmentImg from "../../assets/img/attachment-img.jpg";
import about1 from "../../assets/img/about-icon-1.png";
import about2 from "../../assets/img/about-icon-2.png";
import aboutimg1 from "../../assets/img/about-img.jpg";
import aboutim2 from "../../assets/img/about-img-1.jpg";
import factBg from "../../assets/img/fact-bg.jpg";
import processImg from "../../assets/img/bg-1.jpg";
import Banner1 from '../../assets/img/banner-1.jpg'

import team1 from '../../assets/img/team-1.jpg'
import team2 from '../../assets/img/team-2.jpg'
import team3 from '../../assets/img/team-3.jpg'
import team4 from '../../assets/img/team-4.jpg'

const About = () => {
  return (
    <>
      {/* Banner section image lagani hai */}
      <div
        className=" overlay container-fluid bg-breadcrumb"
        style={{ ...aboutBackImg }}
      >
        <div
          className=" container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
           <li className="breadcrumb-item">
             <Link to='/'>
             Home
             </Link>
            </li>
          
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>
      {/* About Section  */}
      <div className="container-fluid overflow-hidden about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item">
                <div className="pb-5">
                  <h1 className="display-5 text-capitalize">
                    About <span className="text-primary">NYC</span>
                  </h1>
                  <p className="mb-0 tw-text-gray-700">
                  <span className="tw-font-bold">NYC</span> mission is to enable premium quality care for your luxury car service at affordable pricing . We ensure real time updates for complete car care needs with a fair and transparent pricing mechanism. Skilled technicians, working at our state of the art German technology workshop further ensure that only genuine OEM parts are used for your car care needs.
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img
                          src={about1}
                          className="img-fluid w-50 h-50"
                          alt="Icon"
                        />
                      </div>
                      <h5 className="mb-3">Our Vision</h5>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img
                          src={about2}
                          className="img-fluid h-50 w-50"
                          alt="Icon"
                        />
                      </div>
                      <h5 className="mb-3">Our Mission</h5>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-item my-4 tw-text-gray-700">
                Customer satisfaction is the core of all initiatives at NYC. Online appointment scheduling with door-step, same day pick-up and drop anywhere in Pune is our constant endeavor to maximize customer convenience. Our commitment stands for reliability and unequalled professionalism to provide dealer quality auto-service at a fair price.
                </p>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="text-center rounded bg-secondary p-4">
                      <h1 className="display-6 text-white">7+</h1>
                      <h5 className="text-light mb-0">Years Of Experience</h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rounded">
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        Morbi tristique senectus
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        A scelerisque purus
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        Dictumst vestibulum
                      </p>
                      <p className="mb-0">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        Dio aenean sed adipiscing
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex align-items-center">
                    <Link
                      to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26hl%3Den%26__coig_login%3D1"
                      className="btn btn-primary rounded py-3 px-5"
                    >
                      More About Us
                    </Link>
                  </div>
                  <div className="col-lg-7">
                    <div className="d-flex align-items-center">
                      <img
                        src={attachmentImg}
                        className="img-fluid bg-white rounded-circle border border-4 border-secondary"
                        style={{ width: "100px", height: "100px" }}
                        alt="Image"
                      />
                      <div className="ms-4">
                        <h4>William Burgess</h4>
                        <p className="mb-0">Carveo Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="about-img">
                <div className="img-1">
                  <img
                    src={aboutimg1}
                    className="img-fluid rounded h-100 w-100"
                    alt=""
                  />
                </div>
                <div className="img-2">
                  <img
                    src={aboutim2}
                    className="img-fluid rounded w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Animation image lagani hai */}
      <div className="container-fluid counter py-5" style={{ ...aboutBackImg }}>
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-thumbs-up fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    829
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Happy Clients</h4>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-car-alt fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    56
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Number of Cars</h4>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-building fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    127
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Car Center</h4>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-clock fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span
                    className="text-white fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    589
                  </span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Total kilometers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other section we need to add */}
      
      <div className="container-fluid team py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h1 className="display-5 text-capitalize mb-3">Our<span className="text-primary"> Support</span> Team</h1>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team4} className="img-fluid rounded w-100" alt="Image" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team1} className="img-fluid rounded w-100" alt="Image" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team2} className="img-fluid rounded w-100" alt="Image" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team3} className="img-fluid rounded w-100" alt="Image" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* NYC Process Section */}
      <div className="container-fluid steps py-4" style={{ ...ProcessImg }}>
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize text-white mb-3">
              NYC<span className="text-primary"> Process</span>
            </h1>
            <p className="mb-0 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="steps-item p-4 mb-4">
                <h4>Come In Contact</h4>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  dolorem!
                </p>
                <div className="setps-number">01.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="steps-item p-4 mb-4">
                <h4>Choose A Car</h4>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  dolorem!
                </p>
                <div className="setps-number">02.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="steps-item p-4 mb-4">
                <h4>Enjoy Driving</h4>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  dolorem!
                </p>
                <div className="setps-number">03.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Book Your Slot   */}
      <div class="container banner mt-5 wow zoomInDown" data-wow-delay="0.1s">
            <div class="container pb-5">
                <div class="banner-item rounded">
                    <img src={Banner1} class="img-fluid rounded w-100" alt=""/>
                    <div class="banner-content">
                        <h2 class="text-primary">Your Car is our Hand</h2>
                        <h1 class="text-white">Book Your Car Today</h1>
                        <p class="text-white">Don't hesitate and send us a message.</p>
                        <div class="banner-btn">
                            <Link to='/contact' class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">
                            Contact Us
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;

const aboutBackImg = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${factBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  bacgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
};

const ProcessImg = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${processImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  bacgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
};
