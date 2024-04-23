import React from "react";
import Image from "next/image";
const CommunityCard = () => {
  return (
    <div className="basis-[45%] p-6 px-10 flex flex-col items-center justify-center gap-2 border-[1.5px] border-[#DFE1E5] rounded-lg shadow-lg">
      <div className="">
        <span className="w-28 h-28 inline-block rounded-full relative cursor-pointer">
          <Image
            src="/images/community_1.png"
            fill
            alt="about"
            className="object-contain"
          />
        </span>
      </div>
      <h1 className="font-semibold text-sm laptop:text-base tbLandscape:text-lg">
        IOT lab
      </h1>
      <p className="text-[#696969] text-sm laptop:text-base tbLandscape:text-lg">
        Tech Related
      </p>
      <div className="bg-[#1F3DD9] rounded-xl px-5 p-2 text-sm laptop:text-base flex items-center justify-center gap-2 cursor-pointer text-white">
        <h1>Join Now</h1>
        <div className="">
          <span className=" w-2.5 h-2.5 laptop:w-3 laptop:h-3 inline-block rounded-full relative cursor-pointer">
            <Image
              src="/images/JoinNow.png"
              fill
              alt="about"
              className="object-cover"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
