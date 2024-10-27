import React from "react";
import Carousel from "@/components/ui/Carousel/Carousel";
import TitleCard from "@/components/ui/TitleCard";
import Image from "next/image";

const BTS = ({ align1, data }) => {
  return (
    <div className="w-full py-16 bg-white" id="bts">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* First section - Interchanging Carousel and Title */}
        <div className="flex flex-col tbPortrait:flex-row gap-12 items-start">
          {/* TitleCard positioned before Carousel */}
          <div className="w-full tbPortrait:w-1/3">
            <TitleCard title={data.BTS.title} img="/icons/bst.png" />
          </div>

          {/* Carousel with updated styling to prevent stretching */}
          <div className="w-full tbPortrait:w-3/3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Carousel
                data={data.carousel2}
                className="h-full w-full object-cover" // Keep image within container
                style={{ objectFit: "cover" }} // Ensures image covers container without stretching
              />
            </div>
          </div>
        </div>

        {/* Second section - Description and Fixed Image */}
        <div className="mt-12 flex flex-col md:flex-row-reverse justify-between gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-base text-gray-900 leading-relaxed">
              {data.BTS.description}
            </p>
          </div>
          <div className="hidden md:block w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={data.BTS.fixedImg}
                alt="behind the scenes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTS;
