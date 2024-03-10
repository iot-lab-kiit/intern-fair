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
          <div className="flex flex-col items-center justify-center rounded-xl ">
            <Image width={500} height={650}
              src={item.url}
              alt="image"
              className="rounded-xl w-[50rem] h-[65rem]  max-h-[30rem] "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
