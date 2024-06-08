import { useEffect } from "react";
import Car1 from "../assets/img/car-1.png";
import Car2 from "../assets/img/car-2.png";
import Car3 from "../assets/img/car-3.png";
import Car4 from "../assets/img/car-4.png";

const CarCategory = () => {
  useEffect(() => {
    $(".categories-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="container-fluid categories pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Vehicle <span className="text-primary">Categories</span>
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
            </p>
          </div>
          <div
            className="categories-carousel owl-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {[Car1, Car2, Car3, Car4].map((car, index) => (
              <div className="categories-item p-4" key={index}>
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img
                      src={car}
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>{`Car Model ${index + 1}`}</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">{`${(3.5 + index * 0.3).toFixed(
                        1
                      )} Review`}</div>
                      <div className="d-flex justify-content-center text-secondary">
                        {[...Array(5)].map((_, starIndex) => (
                          <i
                            key={starIndex}
                            className={`fas fa-star ${
                              starIndex < Math.floor(3.5 + index * 0.3)
                                ? ""
                                : "text-body"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        ${99 + index * 20}:00/Day
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-users text-dark"></i>
                        <span className="text-body ms-1">4 Seat</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark"></i>
                        <span className="text-body ms-1">AT/MT</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-gas-pump text-dark"></i>
                        <span className="text-body ms-1">Petrol</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark"></i>
                        <span className="text-body ms-1">2015</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-cogs text-dark"></i>
                        <span className="text-body ms-1">AUTO</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-road text-dark"></i>
                        <span className="text-body ms-1">27K</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill d-flex justify-content-center py-3"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCategory;
