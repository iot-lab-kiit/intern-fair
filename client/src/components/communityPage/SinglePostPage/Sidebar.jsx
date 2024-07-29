import React from "react";

const Sidebar = ({ tagOptions, highlightedTags }) => {
  return (
    <div className="fixed left-0 top-16 h-screen w-[20%] flex-col justify-between border-e bg-[#081245] md:block hidden">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-6">
          {tagOptions.map((tag) => (
            <li key={tag.value}>
              <button
                className={`block w-full text-start rounded-lg px-4 py-4 text-sm font-medium ${
                  highlightedTags.includes(tag.value)
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                } `}
                disabled
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
