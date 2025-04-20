"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [swiperHeight, setSwiperHeight] = useState(0);
  
  // State for content from localStorage
  const [content, setContent] = useState({
    mainTitle: "Tweetalig Onderwijs",
    secondaryTitle: "IVS Alliance",
    tagline: "Education is the best most powerful weapon we can use to change the world.",
    buttonText1: "FOR TEACHERS",
    buttonText2: "FOR STUDENTS"
  });
  const [sliderImages, setSliderImages] = useState([
    "/assets/M1.jpg", 
    "/assets/M2.jpg", 
    "/assets/M3.jpg"
  ]);

  useEffect(() => {
    setIsClient(true);

    // Load content from localStorage
    const storedTextContent = localStorage.getItem("hero-text-content");
    if (storedTextContent) {
      setContent(JSON.parse(storedTextContent));
    }
    
    const storedSliderImages = localStorage.getItem("hero-slider-images");
    if (storedSliderImages) {
      // Extract paths from the stored image objects, prioritizing dataUrl if available
      const imagePaths = JSON.parse(storedSliderImages).map(img => 
        img.dataUrl ? img.dataUrl : img.path
      );
      setSliderImages(imagePaths);
    }

    // Calculate swiper height by subtracting header height from viewport height
    const calculateHeight = () => {
      const headerElement = document.querySelector("header");
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        const windowHeight = window.innerHeight;
        setSwiperHeight(windowHeight - headerHeight);
      } else {
        // Fallback if header element is not found
        setSwiperHeight(window.innerHeight);
      }
    };

    // Initial calculation
    calculateHeight();

    // Recalculate on resize and orientation change
    window.addEventListener("resize", calculateHeight);
    window.addEventListener("orientationchange", calculateHeight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", calculateHeight);
      window.removeEventListener("orientationchange", calculateHeight);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: swiperHeight
          ? `${swiperHeight}px`
          : "calc(100vh - var(--header-height))",
      }}
    >
      {/* Background Swiper */}
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          horizontalClass: "swiper-pagination-horizontal",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full pagination-visible"
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#aaa",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              {image.startsWith('data:') ? (
                // For data URLs, use regular img tag with proper styling
                <img
                  src={image}
                  alt={`Slider image ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                // For server paths, use Next.js Image
                <Image
                  src={image}
                  alt={`Slider image ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* White Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-[#cfd5d3]/80 z-10"></div>

      {/* Content Overlay - Centered and Responsive */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            <span className="text-white">{content.mainTitle}</span>
            <br/><br className="lg:hidden" />
            <span className="text-[#0c3458]">{content.secondaryTitle}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold py-4 sm:py-6 md:py-8 lg:py-6">
            {content.tagline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button className="bg-[#0c3458] text-sm text-white items-center px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
              {content.buttonText1}
              <span className="text-sm ps-[2px] font-bold">&gt;</span>
            </button>
            <button className="bg-[#0c3458] text-sm text-white items-center px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
              {content.buttonText2} <span className="text-sm ps-[2px] font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination styles */}
      <style jsx global>{`
        .pagination-visible .swiper-pagination {
          position: absolute !important;
          bottom: 10px !important;
          left: 0 !important;
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          z-index: 30 !important;
        }
        @media (min-width: 640px) {
          .pagination-visible .swiper-pagination {
            bottom: 20px !important;
          }
        }
        .swiper-pagination-bullet {
          background: black !important;
          opacity: 100 !important;
          margin: 0 4px !important;
          width: 10px !important;
          height: 10px !important;
          display: inline-block !important;
          border-radius: 50% !important;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 16px !important;
            height: 16px !important;
          }
        }
        .swiper-pagination-bullet-active {
          opacity: 100 !important;
          background: white !important;
        }
      `}</style>
    </div>
  );
}