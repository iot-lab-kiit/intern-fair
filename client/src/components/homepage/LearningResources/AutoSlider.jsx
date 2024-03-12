"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper";
import {Autoplay} from "swiper/modules";
SwiperCore.use([Autoplay]);

const Carousel = ({arr, speed, direction}) => {
    return (
        <>
            <Swiper freeMode={true} spaceBetween={10} loop autoplay={{delay: 0, reverseDirection: direction}} className="swiper-wrapper" allowTouchMove={false} slidesPerView={5} speed={speed}>
                {arr.map((item, i) => (
                    <SwiperSlide
                        key={i}
                        style={{flexShrink: 1}}
                        className="duration-300 px-10 my-2 text-center cursor-pointer border-[#1F3DD9]-2 border-2 hover:font-bold hover:border-[#1F3DD9] transition-all rounded-full swiper-text-clamp whitespace-nowrap mx-12 py-2 shrink">
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
