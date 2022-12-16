"use client";

import FortressSlider from "./FortressSlider";

import { useState, useEffect } from "react";
import { ContentWrapper } from "./contentwrapper";
import ModalBtn from "./ModalBtn";

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

export default function Fortress() {
  const { height, width } = useWindowDimensions();

  return (
    <section
      className="fortress_section dark_section white-bg-partial"
      id="about"
    >
      <div className="container">
        <ContentWrapper>
          {width <= 1024 ? (
            <div className="fortress_wrapper wrapper ver">
              <div className="body_title-box">
                <div className="body_title">
                  Ваша <br />
                  каменная крепость
                </div>
                <p>
                  Комплекс таунхаусов Ferdinand из натурального гранита – это
                  олицетворение идеи каменной крепости, расположенный в одном из
                  лучших районов Столицы.
                </p>
              </div>
              <FortressSlider />
              <ModalBtn />
            </div>
          ) : (
            <div className="fortress_content">
              <FortressSlider />
              <div className="fortress_wrapper wrapper ver">
                <div className="body_title-box">
                  <div className="body_title">
                    Ваша <br />
                    каменная <br />
                    крепость
                  </div>
                  <p>
                    Комплекс таунхаусов Ferdinand из натурального гранита – это
                    олицетворение идеи каменной крепости, расположенный в одном
                    из лучших районов Столицы.
                  </p>
                </div>
                <ModalBtn />
              </div>
            </div>
          )}
        </ContentWrapper>
      </div>
      <div className="white_bg"></div>
    </section>
  );
}
