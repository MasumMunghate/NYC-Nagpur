import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import factBg from "../../assets/img/fact-bg.jpg";

import GalleryData from './GalleryData'; 
import { Link } from 'react-router-dom';

const GallerySecond = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectCategory, setSelectCategory] = useState("All");



  const toggleImg = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleButtonClick = (category) => {
    setSelectCategory(category);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  const filterdata =
    selectCategory === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.category === selectCategory);

  const handleChangePre = () => {
    const currentIndex = filterdata.findIndex(
      (item) => item.images === selectedImage
    );
    const prevIndex =
      (currentIndex - 1 + filterdata.length) % filterdata.length;
    setSelectedImage(filterdata[prevIndex].images);
  };

  const handleChangenext = () => {
    const currentIndex = filterdata.findIndex(
      (item) => item.images === selectedImage
    );
    const nextIndex = (currentIndex + 1) % filterdata.length;
    setSelectedImage(filterdata[nextIndex].images);
  };

  return (
    <>
    {/* Banner Section  */}
    <div
        className="overlay container-fluid bg-breadcrumb"
        style={{ ...aboutBackImg }}
      >
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Gallery
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">Gallery</li>
          </ol>
        </div>
      </div>


      <div className="tw-gallarySection tw-font-chakra tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-3 md:tw-gap-3 tw-bg-mattBlack">
        <div className="tw-flex tw-justify-center tw-items-center tw-gap-3 tw-flex-wrap tw-p-4">
          {["All", "Repairing", "Car Washing", "Paint", "New"].map(
            (category) => (
              <button
                key={category}
                className="tw-w-[130px] tw-h-[40px] tw-bg-white tw-text-mattBlack tw-font-chakra tw-relative tw-overflow-hidden tw-text-md tw-tracking-wider tw-font-medium tw-uppercase tw-transition-all tw-duration-300 tw-ease-in-out tw-cursor-pointer tw-border tw-flex tw-items-center tw-justify-center tw-rounded-sm before:tw-content-[''] before:tw-absolute before:tw-w-0 before:tw-h-0.5 before:tw-bg-orange-600 before:tw-transition-all before:tw-duration-500 before:tw-ease-[cubic-bezier(0.35,0.1,0.25,1)] before:tw-right-0 before:tw-top-0 after:tw-content-[''] after:tw-absolute after:tw-w-0 after:tw-h-0.5 after:tw-bg-orange-600 after:tw-transition-all after:tw-duration-300 after:tw-ease-[cubic-bezier(0.35,0.1,0.25,1)] after:tw-left-0 after:tw-bottom-0 hover:before:tw-w-full hover:after:tw-w-full tw-group"
                onClick={() => handleButtonClick(category)}
              >
                <span className="tw-w-full tw-h-full tw-absolute tw-left-0 tw-top-0 tw-m-0 tw-p-0 tw-z-10 before:tw-content-[''] before:tw-absolute before:tw-w-0.5 before:tw-h-0 before:tw-bg-orange-600 before:tw-transition-all before:tw-duration-500 before:tw-ease-[cubic-bezier(0.35,0.1,0.25,1)] before:tw-right-0 before:tw-top-0 after:tw-content-[''] after:tw-absolute after:tw-w-0.5 after:tw-h-0 after:tw-bg-orange-600 after:tw-transition-all after:tw-duration-300 after:tw-ease-[cubic-bezier(0.35,0.1,0.25,1)] after:tw-left-0 after:tw-bottom-0 group-hover:tw-z-10 group-hover:before:tw-h-full group-hover:after:tw-h-full"></span>
                <p
                  className="tw-p-0 tw-m-0 tw-transition-all tw-duration-400 tw-ease-[cubic-bezier(0.35,0.1,0.25,1)] tw-absolute tw-w-full tw-h-full before:tw-absolute before:tw-w-full before:tw-transition-all before:tw-duration-400 before:tw-ease-[cubic-bezier(0.35,0.1,0.25,1)] before:tw-z-10 before:tw-left-0 before:tw-content-[attr(data-title)] before:tw-top-1/2 before:tw--translate-y-1/2 after:tw-absolute after:tw-w-full after:tw-transition-all after:tw-duration-400 after:tw-ease-[cubic-bezier(0.35,0.1,0.25,1)] after:tw-z-10 after:tw-left-0 after:tw-content-[attr(data-text)] after:tw-top-[150%] after:tw-text-orange-600 group-hover:before:tw-top-[-50%] group-hover:before:tw-rotate-[5deg] group-hover:after:tw-top-1/2 group-hover:after:tw--translate-y-1/2"
                  data-start="good luck!"
                  data-text={category}
                  data-title={category}
                ></p>
              </button>
            )
          )}
        </div>

        <div
          className="tw-parent tw-grid tw-grid-cols-1 md:tw-grid-cols-3 md:tw-grid-rows-3 tw-gap-3 tw-w-full tw-h-full md:tw-w-5/6 tw-container"
         
        >
          {filterdata.map((items) => {
            const { images, icons } = items;
            return (
              <div key={items.id}>
                <div className="tw-group tw-relative tw-cursor-pointer tw-items-center tw-justify-center tw-overflow-hidden tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-black/30">
                  <div className="tw-h-3/5">
                    <img
                      className="tw-h-3/5 md:tw-h-fit tw-w-full md:tw-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-rotate-3 group-hover:tw-scale-125"
                      src={images}
                      alt=""
                    />
                  </div>
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-black group-hover:tw-from-black/70 group-hover:tw-via-black/60 group-hover:tw-to-red-300/70"></div>
                  <div className="tw-absolute tw-inset-0 tw-flex tw-translate-y-[60%] tw-flex-col tw-items-center tw-justify-center tw-px-9 tw-text-center tw-transition-all tw-duration-500 group-hover:tw-translate-y-0">
                    <h1 className='tw-text-white tw-text-2xl' onClick={() => toggleImg(images)}> {icons}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div className="tw-fixed md:tw-mt-14 tw-inset-0 tw-bg-black tw-headline tw-tagline tw-punchline tw-bg-opacity-75 tw-flex tw-items-center tw-justify-center tw-z-50">
            <button
              className="tw-absolute tw-top-20 tw-right-10 tw-text-7xl tw-text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>
            <button onClick={() => handleChangePre()}>
              <FaChevronLeft className="tw-text-white tw-text-xl md:tw-text-5xl" />
            </button>
            <div className="tw-relative tw-bg-white tw-p-4 tw-rounded-md md:tw-w-3/5 md:tw-h-3/5">
              <img
                src={selectedImage}
                alt="Selected"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
            <button onClick={() => handleChangenext()}>
              <FaChevronRight className="tw-text-white tw-text-xl md:tw-text-5xl" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GallerySecond;

const aboutBackImg = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${factBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    bacgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
  };