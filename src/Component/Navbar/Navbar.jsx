// import React, { useState } from 'react'
// import Toggle from '../Toggle/Toggle'
// import { Link } from 'react-router-dom'
// import Carousel from '../../SubComponent/Carousel'
// import Logo from '../../assets/img/nyc logo.png'
// import Modal from '../Modal/Modal'

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//     <div>
//       <Toggle/>
//     </div>
//     {/* Navbar Start */}
//     <div>
//     <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-light">
//           <Link to="/" className="navbar-brand p-0 tw-w-20 tw-h-fit tw-mt-5 md:tw-w-20 md:tw-h-fit md:tw-ml-20 tw-object-contain">
//            <img src={Logo} alt="NYC LOGO"  />
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span className="fa fa-bars"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav mx-auto py-0">
//               <Link to="/" className="nav-item nav-link active">Home</Link>
//               <Link to="/about" className="nav-item nav-link">About</Link>
//               <Link to="/services" className="nav-item nav-link">Service</Link>
//               <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
//               <Link to="/contact" className="nav-item nav-link">Contact</Link>
//             </div>
//             <button onClick={() => setShowModal(true)} className="btn btn-primary rounded-pill py-2 px-4">Book Apointment</button>
//           </div>
//         </nav>
//       </div>
//     </div>
//     </div>
//     {/* Navbar End */}
//     <Modal showModal={showModal} setShowModal={setShowModal} />
//     </>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/nyc logo.png";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="mx-10">
        <Toggle />
      </div>
      {/* Navbar Start */}
      {/* <div
        className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-1 py-lg-0"
        style={{ maxWidth: "100%" }}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <img
              src={Logo}
              alt="NYC LOGO"
              className="img-fluid navbar-brand p-0 navbar-brand p-0 tw-w-20 tw-h-fit tw-mt-5 md:tw-w-30 md:tw-h-fit md:tw-ml-20 tw-object-contain"
            
            />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav tw-w-fit tw-mx-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/services" className="nav-item nav-link">
                  Service
                </Link>
                <Link to="/gallery" className="nav-item nav-link">
                  Gallery
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <button
                className="btn btn-primary rounded-pill py-1 px-3 tw-mx-10"
                onClick={handleModalToggle}
              >
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      </div> */}
      <div
        className="container-fluid nav-bar sticky-top "
        // style={{ maxWidth: "100%" }}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <img
              src={Logo}
              alt="NYC LOGO"
              className="img-fluid navbar-brand p-0 tw-w-auto tw-h-auto md:max-w-100 md:h-auto"
              style={{ maxWidth: "100px", height: "73px", padding: "5px" }}/>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav tw-w-fit tw-mx-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/services" className="nav-item nav-link">
                  Service
                </Link>
                <Link to="/gallery" className="nav-item nav-link">
                  Gallery
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <button
                className="btn btn-primary rounded-pill py-2 px-3 tw-mx-10"
                onClick={handleModalToggle}
              >
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar End */}

      {/* Modal */}
      {isModalOpen && (
        <div
          id="authentication-modal"
          className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-overflow-y-auto tw-overflow-x-hidden md:tw-mt-32 tw-mt-20"
        >
          <div className="tw-relative tw-p-4 tw-w-full tw-max-w-md md:tw-w-2/4 tw-max-h-full">
            <div className="tw-relative tw-bg-white tw-rounded-lg tw-shadow dark:tw-bg-gray-700">
              <div className="tw-flex tw-items-center tw-justify-between tw-p-4 md:tw-p-5 tw-border-b tw-rounded-t dark:tw-border-gray-600">
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 dark:tw-text-white">
                  Book Your Appointment
                </h3>
                <button
                  type="button"
                  className="tw-text-gray-400 tw-text-3xl tw-w-8 tw-h-8 tw-ms-auto tw-inline-flex tw-justify-end tw-items-center dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                  onClick={handleModalToggle}
                >
                  <IoClose />
                </button>
              </div>
              <div className="tw-p-4 md:tw-p-5">
                <form className="tw-space-y-4" action="#">
                  <div>
                    <label
                      htmlFor="name"
                      className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-600 dark:tw-border-gray-500 dark:tw-placeholder-gray-400 dark:tw-text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Mobile Number"
                      className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-600 dark:tw-border-gray-500 dark:tw-placeholder-gray-400 dark:tw-text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="details"
                      className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >
                      Vehicle Details
                    </label>
                    <input
                      type="text"
                      name="details"
                      id="details"
                      placeholder="Vehicle Details"
                      className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-600 dark:tw-border-gray-500 dark:tw-placeholder-gray-400 dark:tw-text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
