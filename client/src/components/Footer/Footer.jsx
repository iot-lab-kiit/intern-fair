"use client";
import React from "react";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
const Footer = () => {
  const handleClick = (ch) => {
    console.log(ch);
    let scrollToPosition;
    let scrollTo;
    switch (ch) {
      case 1:
        scrollTo = document.getElementById("about");
        break;
      case 2:
        scrollTo = document.getElementById("mission");
        break;
      case 3:
        scrollTo = document.getElementById("courses");
        break;
      case 4:
        scrollTo = document.getElementById("bts");
        break;
      case 5:
        scrollTo = document.getElementById("hero");
        break;
      default:
        console.log("Invalid choice");
    }
    const elementPosition = scrollTo.getBoundingClientRect().top;
    const currentScrollPosition =
      window.scrollY || document.documentElement.scrollTop;
    if (ch == 5)
      scrollToPosition = currentScrollPosition + elementPosition - 50;
    else scrollToPosition = currentScrollPosition + elementPosition + 50;
    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#081245] w-full flex justify-center items-center ">
      <div className=" flex flex-col carousel:flex-row text-white carousel:h-[20rem] items-center w-full max-w-[120rem] gap-10 carousel:gap-0 text-center carousel:text-left p-10 carousel:p-0 h-fit ">
        <div className="carousel:text-4xl text-3xl carousel:w-[50%] flex justify-center items-center w-full font-extrabold ">
          Coded with ❤️ and ☕ <br /> by IoT Web Team
        </div>
        <div className="flex carousel:flex-col gap-6 carousel:w-[15%] flex-wrap justify-center cursor-pointer">
          <div onClick={() => handleClick(1)}>About Us</div>

          <div onClick={() => handleClick(2)}>Vision</div>

          <div onClick={() => handleClick(3)}>Courses</div>

          <div onClick={() => handleClick(4)}>BTS</div>
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
              <Link href="https://medium.com/iot-lab-kiit" target="_blank">
                <Image src="/icons/Medium.png" width={40} height={40} />
              </Link>
              <Link href="https://github.com/iot-lab-kiit" target="_blank">
                <Image src="/icons/github.png" width={40} height={40} />
              </Link>
              <Link
                href="https://www.instagram.com/iot.lab.kiit?igsh=MTk0YXVsc29pOHFhdg=="
                target="_blank"
              >
                <Image src="/icons/Instagram.png" width={40} height={40} />
              </Link>
              <Link
                href="https://x.com/iotlabkiit?t=QsHv-m58btkgjfloRQCn0w&s=09"
                target="_blank"
              >
                <Image src="/icons/Twitter.png" width={40} height={40} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/iotlabkiit/mycompany/"
                target="_blank"
              >
                <Image src="/icons/linkedin.png" width={40} height={40} />
              </Link>
            </div>
          </div>

          <div
            className="text-lg cursor-pointer"
            onClick={() => {
              handleClick(5);
            }}
          >
            Go to top <ArrowUpwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
