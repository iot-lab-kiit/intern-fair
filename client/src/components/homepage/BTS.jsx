import React from "react";
import Carousel from "@/components/ui/Carousel";
import TitleCard from "@/components/ui/TitleCard";
import Image from "next/image";
const BTS = ({ align1, data }) => {
  return (
    <div className=" flex items-center justify-center  overflow-hidden ">
      <div className="content flex  flex-col mx-10 xl:ml-40 lg:items-start xl:max-w-[120rem] lg: px-8 ">
        <div
          className={`flex items-center gap-10 justify-center md:flex-row-reverse md:items-start flex-col`}
        >
          <div>
            <Carousel data={data.carousel2} />
          </div>
          <TitleCard title={data.BTS.title} />
        </div>
        <div
          className={`flex ${align1} justify-center xl:gap-[10rem] lg-[11rem] md:gap-4 mt-10 max-h-[12rem]`}
        >
          <div className="w-full text-center   md:text-left xl:w-[30rem] text-sm ">
            {data.BTS.description}
          </div>
          <div className="w-fit h-[50rem] relative  bottom-[100px] z-20 hidden md:block">
            <Image
              src={data.BTS.fixedImg}
              width={400}
              height={500}
              alt="about"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTS;
