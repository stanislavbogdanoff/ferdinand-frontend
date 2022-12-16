"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import nat1 from "../public/images/natural/nat1.png";
import nat2 from "../public/images/natural/nat2.png";
import sec1 from "../public/images/natural/sec1.svg";
import sec2 from "../public/images/natural/sec2.svg";
import sec3 from "../public/images/natural/sec3.svg";
import sec4 from "../public/images/natural/sec4.svg";
import sec5 from "../public/images/natural/sec5.svg";
import { motion } from "framer-motion";
import NatSlider from "./NatSlider";
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

export default function Natural() {
  const { height, width } = useWindowDimensions();
  const [curSlide, setCurSlide] = useState<number>(1);

  const updateSlide = (num: number): void => {
    setCurSlide(num);
  };
  return (
    <section className="nat_section">
      <div className="container">
        <ContentWrapper>
          <div className="nat_wrapper wrapper ver">
            {width >= 1024 ? (
              <div className="granite_desk natural_desk">
                <NatSlider updateSlide={updateSlide} />
                <div className="granite_content nat_content">
                  <div className="body_title-box">
                    <div className="body_title">
                      <span>натуральный</span> <br /> гранит
                    </div>
                  </div>
                  <div className="nat_grid">
                    {curSlide === 1 ? (
                      <motion.div
                        key={Math.random() * 100}
                        initial={{ opacity: 0.5, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="nat_card"
                      >
                        <div className="nat_card-title">БЕЗОПАСНОСТЬ</div>
                        <div className="nat_card-text">
                          <p className="nat_card-p">
                            <Image src={sec1} alt="" /> Элементы системы “Умный
                            дом”.
                          </p>
                          <p className="nat_card-p">
                            <Image src={sec2} alt="" /> Обслуживающая компания.
                          </p>
                          <p className="nat_card-p">
                            <Image src={sec3} alt="" /> Интеллектуальная система
                            безопасности последнего поколения, каменные забор и
                            стены квартиры метровой толщины обеспечат,
                            соответствующий статусу жильцов.
                          </p>
                          <p className="nat_card-p">
                            <Image src={sec4} alt="" /> Автоматические откатные
                            и гаражные ворота объединены в единую систему
                            управления умным домом.
                          </p>
                          <p className="nat_card-p">
                            <Image src={sec5} alt="" /> Обслуживающая компания
                            возьмет на себя все бытовые заботы.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={Math.random() * 100}
                        initial={{ opacity: 0.5, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="nat_card"
                      >
                        <div className="nat_card-title">Инвестиции</div>
                        <div className="nat_card-text">
                          <p className="nat_card-p">
                            Срок службы премиального во всех смыслах жилья
                            выходит за рамки нашего поколения, делая комплекс
                            таунхаусов Ferdinand настоящим архитектурным
                            памятником современности, что закономерно
                            сказывается на ценообразовании объекта. <br />
                            Комплекс таунхаусов Ferdinand — это не только
                            предмет роскоши, но по-настоящему безопасная
                            инвестиция.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="granite_content nat_content">
                <div className="body_title-box lined lined-down dark">
                  <div className="body_title">
                    <span>натуральный</span> <br /> гранит
                  </div>
                </div>
                <div className="nat_grid">
                  <div className="nat_card">
                    <Image src={nat1} alt="" className="nat_card-img" />
                    <div className="nat_card-title">БЕЗОПАСНОСТЬ</div>
                    <div className="nat_card-text">
                      <p className="nat_card-p">
                        <Image src={sec1} alt="" /> Элементы системы “Умный
                        дом”.
                      </p>
                      <p className="nat_card-p">
                        <Image src={sec2} alt="" /> Обслуживающая компания.
                      </p>
                      <p className="nat_card-p">
                        <Image src={sec3} alt="" /> Интеллектуальная система
                        безопасности последнего поколения, каменные забор и
                        стены квартиры метровой толщины обеспечат,
                        соответствующий статусу жильцов.
                      </p>
                      <p className="nat_card-p">
                        <Image src={sec4} alt="" /> Автоматические откатные и
                        гаражные ворота объединены в единую систему управления
                        умным домом.
                      </p>
                      <p className="nat_card-p">
                        <Image src={sec5} alt="" /> Обслуживающая компания
                        возьмет на себя все бытовые заботы.
                      </p>
                    </div>
                  </div>
                  <div className="nat_card">
                    <Image src={nat2} alt="" className="nat_card-img" />
                    <div className="nat_card-title">Инвестиции</div>
                    <div className="nat_card-text">
                      <p className="nat_card-p">
                        Срок службы премиального во всех смыслах жилья выходит
                        за рамки нашего поколения, делая комплекс таунхаусов
                        Ferdinand настоящим архитектурным памятником
                        современности, что закономерно сказывается на
                        ценообразовании объекта. <br />
                        Комплекс таунхаусов Ferdinand — это не только предмет
                        роскоши, но по-настоящему безопасная инвестиция.
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
