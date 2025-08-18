"use client";
import { motion } from "framer-motion";
import React from "react";
import SwiperComponent from "./SwiperComponent";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { CAROUSEL_IMAGES } from "@/lib/contants";
import { FloatingPaths } from "./FloatingPaths";
import { ChevronDown } from "lucide-react";

const HeroBanner = () => {
  const images = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];
  const initialSlideIndex = Math.floor(images.length / 2);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 min-h-screen overflow-hidden translate-y-20 md:translate-y-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="min-h-screen bg-gradient-to-tr from-yellow-200 via-yellow-50 via-50% to-white grid grid-cols-1 place-content-center gap-10 md:gap-14 layout">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-5xl lg:text-6xl drop-shadow-2xl font-semibold text-center">
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
                    className="inline-block text-[#009f70] "
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="text-green-900 text-xl md:text-3xl font-semibold drop-shadow-lg">
            Scenic Comfort by the Malvan Coast.
          </p>
        </div>

        <div className="flex justify-center w-full mask max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="w-full"
          >
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
          </motion.div>
        </div>
        <div
          className="flex mx-auto justify-center items-center p-2 animate-bounce bg-white/20 w-fit rounded-full cursor-pointer"
          onClick={() => {
            document
              .getElementById("spaces")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className="h-6 w-6 text-yellow-800" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
