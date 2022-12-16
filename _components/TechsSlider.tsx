"use client";

import { useState } from "react";

import { Navigation, Pagination, A11y, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import Image from "next/image";

import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TechsSlider() {
  const [activeIndex, setActiveIndex] = useState("01");
  const slides = [
    {
      id: 1,
      title: "300 мм пенополистиролбетон",
      text: "ДОЛГОВЕЧНЫЙ И ЭФФЕКТИВНЫЙ КОМПОЗИТНЫЙ УТЕПЛИТЕЛЬ.",
      img: "/images/techs/techs1.svg",
    },
    {
      id: 2,
      title: "1,7 X ЭНЕРГОЭФФЕКТИВНЕЕ",
      text: "ПРИНЯТОЙ СТАНДАРТАМИ ТЕПЛОПРОВОДНОСТИ.",
      img: "/images/techs/techs2.svg",
    },
    {
      id: 3,
      title: "300 ММ ПЕНОПОЛИСТИРОЛБЕТОН",
      text: "ПРИНЯТОЙ СТАНДАРТАМИ ТЕПЛОПРОВОДНОСТИ.",
      img: "/images/techs/techs3.svg",
    },
    {
      id: 4,
      title: "АВТОНОМНОЕ ГАЗОВОЕ ОТОПЛЕНИЕ",
      text: "РЕЗЕРВНОЕ – ЭЛЕКТРИЧЕСКОЕ.",
      img: "/images/techs/techs4.svg",
    },
    {
      id: 5,
      title: "УСИЛЕННЫЕ МОНОЛИТНЫЕ ПЛИТЫ",
      text: "ВЫДЕРЖИВАЮТ НАГРУЗКУ В 11 РАЗ БОЛЬШЕ ОБЫЧНЫХ ПЛИТ.",
      img: "/images/techs/techs5.svg",
    },
    {
      id: 6,
      title: "ЧИСТКА ПЕСКОСТРУЙНЫМ АППАРАТОМ",
      text: "КАМЕННАЯ КЛАДКА - КАК ЭЛЕМЕНТ ФИНИШНОЙ ОТДЕЛКИ ВНУТРЕННИХ СТЕН.",
      img: "/images/techs/techs6.svg",
    },
    {
      id: 7,
      title: "МЕТАЛЛИЧЕСКИЕ ПАНЕЛИ",
      text: "0,7 ММ МЕТАЛЛИЧЕСКИЕ ПАНЕЛИ С УСИЛЕННЫМ КАРКАСОМ.",
      img: "/images/techs/techs7.svg",
    },
    {
      id: 8,
      title: "ЗЕРКАЛЬНЫЕ ЗАКАЛЕННЫЕ СТЕКЛА",
      text: "ДАДУТ ДОСТАТОЧНО СВЕТА И НЕПРОНИЦАЕМЫ ДЛЯ ВЗГЛЯДОВ.",
      img: "/images/techs/techs8.svg",
    },
    {
      id: 9,
      title: "ЦЕЛЬНЫЕ ГРАНИТНЫЕ ПЛИТЫ",
      text: "ВХОДНАЯ ЛЕСТНИЦА.",
      img: "/images/techs/techs9.svg",
    },
    {
      id: 10,
      title: "ТЕРМОМОДИФИЦИРОВАННАЯ БЕРЕЗА",
      text: "ПЛАНКЕН КОСОЙ 120X18 ММ.",
      img: "/images/techs/techs10.svg",
    },
  ];

  function padLeadingZeros(num: number): string {
    var s = num + "";
    while (s.length < 2) s = "0" + s;
    return s;
  }

  return (
    <div className="techs_slider">
      <Swiper
        modules={[Navigation, Pagination, A11y, Scrollbar]}
        spaceBetween={15}
        slidesPerView={1.2}
        scrollbar={{ draggable: true }}
        onRealIndexChange={(element) => {
          setActiveIndex(padLeadingZeros(element.activeIndex + 1));
        }}
        breakpoints={{
          500: {
            slidesPerView: 2.2,
          },
          1024: {
            spaceBetween: 27,
            slidesPerView: 3.2,
          },
        }}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="best_slide tech">
                <div className="icon-btn transparent">
                  <Image src={slide.img} alt="" width={35} height={35} />
                </div>
                <div className="best_slide-title">{slide.title}</div>
                <p>{slide.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="slider_page">
        <div className="slider_pagenum">{activeIndex}</div>
      </div>
    </div>
  );
}
