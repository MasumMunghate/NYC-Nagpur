import React from "react";
import Carousel from "../../SubComponent/Carousel";
import CentalFeature from "../../SubComponent/CentalFeature";
import OurWork from "../../SubComponent/OurWork";
import about1 from "../../assets/img/about-icon-1.png";
import about2 from "../../assets/img/about-icon-2.png";
import aboutimg1 from "../../assets/img/about-img.jpg";
import aboutim2 from "../../assets/img/about-img-1.jpg";
import { Link } from "react-router-dom";
import attachmentImg from "../../assets/img/attachment-img.jpg";
import factBg from "../../assets/img/fact-bg.jpg";
import HowItWork from "../../SubComponent/HowItWork";
import VehicalCategory from "../../SubComponent/VehicalCategory";
import CarCategory from "../../SubComponent/CarCategory";
import Banner1 from '../../assets/img/banner-1.jpg'

const Home = () => {
  return (
    <>
      <Carousel />
      {/* About NYC  */}
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
                      to="/about"
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

      {/* Happy Clint */}
      <div className="container-fluid counter py-5 " style={{ ...aboutBackImg }}>
        <div className="container py-5 ">
          <div className="row g-5 ">
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
                <h4 className="text-white mb-0 ">Daily Customer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CentalFeature />

      {/* NYC Services Section */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              NYC <span className="text-primary">Services</span>
            </h1>
            <p className="mb-0  tw-font-bold">
            Wear and tear in your vehicle is unavoidable, and it would usually have a finite life span before eventually being retired from operations. The good news is, your vehicle doesn’t just go end-of-life overnight.Periodic maintenance requires maintenance tasks to be performed at set time intervals while your vehicle is operational. Periodic maintenance services are planned ahead of time and are performed regardless of whether signs of deterioration show up or not.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-phone-alt fa-2x tw-text-white"></i>
                </div>
                <h5 className="mb-3  tw-font-bold">Dent & Paint</h5>
                <p className="mb-0 tw-text-gray-700">
                Our technicians at AutoMechanica take immense pride in the quality of our work and in caring for your vehicle. All products and services used at our service center are of the highest quality to ensure the proper paint texture, gloss, and finish is rendered to your car.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-money-bill-alt fa-2x tw-text-white"></i>
                </div>
                <h5 className="mb-3  tw-font-bold">Bumper Repair</h5>
                <p className="mb-0 tw-text-gray-700">
                Plastic bumpers don’t always need replacement when damage happens. Instead, they can be saved and even retrieved with innovative auto reconditioning techniques. Our expert technicians can repair scuffed, scratched, dented, detached, and torn bumpers for much less than the cost of replacement. We offer same-day service, and we guarantee your satisfaction!
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-road fa-2x tw-text-white"></i>
                </div>
                <h5 className="mb-3  tw-font-bold">Accidental Repair</h5>
                <p className="mb-0 tw-text-gray-700">
                
AutoMechanica is an expert in car body repair and collision repair for all types of cars. Our body shop guarantees the best professional services in town. We have established a reputation, and many insurers respect us. 
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-umbrella fa-2x tw-text-white"></i>
                </div>
                <h5 className="mb-3  tw-font-bold">Scratch Removal</h5>
                <p className="mb-0 tw-text-gray-700">
                Our technicians at AutoMechanica take immense pride in the quality of our work and in caring for your vehicle. All products and services used at our service center are of the highest quality to ensure the proper paint texture, gloss, and finish is rendered to your car.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-building fa-2x tw-text-white"></i>
                </div>
                <h5 className="mb-3  tw-font-bold">Engine Repairs</h5>
                <p className="mb-0 tw-text-gray-700">
                Your engine light is an indication that something on your car needs attention. Your car may have some issues, and it’s time to take it to a service center.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-car-alt fa-2x tw-text-white"></i>
                </div>
                <h5 className="mb-3 tw-font-bold">Suspension Repairs</h5>
                <p className="mb-0 tw-text-gray-700">
                The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road. More importantly, it affects your steering ability, and that can mean the difference between life and death.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CarCategory/>

      {/* <VehicalCategory/> */}
      <OurWork />

      {/* Book Your Slot */}
      <div class="container banner mt-5 wow zoomInDown" data-wow-delay="0.1s">
            <div class="container pb-5">
                <div class="banner-item rounded">
                    <img src={Banner1} class="img-fluid rounded w-100" alt=""/>
                    <div class="banner-content">
                        <h2 class="text-primary">Your Car is our Hand</h2>
                        <h1 class="text-white">Book Your Car Today</h1>
                        <p class="text-white">Don't hesitate and send us a message.</p>
                        <div class="banner-btn">
                            <Link to='/contact' class="btn btn-primary rounded-pill md:py-3 md:px-4 py-2 px-3 px-md-5 ms-2 ">
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

export default Home;

const aboutBackImg = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${factBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  bacgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
};
