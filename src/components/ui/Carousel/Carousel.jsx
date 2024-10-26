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
          {/* Aspect ratio box to prevent any stretching */}
          <div className="relative w-full max-w-[60rem] aspect-video overflow-hidden rounded-xl flex items-center justify-center">
            <Image
              src={item.url}
              alt="carousel image"
              layout="fill" // Fills the container without stretching
              className="object-cover" // Maintains aspect ratio within the box
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
