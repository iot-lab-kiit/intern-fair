"use client";

import React from "react";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import SwiperCore, {Autoplay} from "swiper";

SwiperCore.use([Autoplay]);

const Carousel = ({arr, speed}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % arr.length);
        }, speed);

        return () => clearInterval(interval);
    }, [arr, speed]);

    return (
        <Swiper spaceBetween={1} slidesPerView="auto" loop autoplay={{delay: speed}} className="swiper-container">
            {arr.map((item, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                    <a
                        href="#"
                        className={`swiper-item cursor-pointer box-border flex justify-center items-center gap-2 bg-white border-black hover:border-[#1F3DD9] rounded-full shadow-md px-10 py-3 mx-3 ${
                            index === i ? "active" : ""
                        }`}>
                        {item}
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
