import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Projects } from "./utils/ProjectDB";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="lg:flex justify-center px-16">
      <Swiper
        
        breakpoints={{
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {Projects.map((item) => (
          <SwiperSlide key={item.title} className="px-2 py-12 absolute" style={{height: 400, width: 300}}
          >
            <div className="h-full flex flex-col justify-center items-center ">
              <div className="relative">
                <h3 className="text-lg sm:text-xl font-bold text-conone">{item.title}</h3>
                <p className="text-base py-4 pb-6">{item.description}</p>
                <div className="flex flex-wrap justify-center mb-4">
                  {item.skills.map((skill) => (
                    <span key={skill} className="inline-block bg-contwo text-primary font-bold text-sm px-4 py-1 mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

               <a href={item.link} className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center duration-300 opacity-0 hover:opacity-100 px-2" >
                <Image
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                  width={750}
                  height={750}
                /></a>
              </div>
         
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCard;
