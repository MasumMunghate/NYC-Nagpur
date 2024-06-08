import { useState } from "react";
import CarData from "./VehicalData";

const VehicalCategory = () => {
  const [selectCategory, setSelectCategory] = useState("All");
  const handleButtonClick = (btn) => {
    setSelectCategory(btn);
  };
  const filterData =
    selectCategory === "All"
      ? CarData
      : CarData.filter((item) => item.Version === selectCategory.toLowerCase());

  return (
    <>
      <section>
        <div className="tw-main-container tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center md:tw-flex-col">
          <div>
            <h1 className="tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-mb-3">
              Best{" "}
              <span className="tw-text-custom-red tw-font-poppins">Cars</span>
            </h1>
            <p className="tw-leading-7 md:tw-w-6/12 tw-text-gray-600 tw-m-auto md:tw-text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-1 md:tw-flex md:tw-flex-row md:tw-gap-3 md:tw-justify-center tw-mt-4">
          {["All", "new", "old"].map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(btn)}
              className="tw-relative tw-overflow-hidden tw-h-12 tw-px-8 tw-bg-custom-red tw-text-white tw-font-bold tw-cursor-pointer tw-group"
            >
              <span className="tw-relative tw-z-10">{btn}</span>
              <span className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-r tw-from-black tw-to-black tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-500 tw-origin-left"></span>
            </button>
          ))}
        </div>

        <div className="tw-container tw-pt-5 tw-pb-14">
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-4">
            {filterData.map((item, index) => {
              const {
                price,
                nameOfCar,
                city,
                model,
                Version,
                Kilometer,
                images,
              } = item;
              return (
                <div
                  key={index}
                  className="tw-max-w-xs tw-rounded tw-overflow-hidden tw-shadow-indigo-700 tw-border tw-border-white md:tw-w-1/2"
                >
                  <div className="tw-relative">
                    <span className="tw-absolute tw-top-0 tw-left-0 tw-bg-orange-600 tw-text-white tw-text-xs tw-font-semibold tw-px-4 tw-py-2 tw-z-10">
                      {Version}
                    </span>
                    <img
                      className="tw-w-full tw-h-48 tw-object-cover tw-transform tw-transition-transform tw-duration-500 hover:tw-scale-110"
                      src={images}
                      alt="Car Image"
                    />
                  </div>
                  <div className="tw-bg-orange-500 tw-text-white tw-text-sm tw-p-2 tw-flex tw-justify-around tw-items-center">
                    <span>{Kilometer} Km</span>
                    <span>{model} Model</span>
                    <span>{city}</span>
                  </div>
                  <div className="tw-p-4">
                    <div className="tw-flex tw-justify-between">
                      <h2 className="tw-text-lg tw-font-extrabold tw-text-white">
                        {nameOfCar}
                      </h2>
                      <p className="tw-text-orange-600 tw-text-xl tw-font-bold">
                        ${price}
                      </p>
                    </div>
                    <p className="tw-text-white tw-text-md tw-mt-2 tw-font-medium">
                      Great explorer of the truth the master-builder of human
                      happiness.
                    </p>
                    <button className="tw-mt-4 tw-py-2 tw-px-4 tw-bg-white tw-border tw-border-orange-500 tw-text-orange-500 tw-font-semibold tw-rounded hover:tw-bg-orange-500 hover:tw-text-white tw-transition-colors tw-duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicalCategory;
