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
      spaceBetween={8}
      loop
      autoplay={{ delay: 0 }}
      className="swiper-wrapper"
      allowTouchMove={false}
      slidesPerView={5}
      speed={3500}
    >
      {arr.map((item, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <a
            href="#"
            className="swiper-item cursor-pointer box-border flex bg-white justify-center items-center gap-2 w-fit border-black hover:border-[#1F3DD9] rounded-full shadow-md px-10 py-3 mx-3"
          >
            {item}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
