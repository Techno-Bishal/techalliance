"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { id: 1, src: "/hero-image4.webp", alt: "image 4" },
  { id: 2, src: "/hero-image2.webp", alt: "image 2" },
  { id: 3, src: "/hero-image3.webp", alt: "image 3" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center items-start">
            <Image src={slide.src} alt={slide.alt} width={1600} height={900} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-5">
              <h1 className="text-4xl tracking-tighter w-full md:max-w-2xl md:text-6xl font-bold">Tech Alliance, Together <span className="text-purple-600">we grow</span></h1>
              <p className="mt-4 text-lg">Innovate. Integrate. Elevate. 🚀</p>
              <div className="mt-6 space-x-4">
                <button className="bg-purple-500 animate-bounce text-white cursor-pointer px-6 py-3 rounded">Read More</button>
                <button className="bg-white text-purple-600 animate-bounce cursor-pointer px-6 py-3 rounded">Join Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
