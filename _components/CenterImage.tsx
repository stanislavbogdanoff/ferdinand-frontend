"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import blur from "../public/images/sections/hero_bg-d.png"

export default function CenterImage(props: any) {
  const [currentImg, setCurrentImg] = useState("");
  useEffect(() => {
    setCurrentImg(props.tab.img);
  }, [props.tab.img]);

  return (
    <motion.div
      key={props.tab.img}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3
      }}
      style={{ width: "100%" }}

    >
      <Image
        src={props.tab.img}
        alt=""
        width={1000}
        height={591}
        priority
      />
    </motion.div>
  );
}
