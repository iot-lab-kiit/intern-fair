"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const Dropdown = ({ name, subTopicID = [], description, hash }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const filteredSubTopicID = subTopicID.sort((a, b) => a.order - b.order);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (hash && hash === name.replace(/\s+/g, "-").toLowerCase()) {
      setIsOpen(true);
      dropdownRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, name]);

  return (
    <>
      <button
        ref={dropdownRef}
        id="myDropdownButton"
        className={`w-full flex items-center justify-between py-4 px-5 border-b border-[#DCDCE7] rounded-lg transition duration-200 ease-in-out 
          ${isOpen ? "bg-[#f0f2ff] text-[#1F3DD9]" : "text-black hover:bg-[#f0f2ff]"} focus:outline-none focus:ring-2 focus:ring-[#1F3DD9]`}
        onClick={toggleDropdown}
      >
        <div className="flex flex-col text-left w-full">
          <div className={`text-xl font-bold transition-colors duration-300 ${isOpen ? "text-[#1F3DD9]" : "text-black"}`}>
            {name}
          </div>
          {description && (
            <div className={`text-sm transition-colors duration-300 ${isOpen ? "text-[#1F3DD9]" : "text-gray-500"}`}>
              {description}
            </div>
          )}
        </div>
        <div className="transition-transform duration-300">
          {isOpen ? <AiOutlineMinus color="black" size={25} /> : <GoPlus color="black" size={25} />}
        </div>
      </button>

      {isOpen && (
        <div className="w-full flex flex-col items-center justify-center gap-4 p-4 border border-t-0 border-[#DCDCE7] rounded-b-lg shadow-lg bg-white transition-all duration-300">
          {filteredSubTopicID &&
            filteredSubTopicID.length > 0 &&
            filteredSubTopicID.map((SubTopic) => (
              <Link
                href={"/courses/" + SubTopic.id}
                className="w-full flex items-center justify-between p-3 rounded-md hover:bg-[#f0f2ff] transition-colors duration-300 border-b last:border-b-0 border-[#DCDCE7]"
                key={SubTopic.id}
              >
                <div className="text-lg font-medium text-[#081245] hover:text-[#1F3DD9] transition-colors duration-300 w-full">
                  {SubTopic.name}
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export const ClientOnlyDropdown = ({ DropDownData }) => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.slice(1));
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="space-y-4 w-full"> {/* Ensure full width for the dropdown container */}
      {DropDownData.map((data) => (
        <Dropdown
          key={data.id}
          name={data.name}
          description={data.description}
          subTopicID={data.SubTopicID}
          hash={hash}
        />
      ))}
    </div>
  );
};
