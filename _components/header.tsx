"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import logo from "../public/images/logo.svg";
import FixedLink from "./FixedLink";

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  if (typeof window !== "undefined")
    window.addEventListener("scroll", () => {
      let distanceToTop = window.pageYOffset;
      if (distanceToTop > 100) setIsTop(false);
      else setIsTop(true);
    });

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
      let lastScrollY = 0;
      if (typeof window !== "undefined") lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        let scrollY = 0;
        if (typeof window !== "undefined") scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      if (typeof window !== "undefined")
        window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        if (typeof window !== "undefined")
          window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1,
  });

  const [parentStatus, setParentStatus] = useState<boolean>(false);

  const updateStatus = (): void => {
    setParentStatus(!parentStatus);
  };

  return (
    <>
      <header
        className={`${isTop ? "" : "scrolled"} 
          ${scrollDirection === "down" ? "hide" : "show"}
          ${parentStatus ? "shown" : ""}`}
      >
        <div className="header_wrap">
          <div className="container">
            <div className="wrapper header_wrapper">
              <select name="Language" className="header_select">
                <option value="РУС">РУС</option>
                <option value="ENG">ENG</option>
              </select>
              <Image
                src={logo}
                width={170}
                alt="Ferdinand"
                className="header_logo"
              />
              <MobileMenu updateStatus={updateStatus} />
            </div>
          </div>
          <motion.div
            className={`progress-bar ${
              scrollDirection === "down" ? "hide-bar" : "show-bar"
            }`}
            style={{ scaleX }}
          />
        </div>
      </header>
      <FixedLink />
    </>
  );
}
