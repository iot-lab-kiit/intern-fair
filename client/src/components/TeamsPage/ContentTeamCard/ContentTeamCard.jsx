"use client";
import { useState } from "react";
import Image from "next/image";

const ContentTeamCard = ({ person }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="border-[#DCDCE7] self-start hover:border-[#1F3DD9] transition-all border-2 rounded-xl h-[13rem] w-[10rem] mbMedSmall:h-[13rem] mbMedSmall:w-[8rem] mbSmall:h-[14rem] mbSmall:w-[9rem] mbMedium:h-[16rem] mbMedium:w-[10rem] laptop:h-[19rem] laptop:w-[13rem] tbPortrait:h-[22rem] tbPortrait:w-[16rem] min-[1440px]:h-[28rem] min-[1440px]:w-[24rem] tbLandscape:h-[28rem] tbLandscape:w-[22rem] p-3.5 flex flex-col items-center justify-start gap-1.5 mbSmall:gap-2.5 mbMedium:gap-4">
      <div className="h-[85%] w-full relative">
        <Image
          src={person.img}
          fill
          alt="img"
          className="rounded-xl aspect-video object-cover"
        />
      </div>
      <h1 className="text-[0.65rem] mbSmall:text-[0.75rem] mbMedium:text-[0.9rem] laptop:text-[1.2rem] tbPortrait:text-2xl tbLandscape:text-3xl font-bold text-[#081245]">
        {person.name}
      </h1>
      <div className="flex items-center justify-center gap-5 w-full">
        <a
          href={person.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hovered ? (
            <Image
              src="/icons/linkedin.png"
              width={20}
              height={20}
              alt="linkedin-icon"
              className="w-[1.75rem] h-[1.75rem] mbMedium:w-[2.1rem] mbMedium:h-[2.1rem] tbPortrait:w-[2.35rem] tbPortrait:h-[2.35rem] cursor-pointer"
            />
          ) : (
            <div className="rounded-full border-[#9E9EA9] p-1.5 mbMedium:p-2 flex items-center justify-center border-[1.5px] relative">
              <Image
                src="/icons/linkedin_grey.png"
                width={20}
                height={20}
                alt="linkedin-icon"
                className="w-3 h-3 mbMedium:w-4 mbMedium:h-4 tbPortrait:w-5 tbPortrait:h-5 cursor-pointer"
              />
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default ContentTeamCard;
