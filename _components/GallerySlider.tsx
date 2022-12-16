"use client";

import { useState } from "react";

import FsLightbox from "fslightbox-react";
import { Navigation, Pagination, A11y, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import Image from "next/image";

import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function GallerySlider() {
  const [activeIndex, setActiveIndex] = useState("01");
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };
  const slides = [
    {
      img: "/images/gallery/g1.png",
    },
    {
      img: "/images/gallery/g2.png",
    },
    {
      img: "/images/gallery/g3.png",
    },
    {
      img: "/images/gallery/g4.png",
    },
    {
      img: "/images/gallery/g5.png",
    },
    {
      img: "/images/gallery/g6.png",
    },
    {
      img: "/images/gallery/g7.png",
    },
    {
      img: "/images/gallery/g8.png",
    },
    {
      img: "/images/gallery/g9.png",
    },
    {
      img: "/images/gallery/g10.png",
    },
    {
      img: "/images/gallery/g11.png",
    },
    {
      img: "/images/gallery/g12.png",
    },
    {
      img: "/images/gallery/g13.png",
    },
  ];

  const slidesSrc = slides.map((slide) => slide.img);

  function padLeadingZeros(num: number): string {
    var s = num + "";
    while (s.length < 2) s = "0" + s;
    return s;
  }

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={slidesSrc}
        slide={lightboxController.slide}
      />
      <div className="gal_slider">
        <Swiper
          modules={[Navigation, Pagination, A11y, Scrollbar]}
          spaceBetween={15}
          slidesPerView={1.2}
          scrollbar={{ draggable: true }}
          onRealIndexChange={(element) => {
            setActiveIndex(padLeadingZeros(element.activeIndex + 1));
          }}
          breakpoints={{
            600: {
              slidesPerView: 2.2,
            },
            1024: {
              spaceBetween: 27,
              slidesPerView: 3.2,
            },
          }}
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="gal_slide"
                  onClick={() => openLightboxOnSlide(index + 1)}
                >
                  <Image src={slide.img} alt="" width={1000} height={285} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="slider_page">
          <div className="slider_pagenum">{activeIndex}</div>
        </div>
      </div>
    </>
  );
}
