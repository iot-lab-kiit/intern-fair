"use client";
import { useState } from "react";
import Image from "next/image";
import { icons } from "@/data/TeamsPage/PeopleData";

const TeamCard = ({ person }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="border-[#DCDCE7] hover:border-[#1F3DD9] transition-all border-2 rounded-xl h-[18rem] w-[15rem] mbMedSmall:h-[18rem] mbMedSmall:w-[13rem] mbSmall:h-[20rem] mbSmall:w-[15rem] mbMedium:h-[23rem] mbMedium:w-[18rem] tbPortrait:h-[25rem] tbPortrait:w-[20rem] min-[1440px]:h-[28rem] min-[1440px]:w-[23rem] p-3.5 flex flex-col items-center justify-start gap-3 mbMedium:gap-4">
      <div className="h-[85%] w-full relative">
        <Image
          src={person.img}
          fill
          alt="img"
          className="rounded-xl aspect-video"
        />
      </div>
      <h1 className="text-[1.1rem] mbSmall:text-[1.2rem] tbPortrait:text-2xl tbLandscape:text-3xl font-bold text-[#081245]">
        {person.name}
      </h1>
      <div className="flex items-center justify-center gap-5 w-full">
        {icons.map((icon) => (
          <a
            key={icon.id}
            href={icon.id === "github" ? person.githubUrl : person.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter(icon.id)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIcon === icon.id ? (
              <Image
                src={icon.hoverSrc}
                width={20}
                height={20}
                alt={`${icon.id}-icon`}
                className="w-[1.75rem] h-[1.75rem] mbMedium:w-[2.1rem] mbMedium:h-[2.1rem] tbPortrait:w-[2.35rem] tbPortrait:h-[2.35rem] cursor-pointer"
              />
            ) : (
              <div className="rounded-full border-[#9E9EA9] p-1.5 mbMedium:p-2 flex items-center justify-center border-[1.5px] relative">
                <Image
                  src={icon.defaultSrc}
                  width={20}
                  height={20}
                  alt={`${icon.id}-icon`}
                  className="w-3 h-3 mbMedium:w-4 mbMedium:h-4 tbPortrait:w-5 tbPortrait:h-5 cursor-pointer"
                />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
