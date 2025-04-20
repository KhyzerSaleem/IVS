'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function HCScomponent() {
  const [isClient, setIsClient] = useState(false);

  // Testimonial data
  const testimonials = [
    {
      quote: "Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.",
      author: "Andrew Carnegie"
    },
    {
      quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      author: "Malcolm X"
    },
    {
      quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
      author: "Martin Luther King Jr."
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-full  ">
      {/* Grid pattern background - exact match to design */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-100">
  <Image
    src="/assets/B.png"
    alt="Background"
    fill
    className="object-cover z-10"
    priority
  />
</div>

    
      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="w-full mx-auto">
          <h2 className="text-2xl px-16 font-bold mb-8 lg:text-start text-center">Our Happy Members</h2>

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
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="px-8 md:px-16">
                  <div className="relative">
                    {/* Exact quote mark positioning */}
                    <div className=" font-serif text-[#0c3458]  text-6xl absolute top-0 left-0 z-20 ">&ldquo;</div>

                    {/* Quote text with exact spacing */}
                    <p className="text-lg text-gray-700 pl-10 pr-4 leading-relaxed mb-10">
                      {testimonial.quote}
                    </p>

                    {/* Author name with exact positioning and red underline */}
                    <div className="text-right pr-4">
                      <span className="inline-block text-xl font-medium border-b-2 text-[#0c3458] pb-1">
                        {testimonial.author}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Add global styles for pagination to match design exactly */}
      <style jsx global>{`
        .testimonial-swiper {
          padding-bottom: 50px;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 10px !important;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 30;
        }
        .swiper-pagination-bullet {
          background: #999;
          opacity: 0.5;
          margin: 0 3px;
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #333;
        }
      `}</style>
    </div>
  );
}