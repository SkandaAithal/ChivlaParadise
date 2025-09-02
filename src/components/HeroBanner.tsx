"use client";
import { motion } from "framer-motion";
import React from "react";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { CAROUSEL_IMAGES } from "@/lib/contants";
import { FloatingPaths } from "./FloatingPaths";
import SwiperComponent from "./SwiperComponent";
import Link from "next/link";
import { Palmtree, Info, BedDouble, Phone } from "lucide-react";

const HeroBanner = () => {
  const images = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];
  const initialSlideIndex = Math.floor(images.length / 2);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 min-h-screen overflow-hidden translate-y-20 md:translate-y-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="bg-gradient-to-tr from-yellow-200 via-yellow-50 via-50% to-white grid grid-cols-1 place-content-center gap-10 md:gap-14 layout !pt-28 !pb-20">
        <div className="flex justify-center flex-col items-center relative z-10">
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
                    className="inline-block text-[#009669] "
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="text-green-900 text-xl md:text-3xl font-semibold drop-shadow-lg">
            Scenic Comfort by the Malvan Coast
          </p>

          <div className="mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-7xl mx-auto px-2 lg:px-4">
              <Link
                href="#retreat"
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 lg:p-3 rounded-full mb-3 lg:mb-4">
                    <Palmtree className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-sm lg:text-base text-gray-800 mb-1">
                    Retreat
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    Find your perfect escape
                  </p>
                </div>
              </Link>

              <Link
                href="#about"
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 lg:p-3 rounded-full mb-3 lg:mb-4">
                    <Info className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-sm lg:text-base text-gray-800 mb-1">
                    About us
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    Learn our story
                  </p>
                </div>
              </Link>

              <Link
                href="#amenities"
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 lg:p-3 rounded-full mb-3 lg:mb-4">
                    <BedDouble className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-sm lg:text-base text-gray-800 mb-1">
                    Amenities
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    Explore our amenities
                  </p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-2 lg:p-3 rounded-full mb-3 lg:mb-4">
                    <Phone className="w-10 h-10 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-sm lg:text-base text-gray-800 mb-1">
                    Contact us
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    We'd love to help
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mask max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <SwiperComponent
              speed={600}
              centeredSlides={true}
              spaceBetween={20}
              loop={true}
              initialSlide={initialSlideIndex}
              observer
              observeParents
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
              }}
              modules={[Autoplay, EffectCoverflow]}
              breakpoints={{
                320: { slidesPerView: 1.2, spaceBetween: 10 },
                640: { slidesPerView: 1.3, spaceBetween: 15 },
                768: { slidesPerView: 1.8, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
              }}
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
                        className="h-80 w-full object-cover"
                        priority={index === initialSlideIndex}
                      />
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </SwiperComponent>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
