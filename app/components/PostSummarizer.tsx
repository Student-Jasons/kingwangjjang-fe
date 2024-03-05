'use client'
import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
interface props {
    boardUrl: string
}

export const PostSummarizer = ({boardUrl}: props) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handleIframeScroll = (e: React.WheelEvent<HTMLIFrameElement>) => {
    console.log(e);
      if (swiperRef) {
          const deltaY = e.deltaY;
          if (deltaY > 0) {
              swiperRef.slideNext();
          } else if (deltaY < 0) {
              swiperRef.slidePrev();
          }
      }
  };

  return (
    <Swiper
    onSwiper={setSwiperRef}
    className="w-full h-screen"
    direction={'vertical'}
    slidesPerView={1}
    spaceBetween={30}
    mousewheel={true}
    pagination={{
      clickable: true,
    }}
    modules={[Mousewheel, Pagination]}
    onInit={(swiper) => {
      setSwiperRef(swiper);
      console.log('Swiper initialized');
     }}
  >
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center">
      <iframe className='w-full h-screen border-none' src={boardUrl} onWheel={handleIframeScroll} />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center"> Slide 3</SwiperSlide>
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center"> Slide 4</SwiperSlide>
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center"> Slide 5</SwiperSlide>
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center"> Slide 6</SwiperSlide>
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center"> Slide 7</SwiperSlide>
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center"> Slide 8</SwiperSlide>
    <SwiperSlide className="swiper-slide text-center text-base bg-white flex justify-center items-center"> Slide 9</SwiperSlide>
  </Swiper>
  );
}
