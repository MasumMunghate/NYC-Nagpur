import React from "react";

const Toggle = () => {
  return (
    <>
      <div class="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div class="container">
          <div class="row gx-0 align-items-center tw-justify-between  " style={{ height: "60px" }}>
            <div class="col-lg-6 text-center text-lg-start mb-lg-0 d-flex w-75" >
              <div class="d-flex flex-wrap">
                <a href="#" class="text-white me-4">
                  <i class="fas fa-map-marker-alt text-white me-2"></i>{" "}
                  Trimurtee Nagar, Nagpur, 440022
                </a>
                <a href="tel:+01234567890" class="text-white me-4">
                  <i class="fas fa-phone-alt text-white me-2"></i> +91
                  8956854964
                </a>
                <a
                  href="mailto:sales@elioratechnologies.co"
                  class="text-white me-0"
                >
                  <i class="fas fa-envelope text-white me-2"></i>{" "}
                  sales@elioratechnologies.co
                </a>
              </div>
            </div>
            <div class="col-lg-6 text-center text-lg-end tw-w-fit ">
              <div class="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-0"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
