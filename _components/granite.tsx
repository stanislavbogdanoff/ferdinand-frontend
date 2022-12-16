"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

import granite1 from "../public/images/granite/grn1.png";
import granite2 from "../public/images/granite/grn2.png";
import { ContentWrapper } from "./contentwrapper";
import GraniteSlider from "./GraniteSlider";

export default function Granite() {
  const { height, width } = useWindowDimensions();
  const [curSlide, setCurSlide] = useState<number>(1);

  const updateSlide = (num: number): void => {
    setCurSlide(num);
  };

  return (
    <section className="granite_section">
      <div className="container">
        <ContentWrapper>
          <div className="granit_wrapper wrapper ver">
            {width >= 924 ? (
              <div className="granite_desk">
                <GraniteSlider updateSlide={updateSlide} />
                <div className="granite_content">
                  <div className="body_title-box">
                    <div className="body_title">
                      <span>натуральный</span> <br /> гранит
                    </div>
                  </div>
                  <div className="granite_grid">
                    {curSlide === 1 ? (
                      <motion.div
                        key={Math.random() * 100}
                        initial={{ opacity: 0.5, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="granite_card"
                      >
                        <div className="granite_card-content">
                          <div className="granite_card-title">
                            Долговечный материал
                          </div>
                          <p>
                            Гранит был создан природой миллионы лет назад и
                            является самым долговечным материалом строительства,
                            известным человечеству.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={Math.random() * 100}
                        initial={{ opacity: 0.5, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="granite_card"
                      >
                        <div className="granite_card-content">
                          <div className="granite_card-title">ручной труд</div>
                          <p>
                            Десятки тысяч человеко-часов тяжелого ручного труда
                            воплотились в стенах комплекса таунхаусов Ferdinand.
                            Каждый камень комплекса Ferdinand неповторим и
                            обрабатывается вручную, как это делали мастера сотни
                            лет назад. <br />
                            Стальные нструменты стачиваются и становятся
                            расходным материалом в руках лучших каменщиков,
                            одержимых общей идеей создать настоящий
                            архитектурный памятник, который пройдет сквозь
                            время.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="granite_content">
                <div className="body_title-box lined lined-down dark">
                  <div className="body_title">
                    <span>натуральный</span> <br /> гранит
                  </div>
                </div>
                <div className="granite_grid">
                  <div className="granite_card">
                    <Image src={granite1} alt="" className="granite_card-img" />
                    <div className="granite_card-content">
                      <div className="granite_card-title">
                        Долговечный материал
                      </div>
                      <p>
                        Гранит был создан природой миллионы лет назад и является
                        самым долговечным материалом строительства, известным
                        человечеству.
                      </p>
                    </div>
                  </div>
                  <div className="granite_card">
                    <Image src={granite2} alt="" className="granite_card-img" />
                    <div className="granite_card-content">
                      <div className="granite_card-title">ручной труд</div>
                      <p>
                        Десятки тысяч человеко-часов тяжелого ручного труда
                        воплотились в стенах комплекса таунхаусов Ferdinand.
                        Каждый камень комплекса Ferdinand неповторим и
                        обрабатывается вручную, как это делали мастера сотни лет
                        назад. <br />
                        Стальные нструменты стачиваются и становятся расходным
                        материалом в руках лучших каменщиков, одержимых общей
                        идеей создать настоящий архитектурный памятник, который
                        пройдет сквозь время.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
