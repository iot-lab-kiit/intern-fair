import Link from "next/link";
import React from "react";

const Sidebar = ({ tagOptions, handleTagClick, selectedTag }) => {
  return (
    <div className="fixed left-0 top-16 h-screen w-[20%] flex-col justify-between border-e bg-[#081245] md:block hidden">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-6">
          {tagOptions.map((tag) => (
            <li key={tag.value}>
              <button
                onClick={() => handleTagClick(tag.value)}
                className={`block  w-full text-start rounded-lg px-4 py-4 text-sm font-medium ${
                  selectedTag === tag.value
                    ? "bg-blue-600 text-white hover:text-white"
                    : "bg-white hover:text-[#1f3dd9]"
                } `}
              >
                {tag.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
