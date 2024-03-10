"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";
const Carousel = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      direction={"vertical"}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      className="mySwiper max-h-[25rem] m-0 rounded-xl"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center w-[20rem] h-[20rem] xs:w-[25rem] sm:w-[30rem] xs:h-[28rem] rounded-xl md:w-[38rem] md:h-[55rem]  lg:w-[50rem] lg:h-[65rem]  lg:max-h-[40rem] ">
            <Image fill src={item.url} alt="image" className="rounded-xl  " />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
