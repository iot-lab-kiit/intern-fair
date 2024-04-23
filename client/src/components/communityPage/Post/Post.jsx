"use client";
import Image from "next/image";
import { useState } from "react";
const Post = () => {
  const [expanded, setexpanded] = useState(false);
  const text =
    "🌍 CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation and formatting of HTML CSS consists of selectors, properties, and values. Selectors are patterns that target HTML elements, allowing developers to apply styles selectively. Properties are the styling attributes, such as color, font-size.";

  const toggleExpanded = () => {
    setexpanded(!expanded);
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="p-2 mbSmall:p-4 border-[1.5px] border-[#DCDCE7] w-[40%] rounded-lg">
        <div className=" flex flex-col items-start justify-center gap-3 mbMedSmall:gap-4 border-[#E7E8EC] border-b-2 p-4">
          <div className="flex justify-start items-center gap-2 mbSmall:gap-3 mbMedium:gap-4 w-full font-Gilroy-Medium">
            <div className="">
              <span className="w-6 h-6 mbMedSmall:w-7 mbMedSmall:h-7 mbSmall:w-10 mbSmall:h-10 mbMedium:w-14 mbMedium:h-14 laptop:w-16 laptop:h-16 inline-block rounded-full relative cursor-pointer">
                <Image
                  src="/images/profile.png"
                  fill
                  alt="about"
                  className="object-contain"
                />
              </span>
            </div>
            <div className="flex-col self-center">
              <h1 className="text-[#09123E] text-[0.55rem] mbMedSmall:text-[0.65rem]  mbSmall:text-sm mbMedium:text-base laptop:text-lg leading-5 mbMedium:leading-7 tbPortrait:text-xl tbLandscape:text-2xl font-semibold">
                Figma Community
              </h1>
              <p className="text-[#7D8195] font-medium text-[0.5rem] mbMedSmall:text-[0.55rem] leading-3 mbSmall:text-xs mbMedium:text-sm laptop:text-base tbPortrait:text-lg">
                10 Aug at 14:00
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-[0.5rem] leading-3 mbMedSmall:text-[0.6rem] mbMedSmall:leading-4 mbSmall:text-xs mbSmall:leading-5 mbMedium:text-sm laptop:text-base tbPortrait:text-lg mbMedium:leading-6 tbLandscape:text-xl">
              {expanded ? <>{text}</> : <>{text.slice(0, 200)} </>}
              {!expanded && text.length > 200 && (
                <button className="text-[#2A5885]" onClick={toggleExpanded}>
                  Show more...
                </button>
              )}
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 mbMedSmall:gap-2 mbSmall:gap-3 ">
            <button className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.35rem] mbMedSmall:text-[0.45rem] mbSmall:text-[0.6rem] leading-4 mbMedium:text-xs laptop:text-sm tbPortrait:text-base p-[0.08rem] px-[0.3rem] mbMedSmall:p-[0.15rem] mbMedSmall:px-[0.45rem] mbSmall:p-[0.2rem] mbSmall:px-2  mbMedium:p-[0.25rem]   mbMedium:px-4 laptop:p-[0.35rem] laptop:px-6 rounded-full">
              #Tag 1
            </button>
            <button className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.35rem] mbMedSmall:text-[0.45rem] mbSmall:text-[0.6rem] leading-4 mbMedium:text-xs laptop:text-sm tbPortrait:text-base p-[0.08rem] px-[0.3rem] mbMedSmall:p-[0.15rem] mbMedSmall:px-[0.45rem] mbSmall:p-[0.2rem] mbSmall:px-2  mbMedium:p-[0.25rem]   mbMedium:px-4 laptop:p-[0.35rem] laptop:px-6 rounded-full">
              #Tag 2
            </button>
            <button className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.35rem] mbMedSmall:text-[0.45rem] mbSmall:text-[0.6rem] leading-4 mbMedium:text-xs laptop:text-sm tbPortrait:text-base p-[0.08rem] px-[0.3rem] mbMedSmall:p-[0.15rem] mbMedSmall:px-[0.45rem] mbSmall:p-[0.2rem] mbSmall:px-2  mbMedium:p-[0.25rem]   mbMedium:px-4 laptop:p-[0.35rem] laptop:px-6 rounded-full">
              #Tag 3
            </button>
          </div>
        </div>
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-start justify-center gap-6">
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-3  mbSmall:w-4 mbSmall:h-4 laptop:w-6 laptop:h-6 tbPortrait:w-8 tbPortrait:h-8  inline-block rounded-full relative cursor-pointer">
                <Image
                  src="/images/Heart.png"
                  fill
                  alt="about"
                  className="object-contain"
                />
              </span>
              <p className="text-[#191717] text-xs mbSmall:text-sm mbMedium:text-base laptop:text-lg ">
                21
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 mbSmall:w-4 mbSmall:h-4 laptop:w-6 laptop:h-6 tbPortrait:w-8 tbPortrait:h-8  inline-block rounded-full relative cursor-pointer">
                <Image
                  src="/images/SharePost.png"
                  fill
                  alt="about"
                  className="object-contain"
                />
              </span>
              <p className="text-[#191717] text-xs mbSmall:text-sm mbMedium:text-base laptop:text-lg">
                2
              </p>
            </div>
          </div>
          <div className="">
            <span className="w-3 h-3 mbSmall:w-4 mbSmall:h-4 laptop:w-6 laptop:h-6 tbPortrait:w-8 tbPortrait:h-8 inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/Bookmark.png"
                fill
                alt="about"
                className="object-contain"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
