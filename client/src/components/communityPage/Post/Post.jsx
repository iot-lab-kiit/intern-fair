"use client";
import Image from "next/image";
import { useState } from "react";
const Post = () => {
  const [expanded, setexpanded] = useState(false);
  const [liked, setliked] = useState(false);
  const text =
    "🌍 CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation and formatting of HTML CSS consists of selectors, properties, and values. Selectors are patterns that target HTML elements, allowing developers to apply styles selectively. Properties are the styling attributes, such as color, font-size.";

  const toggleExpanded = () => {
    setexpanded(!expanded);
  };
  const toggleLike = () => {
    setliked((prev) => !prev);
  };
  return (
    // w-[28rem] tbPortrait:w-[32rem] min-[1400px]:w-[36rem] tbLandscape:w-[40rem]
    <div className="p-2 mbSmall:p-4 border-[1.5px] border-[#DCDCE7] w-full  rounded-lg">
      <div className=" flex flex-col items-start justify-center gap-3 mbMedSmall:gap-4 border-[#E7E8EC] border-b-2 p-4">
        <div className="flex justify-start items-center gap-2 mbSmall:gap-3 mbMedium:gap-4 w-full font-Gilroy-Medium">
          <div className="">
            <span className="w-9 h-9 mbMedSmall:w-10 mbMedSmall:h-10 mbSmall:w-12 mbSmall:h-12 mbMedium:w-14 mbMedium:h-14 laptop:w-16 laptop:h-16 inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/profile.png"
                fill
                alt="about"
                className="object-contain"
              />
            </span>
          </div>
          <div className="flex-col flex gap-1 self-start mbSmall:self-center mbSmall:gap-0">
            <h1 className="text-[#09123E] text-[0.8rem] mbMedSmall:text-[0.9rem] mbSmall:text-base mbMedium:text-lg leading-5 mbMedium:leading-7 tbPortrait:text-xl tbLandscape:text-2xl font-semibold">
              Figma Community
            </h1>
            <p className="text-[#7D8195] font-medium text-[0.7rem] mbMedSmall:text-[0.7rem] leading-3 mbSmall:text-base mbMedium:text-base tbPortrait:text-lg">
              10 Aug at 14:00
            </p>
          </div>
        </div>
        <div className="">
          <p className=" text-[0.7rem] leading-4 mbXSmall:text-xs mbMedSmall:text-[0.85rem] mbMedSmall:leading-4 mbSmall:text-base mbSmall:leading-5 mbMedium:text-base tbPortrait:text-lg mbMedium:leading-6 tbLandscape:text-xl">
            {expanded ? <>{text}</> : <>{text.slice(0, 200)} </>}
            {!expanded && text.length > 200 && (
              <button className="text-[#2A5885]" onClick={toggleExpanded}>
                Show more...
              </button>
            )}
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 mbMedSmall:gap-2 mbSmall:gap-3 ">
          <button className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.6rem] mbMedSmall:text-[0.65rem] mbSmall:text-[0.7rem] leading-4 mbMedium:text-sm laptop:text-sm tbPortrait:text-base p-[0.2rem] px-[0.6rem] mbMedSmall:p-[0.3rem] mbMedSmall:px-[0.7rem] mbSmall:p-[0.3rem] mbSmall:px-4  mbMedium:p-[0.25rem]   mbMedium:px-4 laptop:p-[0.35rem] laptop:px-6 rounded-full">
            #Tag 1
          </button>
          <button className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.6rem] mbMedSmall:text-[0.65rem] mbSmall:text-[0.7rem] leading-4 mbMedium:text-sm laptop:text-sm tbPortrait:text-base p-[0.2rem] px-[0.6rem] mbMedSmall:p-[0.3rem] mbMedSmall:px-[0.7rem] mbSmall:p-[0.3rem] mbSmall:px-4  mbMedium:p-[0.25rem]   mbMedium:px-4 laptop:p-[0.35rem] laptop:px-6 rounded-full">
            #Tag 2
          </button>
          <button className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.6rem] mbMedSmall:text-[0.65rem] mbSmall:text-[0.7rem] leading-4 mbMedium:text-sm laptop:text-sm tbPortrait:text-base p-[0.2rem] px-[0.6rem] mbMedSmall:p-[0.3rem] mbMedSmall:px-[0.7rem] mbSmall:p-[0.3rem] mbSmall:px-4  mbMedium:p-[0.25rem]   mbMedium:px-4 laptop:p-[0.35rem] laptop:px-6 rounded-full">
            #Tag 3
          </button>
        </div>
        <div className="w-full">
          <span className="w-full h-[8rem] mbXSmall:h-[10rem] mbMedSmall:h-[12rem] mbSmall:h-[14rem] mbMedium:h-[16rem] laptop:h-[18rem] tbPortrait:h-[20rem]  inline-block relative">
            <Image
              src="/images/postImg.png"
              fill
              alt="about"
              className="object-cover"
            />
          </span>
        </div>
      </div>
      <div className="flex items-center p-4 justify-between">
        <div className="flex items-start justify-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 mbMedSmall:w-5 mbMedSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-6 laptop:h-6 tbPortrait:w-8 tbPortrait:h-8 inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/Heart.png"
                fill
                alt="about"
                className="object-contain"
              />
            </div>
            <p className="text-[#191717] text-sm mbSmall:text-base mbMedium:text-lg">
              21
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 mbMedSmall:w-5 mbMedSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-6 laptop:h-6 tbPortrait:w-8 tbPortrait:h-8  inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/SharePost.png"
                fill
                alt="about"
                className="object-contain"
              />
            </span>
            <p className="text-[#191717] text-sm mbSmall:text-base mbMedium:text-lg">
              2
            </p>
          </div>
        </div>
        <div className="">
          <span className="w-5 h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-6 laptop:h-6 tbPortrait:w-8 tbPortrait:h-8 inline-block rounded-full relative cursor-pointer">
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
  );
};
export default Post;
