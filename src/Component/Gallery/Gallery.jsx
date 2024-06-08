import React, { useState } from "react";
import GalleryData from "./GalleryData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import factBg from "../../assets/img/fact-bg.jpg";
import "./Gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectCategory, setSelectCategory] = useState("All");

  const handleButtonClick = (category) => {
    setSelectCategory(category);
  };

  const toggleImg = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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

  const filterdata =
    selectCategory === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.category === selectCategory);

  return (
    <>
      {/* Banner section */}
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
      {/* Gallery section  */}

      <div className="gallerySection pt-5">
        <div className="buttonContainer">
          {["All", "Repairing", "Car Washing", "Paint", "New"].map(
            (category) => (
              <button
                key={category}
                className="categoryButton"
                onClick={() => handleButtonClick(category)}
              >
                {category}
              </button>
            )
          )}
        </div>

        <figure>
          {filterdata.map((items) => (
            <img
              key={items.id}
              src={items.images}
              alt={items.icons}
              onClick={() => toggleImg(items.images)}
            />
          ))}
        </figure>

        {selectedImage && (
          <div className="modal">
            <button
              className="closeButton bg-red-600 tw-h-auto"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              onClick={() => handleChangePre()}
              className="navButton bg-red-600 tw-text-white"
            >
              <FaChevronLeft className="navIcon" />
            </button>
            <div className="modalContent">
              <img src={selectedImage} alt="Selected" />
            </div>
            <button
              onClick={() => handleChangenext()}
              className="navButton bg-red-600 tw-text-white"
            >
              <FaChevronRight className="navIcon" />
            </button>
          </div>
        )}
      </div>


    </>
  );
};

export default Gallery;

const aboutBackImg = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${factBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  bacgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
};
