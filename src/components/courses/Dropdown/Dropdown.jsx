"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const Dropdown = ({ name, subTopicID = [], description, hash }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const filteredSubTopicID = subTopicID.sort((a, b) => a.order - b.order);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (hash && hash === name.replace(/\s+/g, "-").toLowerCase()) {
      setIsOpen(true);
      dropdownRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, name]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <button
        ref={buttonRef}
        id="myDropdownButton"
        aria-expanded={isOpen}
        aria-controls="myDropdownContent"
        onClick={toggleDropdown}
        className={`w-full flex items-center justify-between py-3 px-4 transition duration-200 ease-in-out ${
          isOpen ? "bg-gray-200" : "bg-white"
        }`}
      >
        <div className="flex flex-col text-left">
          <div className={`text-xl font-bold ${isOpen ? "text-[#1F3DD9]" : ""}`}>
            {name}
          </div>
          {description && (
            <div className={`text-sm text-gray-500 ${isOpen ? "text-[#1F3DD9]" : ""}`}>
              {description}
            </div>
          )}
        </div>
        <div>
          {isOpen ? <AiOutlineMinus color="black" size={25} /> : <GoPlus color="black" size={25} />}
        </div>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          id="myDropdownContent"
          role="region"
          aria-labelledby="myDropdownButton"
          className="overflow-hidden transition-max-height duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? "500px" : "0px" }}
        >
          {filteredSubTopicID &&
            filteredSubTopicID.length > 0 &&
            filteredSubTopicID.map((SubTopic) => (
              <Link
                href={"/courses/" + SubTopic.id}
                className="block border-b border-[#081245] w-full h-16 flex items-center justify-between px-4"
                key={SubTopic.id}
              >
                <div className="w-full h-16">
                  <div className="flex flex-row justify-between text-lg font-bold text-[#081245] hover:text-[#1F3DD9]">
                    <div>{SubTopic.name}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
export { Dropdown as ClientOnlyDropdown };
