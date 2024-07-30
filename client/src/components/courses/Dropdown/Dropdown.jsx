"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
        className={`border-b border-[#DCDCE7] w-full py-3 flex flex-col justify-between p-4 transition duration-200 ease-in-out hover:text-[#1F3DD9] ${
          isOpen ? "" : "text-black"
        }`}
        onClick={toggleDropdown}
      >
        <div className={`text-xl font-bold ${isOpen ? "text-[#1F3DD9]" : ""}`}>
          {name}
        </div>
        {description && (
          <div
            className={`text-sm text-gray-500 ${
              isOpen ? "text-[#1F3DD9]" : ""
            }`}
          >
            {description}
          </div>
        )}
      </button>
      {isOpen && (
        <div
          className={`w-screen max-w-full flex flex-col items-center justify-center gap-6 mbSmall:px-5 mbMini:px-0`}
        >
          {filteredSubTopicID &&
            filteredSubTopicID.length > 0 &&
            filteredSubTopicID.map((SubTopic) => (
              <Link
                href={"/courses/" + SubTopic.id}
                className="border-b border-[#081245] w-full h-16 flex items-center justify-between"
                key={SubTopic.id}
              >
                <div className="w-full h-16 ">
                  <div className="flex flex-row justify-between text-lg font-bold text-[#081245] hover:text-[#1F3DD9]">
                    <div className="px-14">{SubTopic.name}</div>
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
    <>
      {DropDownData.map((data) => (
        <Dropdown
          key={data.id}
          name={data.name}
          description={data.description}
          subTopicID={data.SubTopicID}
          hash={hash}
        />
      ))}
    </>
  );
};
