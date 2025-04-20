'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import Image from 'next/image';

export default function BPcomponent() {
  const [isClient, setIsClient] = useState(false);

  const dummyText = "IVS Alliance is dedicated to offering high-quality education and training programs, designed to prepare students for success in various fields. Our B.TEC programs are tailored to meet industry standards and equip students with the skills needed for a rewarding career.";

  const schools = [
    {
      name: "ROC Nova College",
      image: "/assets/NP.jpg", // Replace with actual image path
      description: "IVS Alliance collaborates with top institutions like ROC Nova College, ensuring students receive cutting-edge education in a variety of disciplines, preparing them for real-world challenges."
    },
    {
      name: "Zadkine",
      image: "/assets/NP.jpg", // Replace with actual image path
      description: "Zadkine offers a strong academic foundation in fields that are vital for future job markets, with courses designed to foster creativity, critical thinking, and practical skills."
    },
    {
      name: "ROC Friese Port",
      image: "/assets/NP.jpg", // Replace with actual image path
      description: "ROC Friese Port is committed to providing students with a comprehensive education in vocational studies, combining theoretical knowledge with hands-on experience."
    },
    {
      name: "ROC Friese Port",
      image: "/assets/NP.jpg", // Replace with actual image path
      description: "The partnership with ROC Friese Port helps IVS Alliance to deliver specialized programs in technical and professional development, ensuring students are ready for the workforce."
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-full bg-white py-6">
      
      <div className="container mx-auto px-4 mb-8">
        <p className="text-gray-500 uppercase text-sm font-medium text-center lg:text-start tracking-wider mb-2">
          OUR SCHOOLS
        </p>
        <h1 className="text-3xl font-bold mb-4">School Teaching <span className="inline-block text-3xl font-bold border-b-4 text-[#0c3458] pb-1">
          B.TEC Programs
        </span></h1>
        <p className="text-gray-600 mb-8">{dummyText}</p>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {schools.map((school, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src={school.image}
                  alt={school.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{school.name}</h2>
                  <p className="text-gray-600 mb-4">{school.description}</p>
                  <a href="#" className="text-black hover:underline">Read More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
