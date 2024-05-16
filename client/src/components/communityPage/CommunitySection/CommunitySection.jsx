"use client";
import { useState } from "react";
import Post from "../Post/Post";
import CommunityList from "../CommunityList/CommunityList";
import Image from "next/image";
const CommunitySection = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleStartPostClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };
  const handleFileInputChange = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-7 mbXSmall:px-10 mbMedSmall:px-14 mbMedium:px-20">
        <div className="h-4 w-4 flex items-center justify-center gap-2.5">
          <Image src="/images/back.png" width={20} height={20} />
          <button className="">Back</button>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className=" w-4 h-4 mbXSmall:w-5 mbXSmall:h-5 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 laptop:w-4 laptop:h-4 inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/search.png"
                fill
                alt="about"
                className="object-contain"
              />
            </span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 border-[1.5px] border-[#DCDCE7] rounded-full py-2 px-4 w-[7rem] mbXSmall:w-[9rem] mbMedSmall:w-[11rem] mbSmall:w-[13rem] mbMedium:w-[16rem] laptop:w-[15rem] tbPortrait:w-[18rem] min-[1400px]:w-[20rem] tbLandscape:w-[24rem]"
          />
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row items-center laptop:items-start justify-end gap-10 laptop:gap-8 p-6 max-w-full w-screen mt-10">
        <div className="order-2 laptop:order-2 flex flex-col gap-6 items-center justify-center w-full mbXSmall:w-[90%] mbSmall:w-[80%] mbMedium:w-[65%] laptop:w-[45%] tbPortrait:w-[45%] tbLandscape:w-1/2">
          <Post />
          <Post />
          <Post />
          <Post />
          <CommunityList />
        </div>

        <div className=" order-1 laptop:order-2 flex items-center justify-center gap-3  w-full mbXSmall:w-[90%] mbSmall:w-[80%] mbMedium:w-[65%] laptop:w-[33%] tbPortrait:w-[30%]">
          <div className=" self-start ">
            <span className="w-10 h-10 mbMedSmall:w-12 mbMedSmall:h-12 mbSmall:w-12 mbSmall:h-12 mbMedium:w-14 mbMedium:h-14 laptop:w-12 laptop:h-12 inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/profile.png"
                fill
                alt="about"
                className="object-contain"
              />
            </span>
          </div>
          {isEditing ? (
            <div className="w-full flex flex-col items-start gap-3 transition-all ease-in-out">
              <textarea
                placeholder="Write a description..."
                className="border-[1.5px] border-[#DCDCE7] rounded-xl p-2 w-full h-[15rem] resize-none appearance-none"
              ></textarea>
              <input
                type="text"
                placeholder="Add up to 3 tags..."
                className="border-[1.5px] border-[#DCDCE7] rounded-xl p-2 w-full"
              />
              <label
                htmlFor="fileInput"
                className="flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="w-4 h-4 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-7 laptop:h-7 inline-block rounded-full relative cursor-pointer">
                  <Image
                    src="/images/media.png"
                    fill
                    alt="Media"
                    className="object-contain"
                  />
                </span>
                <h1 className="text-sm mbMedSmall:text-base">Media</h1>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onClick={handleFileInputChange}
                />
              </label>
              <button
                onClick={handleCancelClick}
                className="flex items-center justify-center gap-2 self-center"
              >
                <span className="w-4 h-4 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-7 laptop:h-7 inline-block rounded-full relative cursor-pointer">
                  <Image
                    src="/images/cancel.png"
                    fill
                    alt="Media"
                    className="object-contain"
                  />
                </span>
                <h1>Cancel</h1>
              </button>
            </div>
          ) : (
            <div className="transition-all w-full ease-in-out flex flex-col justify-center items-start gap-2">
              <input
                type="text"
                placeholder="Start a post"
                onClick={handleStartPostClick}
                className="border-[1.5px] border-[#DCDCE7] rounded-full w-full h-[3rem] p-4"
              />
              <label
                htmlFor="fileInput"
                className="flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="w-4 h-4 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-7 laptop:h-7 inline-block rounded-full relative cursor-pointer">
                  <Image
                    src="/images/media.png"
                    fill
                    alt="Media"
                    className="object-contain"
                  />
                </span>
                <h1 className="text-sm mbMedSmall:text-base">Media</h1>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onClick={handleFileInputChange}
                />
              </label>
            </div>
          )}
          {/* <input
                  type="text"
                  placeholder="Start a post"
                  className="border-[1.5px] border-[#DCDCE7] rounded-full w-[20rem] h-[3rem] p-4"
                /> */}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
