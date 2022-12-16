"use client";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

import frt1 from "../public/images/fortress/frt1.png";
import frt2 from "../public/images/fortress/frt2.png";
import frt1d from "../public/images/fortress/frt1d.png";
import frt2d from "../public/images/fortress/frt2d.png";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function FortressSlider() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="fortress_slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={15}
        slidesPerView={1.2}
        breakpoints={{
          // when window width is >= 640px
          500: {
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 27,
            slidesPerView: 1.2,
          },
        }}
      >
        <SwiperSlide>
          <div
            className="fortress_slide"
            style={{
              backgroundImage:
                width > 600
                  ? `url(${frt1d.src})`
                  : `url(${frt1.src})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="fortress_slide"
            style={{
              backgroundImage:
                width > 600
                  ? `url(${frt2d.src})`
                  : `url(${frt2.src})`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
