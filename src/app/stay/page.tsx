"use client";

import { FloatingPaths } from "@/components/FloatingPaths";
import React from "react";
import Image from "next/image";
import SwiperComponent from "@/components/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { PROPERTY_IMAGES } from "@/lib/contants";
import { Button } from "@/components/ui/button";
import { Autoplay } from "swiper/modules";
const StayPage = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const swiperRef = React.useRef<SwiperType | null>(null);
  const images = React.useMemo(
    () => [
      ...PROPERTY_IMAGES,
      "/restaurant/restaurant-1.jpg",
      "/restaurant/restaurant-2.jpg",
    ],
    []
  );
  const visibleIndices = React.useMemo(() => {
    const total = images.length;
    if (total <= 5) return images.map((_, i) => i);
    const offsets = [-2, -1, 0, 1, 2];
    return offsets.map((offset) => (activeIndex + offset + total) % total);
  }, [activeIndex, images.length]);

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden translate-y-20 md:translate-y-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-4} />
      </div>
      <div className="bg-gradient-to-bl from-yellow-200 via-yellow-50 via-50% to-white min-h-screen layout !pt-28">
        <h1 className="font-semibold text-4xl lg:text-5xl bg-gradient-to-r from-green-900  to-[#009669] bg-clip-text text-transparent drop-shadow-2xl mb-6 w-fit mx-auto text-center translate-y-5">
          Stay at Chivla Paradise
        </h1>

        <div className="max-w-5xl mx-auto w-full !pt-8">
          <div className="relative">
            <SwiperComponent
              slidesPerView={1.3}
              spaceBetween={20}
              centeredSlides
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                waitForTransition: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1.1, spaceBetween: 10 },
                640: { slidesPerView: 1.1, spaceBetween: 15 },
                768: { slidesPerView: 1.3, spaceBetween: 20 },
              }}
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setActiveIndex(
                  (swiper as SwiperType).realIndex ?? swiper.activeIndex ?? 0
                );
              }}
              onSlideChange={(swiper) =>
                setActiveIndex(
                  (swiper as SwiperType).realIndex ?? swiper.activeIndex
                )
              }
              className="mask"
            >
              {images.map((src) => (
                <SwiperSlide key={src}>
                  <div className="relative w-full h-[500px] sm:h-[460px] md:h-[420px]">
                    <Image
                      src={src}
                      alt="Property image"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>

          <div className="p-4 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden mask">
            {visibleIndices.map((idx) => {
              const img = images[idx];
              const isActive = idx === activeIndex;
              return (
                <Button
                  variant={"outline"}
                  key={`${img}-${idx}`}
                  aria-label={`Go to image ${idx + 1}`}
                  aria-selected={isActive}
                  onClick={() => swiperRef.current?.slideToLoop?.(idx)}
                  className={`group relative w-20 h-20 sm:w-28 md:h-24 md:w-32 rounded-lg overflow-hidden ring-2 transition focus:outline-none focus-visible:ring-[#009669]/70 ${
                    isActive
                      ? "ring-[#009669]"
                      : "ring-transparent hover:ring-[#009669]/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt="Thumbnail"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StayPage;
