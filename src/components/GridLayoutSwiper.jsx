"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function GridCarouselComponent() {
  const [isClient, setIsClient] = useState(false);
  const slides = [1, 2, 3];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-full py-6">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-100">
        <Image
          src="/assets/B.png"
          alt="Background"
          fill
          className="object-cover z-10"
          priority
        />
      </div>

      {/* Title */}
      <div className="relative container mx-auto px-4 mb-4 z-10">
        <h2 className="text-3xl lg:py-8 md:py-4 py-2 font-bold">
          News from IVS Alliance
        </h2>
        <p className="text-md text-white">
          Stay up to date with student success stories, our partner schools’ achievements,
          and the latest updates from IVS Alliance educational programs.
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="grid-swiper"
        >
          {slides.map((slideNum, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-1 gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map((index) => (
                    <div key={`row1-${index}`} className="flex flex-col">
                      <div className="bg-[#ecf4f6] rounded-t-md p-3 border border-gray-200 border-b-0">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            BTEC Graduation Ceremony Highlights | {index + 1}
                          </p>
                          <p className="text-xs text-gray-400">
                            A snapshot from our recent BTEC program graduation event in Amsterdam.
                          </p>
                        </div>
                      </div>

                      <div className="text-white overflow-hidden relative p-4 h-64 flex flex-col justify-between">
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src="/assets/NP.jpg"
                            alt="Card Background"
                            fill
                            objectFit="cover"
                            className="opacity-90"
                          />
                        </div>
                      </div>

                      <div className="bg-[#ecf4f6] rounded-b-md border border-gray-200 p-3 flex justify-between items-center">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            Discover career paths with IVS | ivs-alliance.org
                          </p>
                          <p className="text-xs text-gray-400">
                            Read how our BTEC students are shaping their futures across Europe.
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          
                          <button className="text-xs whitespace-nowrap bg-[#ecf4f6] text-gray-800 shadow-md bg-opacity-10 hover:bg-opacity-30 px-2 py-1 rounded transition">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map((index) => (
                    <div key={`row2-${index}`} className="flex flex-col">
                      <div className="bg-[#ecf4f6] rounded-t-md p-3 border border-gray-200 border-b-0">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            Partner School Spotlight | {index + 4}
                          </p>
                          <p className="text-xs text-gray-400">
                            Meet our featured school of the month and their BTEC achievements.
                          </p>
                        </div>
                      </div>

                      <div className="text-white overflow-hidden relative p-4 h-64 flex flex-col justify-between">
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src="/assets/NP.jpg"
                            alt="Card Background"
                            fill
                            objectFit="cover"
                            className="opacity-90"
                          />
                        </div>
                      </div>

                      <div className="bg-white rounded-b-md border border-gray-200 p-3 flex justify-between items-center">
                        <div className="text-left">
                          <p className="text-xs text-gray-600 mb-0.5">
                            Real stories, real success | ivs-alliance.org
                          </p>
                          <p className="text-xs text-gray-400">
                            Discover how our programs are empowering learners globally.
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <button className="text-xs whitespace-nowrap bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded transition">
                            Learn More
                          </button>
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </div>
  );
}
