"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "./style.css";
SwiperCore.use([Autoplay]);

const Carousel = ({ arr, speed }) => {
  return (
    <Swiper
      freeMode={true}
      spaceBetween={10}
      loop
      autoplay={{ delay: 0 }}
      className="swiper-wrapper"
      allowTouchMove={false}
      slidesPerView={4}
      speed={3500}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        },
        1700: {
          slidesPerView: 6,
        },
      }}
    >
      {arr.map((item, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <a
            href="#"
            className="swiper-item my-4 cursor-pointer box-border flex justify-center items-center gap-2 border-[#EEEEEE] hover:border-[#1F3DD9] hover:border-2 transition-all duration-100 rounded-full shadow-md border-[1px] px-2 py-3 mx-2 text-xs mbSmall:text-sm laptop:text-base w-full max-w-[16rem]"
          >
            {item}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
