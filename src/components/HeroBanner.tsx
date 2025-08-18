"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SwiperComponent from "./SwiperComponent";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { CAROUSEL_IMAGES } from "@/lib/contants";
import { FloatingPaths } from "./FloatingPaths";

const HeroBanner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const images = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];
  const initialSlideIndex = Math.floor(images.length / 2);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 h-screen overflow-hidden translate-y-20 md:translate-y-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="min-h-screen bg-gradient-to-tr from-yellow-200 via-yellow-50 via-50% to-white grid grid-cols-1 place-content-center gap-10 px-4 md:px-8 lg:px-20">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-5xl lg:text-6xl drop-shadow-2xl font-semibold">
            {"Chivla Paradise".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-green-900"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="text-lg text-green-900">
            Scenic Comfort by the Malvan Coast.
          </p>
        </div>

        <div className="flex justify-center mask max-w-5xl mx-auto">
          {isMounted ? (
            <SwiperComponent
              speed={600}
              centeredSlides={true}
              spaceBetween={20}
              loop={true}
              initialSlide={initialSlideIndex}
              effect="coverflow"
              coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
                scale: 0.9,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                waitForTransition: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, EffectCoverflow]}
              breakpoints={{
                320: { slidesPerView: 1.2, spaceBetween: 10 },
                640: { slidesPerView: 1.3, spaceBetween: 15 },
                768: { slidesPerView: 1.8, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
              }}
              className="swiper-smooth fade-in"
              watchSlidesProgress={true}
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="grid place-content-center relative transition-all duration-700 ease-in-out"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="relative overflow-hidden rounded-2xl transition-all duration-300"
                    >
                      <Image
                        src={image}
                        alt="carousel image"
                        width={200}
                        height={200}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </SwiperComponent>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
