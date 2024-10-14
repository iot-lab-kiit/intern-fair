"use client";
import { useState } from "react";
import Image from "next/image";
import { siLinkedin } from "simple-icons/icons";

const SimpleIcon = ({ icon, size = 24, color = "currentColor" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
  >
    <path d={icon.path} />
  </svg>
);

const ContentTeamCard = ({ person }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-white transition-all border border-gray-200 rounded-xl w-64 overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-300">
      <div className="aspect-square relative">
        <Image
          src={person.img}
          fill
          alt={`${person.name}'s photo`}
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-xl font-bold text-[#081245]">{person.name}</h1>
        <div className="flex items-center justify-center w-full">
          <a
            href={person.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0A66C2] transition-colors duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <SimpleIcon
              icon={siLinkedin}
              color={hovered ? "#0A66C2" : "currentColor"}
              size={28}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentTeamCard;
