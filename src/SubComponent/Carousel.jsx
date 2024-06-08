import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import carouselImg2 from '../assets/img/carousel-2.jpg'
import carouselImg1 from '../assets/img/carousel-1.jpg'

const Carousel = () => {
  return (
    <div className="header-carousel">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src={carouselImg2} className="img-fluid w-100" alt="First slide" />
            <div className="carousel-caption">
              <div className="container py-4">
                <div className="row g-5">
                  <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{ animationDelay: '1s' }}>
                    <div className="bg-secondary rounded p-5">
                      <h4 className="text-white mb-4">schedule your appointment</h4>
                      <form>
                        <div className="row g-3">
                          <div className="col-12">
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select Your Car type</option>
                              <option value="1">VW Golf VII</option>
                              <option value="2">Audi A1 S-Line</option>
                              <option value="3">Toyota Camry</option>
                              <option value="4">BMW 320 ModernLine</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-map-marker-alt"></span> <span className="ms-1">Pick Up</span>
                              </div>
                              <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                            </div>
                          </div>
                          <div className="col-12">
                            <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-map-marker-alt"></span><span className="ms-1">Drop off</span>
                              </div>
                              <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Pick Up</span>
                              </div>
                              <input className="form-control" type="date" />
                              <select className="form-select ms-3" aria-label="Default select example">
                                <option selected>12:00AM</option>
                                <option value="1">1:00AM</option>
                                <option value="2">2:00AM</option>
                                <option value="3">3:00AM</option>
                                <option value="4">4:00AM</option>
                                <option value="5">5:00AM</option>
                                <option value="6">6:00AM</option>
                                <option value="7">7:00AM</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Drop off</span>
                              </div>
                              <input className="form-control" type="date" />
                              <select className="form-select ms-3" aria-label="Default select example">
                                <option selected>12:00AM</option>
                                <option value="1">1:00AM</option>
                                <option value="2">2:00AM</option>
                                <option value="3">3:00AM</option>
                                <option value="4">4:00AM</option>
                                <option value="5">5:00AM</option>
                                <option value="6">6:00AM</option>
                                <option value="7">7:00AM</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-light w-100 py-2">Book Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: '1s' }}>
                    <div className="text-start">
                      <h1 className="display-5 text-white">Performance Without Compromise</h1>
                      <p>We are dedicated to providing high-quality auto repair and maintenance to keep you and your car safe on the road. <br />We give your car the care it deserves. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselImg1} className="img-fluid w-100" alt="First slide" />
            <div className="carousel-caption">
              <div className="container py-4">
                <div className="row g-5">
                  <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{ animationDelay: '1s' }}>
                    <div className="bg-secondary rounded p-5">
                      <h4 className="text-white mb-4">schedule your appointment</h4>
                      <form>
                        <div className="row g-3">
                          <div className="col-12">
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select Your Car type</option>
                              <option value="1">VW Golf VII</option>
                              <option value="2">Audi A1 S-Line</option>
                              <option value="3">Toyota Camry</option>
                              <option value="4">BMW 320 ModernLine</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-map-marker-alt"></span><span className="ms-1">Pick Up</span>
                              </div>
                              <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                            </div>
                          </div>
                          <div className="col-12">
                            <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-map-marker-alt"></span><span className="ms-1">Drop off</span>
                              </div>
                              <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Pick Up</span>
                              </div>
                              <input className="form-control" type="date" />
                              <select className="form-select ms-3" aria-label="Default select example">
                                <option selected>12:00AM</option>
                                <option value="1">1:00AM</option>
                                <option value="2">2:00AM</option>
                                <option value="3">3:00AM</option>
                                <option value="4">4:00AM</option>
                                <option value="5">5:00AM</option>
                                <option value="6">6:00AM</option>
                                <option value="7">7:00AM</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                <span className="fas fa-calendar-alt"></span><span className="ms-1">Drop off</span>
                              </div>
                              <input className="form-control" type="date" />
                              <select className="form-select ms-3" aria-label="Default select example">
                                <option selected>12:00AM</option>
                                <option value="1">1:00AM</option>
                                <option value="2">2:00AM</option>
                                <option value="3">3:00AM</option>
                                <option value="4">4:00AM</option>
                                <option value="5">5:00AM</option>
                                <option value="6">6:00AM</option>
                                <option value="7">7:00AM</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-light w-100 py-2">Book Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: '1s' }}>
                    <div className="text-start">
                      <h1 className="display-5 text-white">Luxury Car Care  <br /> Delivered </h1>
                      <p>AutoMechanica is your dealer alternative to your car service and repair needs. Our experienced technicians provide <br /> reliable and consistent service for all your auto repair needs. </p>
                    </div>
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

export default Carousel;
