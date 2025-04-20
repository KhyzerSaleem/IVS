"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
const Tes = "/assets/Tes.jpg";
const Tes2 = "/assets/Tes2.jpg";
const Tes3 = "/assets/Tes3.jpg";

export default function OASComponent() {
  const [isClient, setIsClient] = useState(false);
  // Ambassador testimonial data
  const ambassadors = [
    {
      image: Tes, // Replace with actual image path
      quote:
        "Since I study International Hospitality (IHS), I really enjoy going to school. The teachers are very friendly and helpful. I am really sure that I made the right choice! This study offers me a lot of opportunities and the Engels part makes it much more challenging.",
      name: "Johan Sloesen",
      title: "Student International Hospitality",
      institution: "ROC",
    },
    {
      image: Tes2, // Replace with actual image path
      quote:
        "The education program here is exceptional. I've learned so much about international business practices and cultural differences in hospitality. The practical training opportunities have been invaluable for my career development.",
      name: "Emma Johnson",
      title: "Student International Business",
      institution: "ROC",
    },
    {
      image: Tes3, // Replace with actual image path
      quote:
        "Being part of this program has opened doors I never thought possible. The connections I've made and the hands-on experience in the field have prepared me well for my future career in international hospitality management.",
      name: "Miguel Rodriguez",
      title: "Student Hospitality Management",
      institution: "ROC",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-full bg-white py-12">
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-2xl font-bold mb-2 text-[#0c3458] px-4 md:px-8 lg:px-16"> Ambassadors</h2>
      <p className=" font-bold mb-12  px-4 md:px-8 lg:px-16">Don't take our word for it - here's what some of our students, alumni and teachers say: </p>
      
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          horizontalClass: 'swiper-pagination-horizontal',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="ambassador-swiper"
      >
        {ambassadors.map((ambassador, index) => (
          <SwiperSlide key={index}>
            <div className="px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
              {/* Ambassador Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden relative border-2 border-gray-200">
                  <Image 
                    src={ambassador.image}
                    alt={`Photo of ${ambassador.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              
              {/* Quote and Info */}
              <div className="flex-grow">
                <div className="relative">
                  {/* Quote mark */}
                  <div className="text-4xl font-serif text-gray-300 absolute -top-5 left-0">&ldquo;</div>
                  
                  {/* Quote text */}
                  <p className="text-base text-gray-700 pl-6 pr-4 leading-relaxed mb-4">
                    {ambassador.quote}
                  </p>
                  
                  {/* Ambassador name and title */}
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-1">{ambassador.name}</h3>
                    <p className="text-sm text-gray-600">{ambassador.title}</p>
                    <p className="text-sm text-gray-600">{ambassador.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    {/* Add global styles for pagination */}
    <style jsx global>{`
      .ambassador-swiper {
        padding-bottom: 40px;
      }
      .swiper-pagination {
        position: absolute;
        bottom: 0 !important;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 30;
      }
      .swiper-pagination-bullet {
        background: #0c3458;
        opacity: 0.5;
        margin: 0 3px;
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 50%;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
        background: #0c3458;
      }
    `}</style>
  </div>
  );
}
