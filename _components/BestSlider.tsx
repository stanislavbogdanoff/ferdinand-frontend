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

import best1 from "../../public/images/best/best1.svg";

export default function BestSlider() {
  const [activeIndex, setActiveIndex] = useState("01");
  const slides = [
    {
      id: 1,
      title: "Панорамные окна",
      text: "Панорамные окна с рамой из массива дерева следуют общей концепции применения природных материалов и подчеркивают высокий статус жилья.",
      img: "/images/best/best1.svg",
    },
    {
      id: 2,
      title: "Благородный вяз",
      text: "Металлокаркас, обшитый массивом благородного вяза, имеет парящую консольную конструкцию и делает монументально надежное сооружение невесомым и элегантным.",
      img: "/images/best/best1.svg",
    },
    {
      id: 3,
      title: "Поддержка температуры",
      text: "Производительные внутрипольные конвекторы стали частью здания и, оставаясь незаметными, поддерживают температуру, которая будет идеальна именно для Вас. Зимой и летом.",
      img: "/images/best/best1.svg",
    },
    {
      id: 4,
      title: "Теневой шов",
      text: "Реализация теневого шва на этапе возведения стен позволяет отказаться от применения плинтусов и галтелей и воплотить смелый дизайн, сочетающий лучшие черты современной и традиционной архитектуры.",
      img: "/images/best/best1.svg",
    },
    {
      id: 5,
      title: "Витражные окна",
      text: "Витражные окна высотой 7,3 метра выполнены из массива дерева и призваны наполнить гостинную светом, подчеркнув статус исключительным качеством исполнения, которое обеспечивает более 50 лет эксплуатации. ",
      img: "/images/best/best1.svg",
    },
  ];

  function padLeadingZeros(num: number): string {
    var s = num + "";
    while (s.length < 2) s = "0" + s;
    return s;
  }

  return (
    <div className="best_slider">
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
              <div className="best_slide">
                <div className="icon-btn transparent">
                  <Image src={slide.img} alt="" width={45} height={45} />
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
