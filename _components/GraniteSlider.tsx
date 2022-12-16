"use client";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

import grn1 from "../public/images/granite/grn1.png";
import grn2 from "../public/images/granite/grn2.png";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function GraniteSlider<IfirstChildProps>({ updateSlide }: any) {
  const { height, width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    updateSlide(activeIndex);
  }, [activeIndex, updateSlide]);

  return (
    <div
      className={
        width < 1024 ? "granite_slider lined lined-down dark" : "granite_slider"
      }
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={15}
        slidesPerView={1.2}
        onRealIndexChange={(element) => {
          setActiveIndex(element.activeIndex + 1);
        }}
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
            className="granite_slide"
            style={{
              backgroundImage: `url(${grn1.src})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="granite_slide"
            style={{
              backgroundImage: `url(${grn2.src})`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
