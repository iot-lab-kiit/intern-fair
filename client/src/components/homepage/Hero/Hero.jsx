import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-24 max-sm:pt-12"
      id="hero"
    >
      <h3 className="text-[#09123E] bg-[#F4F5FA] rounded-3xl inline-block p-4">
        We are here for you 🤝🏽
      </h3>
      <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-display font-medium tracking-tight text-[#081245] lg:text-7xl md:text-6xl sm:text-5xl">
        Unlocking Solutions &amp; Empowering&nbsp;
        <span className="block lg:inline-block">
          <span className="relative whitespace-nowrap text-[#1F3DD9] sm:block sm:mt-2">
            Success
          </span>
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-16 ml-3 mbSmall:max-md:ml-9 mbMedium:max-lg:ml-6 mbMini:max-mbXSmall:gap-10 max-mbMedSmall:hidden">
        <div className="flex items-center gap-3">
          <span className="text-[#081245] text-lg">Courses</span>
          <img
            src="icons/mdi_star-four-points.png"
            alt="Icon 1"
            className="w-5 h-5"
          />
        </div>
        <div className="flex items-center gap-3 mbMini:max-mbXSmall:mr-4">
          <span className="text-[#081245] text-lg">Mock Test</span>
          <img
            src="icons/mdi_star-four-points.png"
            alt="Icon 2"
            className="w-5 h-5"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#081245] text-lg mbMini:max-mbXSmall:hidden">
            Interview Trends
          </span>
          <img
            src="icons/mdi_star-four-points.png"
            alt="Icon 2"
            className="w-5 h-5 mbMini:max-mbXSmall:hidden"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#081245] text-lg">Resources</span>
          <img
            src="icons/mdi_star-four-points.png"
            alt="Icon 2"
            className="w-5 h-5 mbSmall:max-md:hidden"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#081245] text-lg mbSmall:max-md:hidden">
            Roadmaps
          </span>
          <img
            src="icons/mdi_star-four-points.png"
            alt="Icon 2"
            className="w-5 h-5 mbSmall:max-md:hidden mbMedium:max-lg:hidden mbMini:max-mbXSmall:hidden"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#081245] text-lg mbSmall:max-md:hidden mbMedium:max-lg:hidden mbMini:max-mbXSmall:hidden">
            About us
          </span>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-x-6">
        <Link
          href="/Courses"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center px-3 py-1.5 border-1 rounded-xl focus:outline-none cursor-pointer transition-transform duration-500 border-2 border-[#1F3DD9] bg-[#1F3DD9] text-white rounded-10 shadow-inset-0 hover:shadow-inset-0 w-44 h-12"
        >
          Explore
          <img
            src="icons/Vector.png"
            className="ml-3"
            alt=""
            width={11}
            height={9}
          />
        </Link>
        <Link
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center px-3 py-1.5 border-1 rounded-xl focus:outline-none cursor-pointer transition-transform duration-500 border-2 border-[#BFC2CE] rounded-10 shadow-inset-0 hover:shadow-inset-0 w-44 h-12"
        >
          Login
          <img
            src="icons/Vector_black.png"
            className="ml-3"
            alt=""
            width={11}
            height={9}
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
