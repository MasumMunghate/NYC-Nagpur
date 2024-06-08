

const HowItWork = ()=>{
    return (
        <>
          <div
        className="ourWorkSection flex flex-col items-center text-center bg-mattBlack gap-2 md:gap-7 md:pb-10"
       
      >
        {/* <hr className="seperatorHome mx-auto md:mx-auto " /> */}
        <div className="pt-7"></div>
        <h1 className=" font-chakra text-3xl md:text-5xl font-extrabold text-white">
          Our <span className="text-orange-600  font-chakra">Work</span>{" "}
        </h1>
        <p className="leading-7 md:w-6/12 text-gray-200 font-chakra md:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>

        {/* Car images with hover effect  */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 flex-wrap  md:container md:justify-center">
          {/* first Card */}

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-3/5 w-72 md:h-2/5">
              <img
                className="h-3/5 md:h-fit w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://plus.unsplash.com/premium_photo-1675810094948-d4634e766d2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* Second Card */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-3/5 w-72 ">
              <img
                className="h-3/5 md:h-fit w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://plus.unsplash.com/premium_photo-1676998430879-34f01a21e424?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* 3rd cart  */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-3/5 w-72 ">
              <img
                className="h-3/5 md:h-fit w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1521410195597-69e2218fcee8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* 4th card */}

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-3/5 w-72 ">
              <img
                className="h-3/5 md:h-fit w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://plus.unsplash.com/premium_photo-1676998431103-e389923b7887?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>

          {/* 5th card */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-3/5 w-72 ">
              <img
                className="h-3/5 md:h-fit w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              {/* <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1> */}
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>
        </div>
        <div >
          {/* <ButtonSlot  value={"Viwe More"} /> */}
        </div>
      </div>
        </>
    )
}

export default HowItWork 