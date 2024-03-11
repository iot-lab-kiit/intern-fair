import React from "react";
import Carousel from "@/components/ui/Carousel/Carousel";
import TitleCard from "@/components/ui/TitleCard";
import Image from "next/image";
const BTS = ({ align1, data }) => {
  return (
    <div className=" flex items-center justify-center  pb-10  overflow-hidden ">
      <div className="content flex  flex-col items-center mx-10 xl:ml-0 lg:items-end items-start xl:max-w-[120rem] lg: px-8 ">
        <div
          className={`flex flex-col  items-center gap-10 justify-center  tbPortrait:flex-row-reverse md:items-end max-h-[20rem] tbPortrait:items-start sm:max-h-none`}
        >
          <Carousel data={data.carousel2} />

          <TitleCard title={data.BTS.title}  img="/icons/bst.png" />
        </div>
        <div
          className={`flex ${align1} justify-center xl:gap-[0em] lg-[11rem] md:gap-4 mt-10 max-h-[12rem]`}
        >
          <div className="w-full text-center   md:text-left xl:w-[30rem] text-sm ">
            {data.BTS.description}
          </div>
          <div className="w-[40rem]  h-[50rem] relative tbPortrait:bottom-[100px]  bottom-[200px] z-20 hidden md:block">
            <Image
              src={data.BTS.fixedImg}
              width={450}
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
