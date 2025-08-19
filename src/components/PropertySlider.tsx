"use client";

import React from "react";
import SwiperComponent from "./SwiperComponent";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

interface PropertySliderProps {
  direction?: "left" | "right";
  images: string[];
}

const PropertySlider: React.FC<PropertySliderProps> = ({
  direction = "left",
  images,
}) => {
  return (
    <SwiperComponent
      speed={1000}
      spaceBetween={0}
      loop={true}
      direction="horizontal"
      slidesPerGroup={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
        reverseDirection: direction === "right",
      }}
      breakpoints={{
        320: { slidesPerView: 1.2 },
        640: { slidesPerView: 1.3 },
        768: { slidesPerView: 1.8 },
        1024: { slidesPerView: 2 },
      }}
      modules={[Autoplay]}
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide
            key={index}
            className="grid place-content-center relative transition-all duration-700 ease-in-out"
          >
            <Image
              src={image}
              alt="property image"
              width={400}
              height={400}
              priority
              className="h-80 w-full object-cover"
            />
          </SwiperSlide>
        );
      })}
    </SwiperComponent>
  );
};

export default PropertySlider;
