import factBg from "../../assets/img/fact-bg.jpg";
import testimonial1 from '../../assets/img/testimonial-1.jpg'
import testimonial2 from '../../assets/img/testimonial-2.jpg'
import testimonial3 from '../../assets/img/testimonial-3.jpg'
import React from 'react'

import { default as WOW } from 'wowjs';
import '../../lib/animate/animate.css';
import '../../index.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Service = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const responsive = {
    0: {
      items: 1, 
    },
    768: {
      items: 2, 
    },
    1000: {
      items: 3, 
    },
  };

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
          Our Services
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
           
            <li className="breadcrumb-item active text-primary">Services</li>
          </ol>
        </div>
      </div>
     
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

    {/* Testimonial */}
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '800px' }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Our Clients<span className="text-primary"> Reviews</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi
            accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia
            distinctio,
          </p>
        </div>
        <OwlCarousel
          className="owl-theme testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
          loop
          margin={10}
          nav
          responsive={responsive}
        >
          <div className="testimonial-item">
            <div className="testimonial-quote">
              <i className="fa fa-quote-right fa-2x"></i>
            </div>
            <div className="testimonial-inner p-4">
              <img src={testimonial1} className="img-fluid" alt="Client" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star text-body"></i>
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae
                reprehenderit ipsum eos cumque esse repellendus impedit.
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote">
              <i className="fa fa-quote-right fa-2x"></i>
            </div>
            <div className="testimonial-inner p-4">
              <img src={testimonial2} className="img-fluid" alt="Client" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star text-body"></i>
                  <i className="fas fa-star text-body"></i>
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae
                reprehenderit ipsum eos cumque esse repellendus impedit.
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote">
              <i className="fa fa-quote-right fa-2x"></i>
            </div>
            <div className="testimonial-inner p-4">
              <img src={testimonial3} className="img-fluid" alt="Client" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star text-body"></i>
                  <i className="fas fa-star text-body"></i>
                  <i className="fas fa-star text-body"></i>
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae
                reprehenderit ipsum eos cumque esse repellendus impedit.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
    </>
  )
}

export default Service

const aboutBackImg = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${factBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  bacgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
};