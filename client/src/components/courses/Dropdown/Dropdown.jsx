"use client";
import { useState } from "react";
import Link from "next/link";

const Dropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="myDropdownButton" // Added ID for potential specificity
        className={`border-b border-[#DCDCE7] w-full h-16 flex items-center justify-between p-4 transition duration-200 ease-in-out hover:text-[#1F3DD9] ${
          isOpen ? "" : "text-black"
        }`}
        onClick={(e) => toggleDropdown()}
      >
        <div className={`text-2xl font-bold ${isOpen ? "text-[#1F3DD9]" : ""}`}>
          {title}
        </div>
      </button>
      {/* Dropdown styling */}{" "}
      {isOpen && (
        <div
          className={`w-screen max-w-full flex flex-col items-center justify-center gap-6 mbSmall:px-5 mbMini:px-0`}
        >
          {links &&
            links.map((link, index) => (
              <Link
                href={"/courses" + link.url}
                className="border-b border-[#081245] w-full h-16 flex items-center justify-between"
                key={index}
              >
                <div className="w-full h-16 ">
                  <div className="flex flex-row justify-between text-2xl font-bold text-[#081245] hover:text-[#1F3DD9]">
                    <div className="px-14">{link.label}</div>
                    gg
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};
export const ClientOnlyDropdown = ({ DropDownData }) => {
  return (
    <>
      {DropDownData.map((data, index) => (
        <Dropdown key={index} title={data.title} links={data.links} />
      
      ))}
    </>
  );
};
