"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";
import "./style.css";
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
      className="mySwiper max-h-[30rem] m-0 rounded-xl"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center w-[15rem] mbMini:w-[18rem] h-[20rem] mbXSmall:w-[22rem] sm:w-[40rem]  rounded-xl md:w-[46rem]   tbPortait:w-[55rem] xl:w-[60rem] lg:h-[65rem]  lg:max-h-[40rem] ">
            <Image
              fill
              src={item.url}
              alt="image"
              className="rounded-xl object-center"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
