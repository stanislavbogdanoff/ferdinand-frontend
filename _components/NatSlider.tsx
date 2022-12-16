"use client";

import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

interface IfirstChildProps {
  updateStatus: () => void;
}

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

import nat1 from "../public/images/natural/nat1.png";
import nat2 from "../public/images/natural/nat2.png";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function NatSlider<IfirstChildProps>({ updateSlide }: any) {
  const { height, width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    updateSlide(activeIndex);
  }, [activeIndex, updateSlide]);

  return (
    <div
      className={
        width < 1024
          ? "granite_slider nat_slider lined lined-down dark"
          : "granite_slider nat_slider"
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
              backgroundImage: `url(${nat1.src})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="granite_slide"
            style={{
              backgroundImage: `url(${nat2.src})`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
