import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../lib/animate/animate.css";
import featuresImg from "../assets/img/features-img.png";

const CentalFeature = () => {
  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            NYC <span className="text-primary">Features</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum,
            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
            quia distinctio,
          </p>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className=" text-white fa fa-trophy fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3 tw-font-bold tw-text-md">First Class services</h5>
                    <p className="mb-0 tw-text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className=" text-white fa fa-road fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3 tw-font-bold tw-text-md">24/7 road assistance</h5>
                    <p className="mb-0 tw-text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-12 col-xl-4 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <img
              src={featuresImg}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
              alt="Features"
            />
          </div>
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3 tw-font-bold tw-text-md">Quality at Minimum</h5>
                    <p className="mb-0 tw-text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className=" text-white fa fa-tag fa-2x"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3 tw-font-bold tw-text-md">Free Pick-Up & Drop-Off</h5>
                    <p className="mb-0 tw-text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className=" text-white fa fa-map-pin fa-2x"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentalFeature;
