"use client";

import Image from "next/image";
import arrow from "../public/images/icons/arrow.svg";
import line from "../public/images/icons/line.svg";

import { useState, useEffect } from "react";
import { ContentWrapper } from "./contentwrapper";

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
    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Hero() {
  const { height, width } = useWindowDimensions();
  return (
    <section className="hero_section">
      <div className="container">
        <ContentWrapper>
          {width <= 600 ? (
            <div className="hero_content">
              <div className="hero_title">
                <span>КОМПЛЕКС ТАУНХАУСОВ </span> <br /> ИЗ НАТУРАЛЬНОГО ГРАНИТА
                В ЭЛИТНОМ РАЙОНЕ АСТАНЫ
              </div>
              <button className="primary-btn">1 200 000 тг/м2.</button>
              <Image src={line} alt="" className="line" />
              <div className="hero_subtitle">ЕДИНСТВЕННЫЙ В СВОЕМ РОДЕ</div>
            </div>
          ) : (
            <div className="hero_content">
              <div className="hero_title">
                ЕДИНСТВЕННЫЙ <br /> <span>В СВОЕМ РОДЕ</span>
              </div>
              <Image src={line} alt="" className="line" />
              <p className="hero_subtitle">
                Комплекс таунхаусов из натурального камня в элитном районе
                Астаны
              </p>
            </div>
          )}
        </ContentWrapper>
        <a href="#next" className="scroll-btn">
          <div>
            <Image src={arrow} alt={""} className="arrow bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
