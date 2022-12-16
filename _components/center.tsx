"use client";

import CenterImage from "./CenterImage";

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

export default function Center() {
  const { height, width } = useWindowDimensions();

  const tabs = [
    {
      id: 1,
      title: "В 5 минутах от делового центра",
      img: "/images/center/cnt1.png",
    },
    {
      id: 2,
      title: "Набережная Нура-Есиль",
      img: "/images/center/cnt2.png",
    },
    {
      id: 3,
      title: "Парковая зона",
      img: "/images/center/cnt3.png",
    },
    {
      id: 4,
      title: "Элитное соседство",
      img: "/images/center/cnt4.png",
    },
  ];
  const tabsd = [
    {
      id: 1,
      title: "В 5 минутах от делового центра",
      img: "/images/center/cnt1d.png",
    },
    {
      id: 2,
      title: "Набережная Нура-Есиль",
      img: "/images/center/cnt2d.png",
    },
    {
      id: 3,
      title: "Парковая зона",
      img: "/images/center/cnt3d.png",
    },
    {
      id: 4,
      title: "Элитное соседство",
      img: "/images/center/cnt2d.png",
    },
  ];
  const [currentTab, setCurrentTab] = useState(
    width >= 600 ? tabsd[0] : tabs[0]
  );
  return (
    <section className="center_section dark_section">
      <div className="container">
        <ContentWrapper>
          <div className="center_wrapper wrapper ver">
            <div className="body_title-box">
              <div className="body_title">
                <span>в центре</span> <br /> жизни города
              </div>
            </div>
            <div className="center_display wrapper">
              {width >= 600 ? (
                <div className="center_tabs">
                  {tabsd.map((tab, index) => {
                    return (
                      <button
                        className={
                          tab.id === currentTab.id
                            ? "tab-btn active"
                            : "tab-btn"
                        }
                        key={index}
                        onClick={() => setCurrentTab(tab)}
                      >
                        <span>0{tab.id}</span>
                        {tab.title}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="center_tabs">
                  {tabs.map((tab, index) => {
                    return (
                      <button
                        className={
                          tab.id === currentTab.id
                            ? "tab-btn active"
                            : "tab-btn"
                        }
                        key={index}
                        onClick={() => setCurrentTab(tab)}
                      >
                        <span>0{tab.id}</span>
                        {tab.title}
                      </button>
                    );
                  })}
                </div>
              )}
              <div className="center_img">
                <CenterImage tab={currentTab} />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}
