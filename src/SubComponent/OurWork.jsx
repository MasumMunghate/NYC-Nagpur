import React from "react";
import ButtonSlot from "./ButtonSlot";
import { Link } from "react-router-dom";


const OurWork = () => {
  return (
    <>
      <div className="ourWorkSection tw-bg-gray-200 pb-4 tw-flex tw-flex-col tw-items-center tw-text-center tw-bg-mattBlack tw-gap-2 md:tw-gap-7 md:tw-pb-10">
        {/* <hr className="seperatorHome mx-auto md:mx-auto " /> */}
        <div className="tw-pt-7"></div>
        <h1 className="tw-font-chakra tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-black">
          Our <span className="tw-text-custom-red tw-font-chakra">Work</span>{" "}
        </h1>
        <p className="tw-leading-7 md:tw-w-6/12 tw-text-gray-600 tw-font-chakra md:tw-text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>

        {/* Car images with hover effect  */}
        <div className="tw-flex  tw-flex-col md:tw-flex-row tw-gap-3 md:tw-gap-7 tw-flex-wrap md:tw-container md:tw-justify-center">
          {/* first Card */}

          <div className="tw-group tw-relative tw-cursor-pointer tw-items-center tw-justify-center tw-overflow-hidden tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-black/30">
            <div className="tw-h-3/5 tw-w-72 md:tw-h-2/5">
              <img
                className="tw-h-3/5 md:tw-h-fit tw-w-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-rotate-3 group-hover:tw-scale-125"
                src="https://plus.unsplash.com/premium_photo-1675810094948-d4634e766d2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-black group-hover:tw-from-black/70 group-hover:tw-via-black/60 group-hover:tw-to-black/70"></div>
            <div className="tw-absolute tw-inset-0 tw-flex tw-translate-y-[60%] tw-flex-col tw-items-center tw-justify-center tw-px-9 tw-text-center tw-transition-all tw-duration-500 group-hover:tw-translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="tw-mb-3 tw-text-lg tw-italic tw-text-white tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* Second Card */}
          <div className="tw-group tw-relative tw-cursor-pointer tw-items-center tw-justify-center tw-overflow-hidden tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-black/30">
            <div className="tw-h-3/5 tw-w-72 ">
              <img
                className="tw-h-3/5 md:tw-h-fit tw-w-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-rotate-3 group-hover:tw-scale-125"
                src="https://plus.unsplash.com/premium_photo-1676998430879-34f01a21e424?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-black group-hover:tw-from-black/70 group-hover:tw-via-black/60 group-hover:tw-to-black/70"></div>
            <div className="tw-absolute tw-inset-0 tw-flex tw-translate-y-[60%] tw-flex-col tw-items-center tw-justify-center tw-px-9 tw-text-center tw-transition-all tw-duration-500 group-hover:tw-translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="tw-mb-3 tw-text-lg tw-italic tw-text-white tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* 3rd cart  */}
          <div className="tw-group tw-relative tw-cursor-pointer tw-items-center tw-justify-center tw-overflow-hidden tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-black/30">
            <div className="tw-h-3/5 tw-w-72 ">
              <img
                className="tw-h-3/5 md:tw-h-fit tw-w-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-rotate-3 group-hover:tw-scale-125"
                src="https://images.unsplash.com/photo-1521410195597-69e2218fcee8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-black group-hover:tw-from-black/70 group-hover:tw-via-black/60 group-hover:tw-to-black/70"></div>
            <div className="tw-absolute tw-inset-0 tw-flex tw-translate-y-[60%] tw-flex-col tw-items-center tw-justify-center tw-px-9 tw-text-center tw-transition-all tw-duration-500 group-hover:tw-translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="tw-mb-3 tw-text-lg tw-italic tw-text-white tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* 4th card */}

          <div className="tw-group tw-relative tw-cursor-pointer tw-items-center tw-justify-center tw-overflow-hidden tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-black/30">
            <div className="tw-h-3/5 tw-w-72 ">
              <img
                className="tw-h-3/5 md:tw-h-fit tw-w-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-rotate-3 group-hover:tw-scale-125"
                src="https://plus.unsplash.com/premium_photo-1676998431103-e389923b7887?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-black group-hover:tw-from-black/70 group-hover:tw-via-black/60 group-hover:tw-to-black/70"></div>
            <div className="tw-absolute tw-inset-0 tw-flex tw-translate-y-[60%] tw-flex-col tw-items-center tw-justify-center tw-px-9 tw-text-center tw-transition-all tw-duration-500 group-hover:tw-translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="tw-mb-3 tw-text-lg tw-italic tw-text-white tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* 5th card */}
          <div className="tw-group tw-relative tw-cursor-pointer tw-items-center tw-justify-center tw-overflow-hidden tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-black/30">
            <div className="tw-h-3/5 tw-w-72 ">
              <img
                className="tw-h-3/5 md:tw-h-fit tw-w-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-rotate-3 group-hover:tw-scale-125"
                src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-black group-hover:tw-from-black/70 group-hover:tw-via-black/60 group-hover:tw-to-black/70"></div>
            <div className="tw-absolute tw-inset-0 tw-flex tw-translate-y-[60%] tw-flex-col tw-items-center tw-justify-center tw-px-9 tw-text-center tw-transition-all tw-duration-500 group-hover:tw-translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="tw-mb-3 tw-text-lg tw-italic tw-text-white tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>
        </div>
        <div>
          <Link to='/gallery'>
          <ButtonSlot value={"View More"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurWork;
