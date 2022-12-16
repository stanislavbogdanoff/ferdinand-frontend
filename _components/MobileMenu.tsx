"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface IfirstChildProps {
  updateStatus: () => void;
}

export default function MobileMenu<IfirstChildProps>({ updateStatus }: any) {
  const [mobMenuActive, setMobMenuActive] = useState(false);
  const [isTop, setIsTop] = useState(true);
  if (typeof window !== "undefined")
    window.addEventListener("scroll", () => {
      let distanceToTop = window.pageYOffset;
      if (distanceToTop > 15) setIsTop(false);
      else setIsTop(true);
    });

  return (
    <>
      <button
        className={!mobMenuActive ? "menu-btn" : "menu-btn active"}
        onClick={() => {
          setMobMenuActive(!mobMenuActive);
          updateStatus();
        }}
      ></button>
      <div className={mobMenuActive ? "navmob active" : "navmob"}>
        <ul className="navmob_ul">
          <li>
            <a
              href="#about"
              className="anim-link white"
              onClick={() => {
                setMobMenuActive(!mobMenuActive);
                updateStatus();
              }}
            >
              О проекте
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="anim-link white"
              onClick={() => {
                setMobMenuActive(!mobMenuActive);
                updateStatus();
              }}
            >
              особенности
            </a>
          </li>
          <li>
            <a
              href="#location"
              className="anim-link white"
              onClick={() => {
                setMobMenuActive(!mobMenuActive);
                updateStatus();
              }}
            >
              расположение
            </a>
          </li>
          <li>
            <a
              href="#prices"
              className="anim-link white"
              onClick={() => {
                setMobMenuActive(!mobMenuActive);
                updateStatus();
              }}
            >
              планировки и цены
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="anim-link white"
              onClick={() => {
                setMobMenuActive(!mobMenuActive);
                updateStatus();
              }}
            >
              галерея
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="anim-link white"
              onClick={() => {
                setMobMenuActive(!mobMenuActive);
                updateStatus();
              }}
            >
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
