"use client";

import React from "react";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.back();
  };
  const items = [
    "Courses",
    "Mock test",
    "Online Library & PDF",
    "Mock Interviews",
    "Resume Templates",
    "Events",
    "Practice & Quizzes",
    "Best Resources",
  ];

  return (
    <div className="flex flex-row justify-around tbPortrait:flex-col  items-center ">
      <div
        className="back-button text-base flex justify-start w-[95%] h-16"
        style={{ margin: "0 5%" }}
      >
        <div
          className="back-button flex gap-3 items-center justify-center"
          onClick={handleBackButtonClick}
        >
          <div className="h-5 w-5">
            <Image src="/images/back.png" height={20} width={20} />
          </div>
          <div>Back</div>
        </div>
      </div>

      <div
        className="navigation text-base gap-2  flex-row items-center  border-2 rounded-full py-2 mx-auto w-[95%] hidden tbPortrait:flex tbPortrait:justify-center"
        style={{
          scrollbarWidth: "none",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-1 rounded-3xl cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#1F3DD9] hover:text-white hover:rounded-3xl whitespace-nowrap  "
          >
            {item}
          </div>
        ))}
      </div>

      <div
        className="hamburger rounded-full border-2 mx-auto px-2 py-1 tbPortrait:hidden items-center"
        style={{ margin: "0 5%" }}
      >
        <Dropdown backdrop="blur">
          <DropdownTrigger className="border-none">
            <Button className="focus:outline-none ">Open Menu</Button>
          </DropdownTrigger>

          <DropdownMenu variant="faded" aria-label="Static Actions">
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                className="focus:outline-none focus:ring focus:border-[#1F3DD9]"
              >
                {item}{" "}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navigation;
