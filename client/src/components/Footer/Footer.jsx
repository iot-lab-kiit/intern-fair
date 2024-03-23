"use client"
import React from "react";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
import About from "../homepage/About/About";
const Footer = () => {
  const handleClick = (ch) => {
    console.log(ch);
  };
  return (
    <div className="bg-[#081245] flex flex-col carousel:flex-row text-white carousel:h-[60vh] items-center w-full gap-10 carousel:gap-0 text-center carousel:text-left p-10 carousel:p-0 h-fit ">
      <div className="carousel:text-4xl text-3xl carousel:w-[50%] flex justify-center items-center w-full font-extrabold ">
        Coded with ❤️ and ☕ <br /> by IoT Web Team
      </div>
      <div className="flex carousel:flex-col gap-6 carousel:w-[15%] flex-wrap justify-center">
        <div onClick={()=>handleClick(ch)}>About Us</div>

        <div onClick={()=>handleClick(ch)}>Vision</div>

        <div onClick={()=>handleClick(ch)}>Courses</div>

        <div onClick={()=>handleClick(ch)}>BTS</div>
      </div>
      <div className="flex carousel:flex-col gap-6 carousel:w-[15%] flex-wrap justify-center">
        <div>Discover more</div>
        <div>Community</div>
        <div>Suggestion Box</div>
        <div>FQA's</div>
      </div>
      <div className=" carousel:h-[50%] flex flex-col justify-between ">
        <div>
          <div>Follow us on</div>
          <div className="flex gap-3 flex-wrap justify-center my-4 carousel:justify-normal">
            <Link href="#" target="_blank">
              <Image src="/icons/Medium.png" width={40} height={40} />
            </Link>
            <Link href="#" target="_blank">
              <Image src="/icons/github.png" width={40} height={40} />
            </Link>
            <Link href="#" target="_blank">
              <Image src="/icons/Instagram.png" width={40} height={40} />
            </Link>
            <Link href="#" target="_blank">
              <Image src="/icons/Twitter.png" width={40} height={40} />
            </Link>
            <Link href="#" target="_blank">
              <Image src="/icons/linkedin.png" width={40} height={40} />
            </Link>
          </div>
        </div>
        <Link href="#top">
          <div className="text-lg">
            Go to top <ArrowUpwardIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
