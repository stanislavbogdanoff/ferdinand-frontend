"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CenterImage(props: any) {
  const [currentImg, setCurrentImg] = useState("");
  useEffect(() => {
    setCurrentImg(props.tab.img);
  }, [props.tab.img]);

  return (
    <motion.div
      key={props.tab.img}
      initial={{ opacity: 0.1, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{
        duration: 0.3
      }}
    >
      <Image
        src={props.tab.img}
        alt=""
        width={1000}
        height={591}
      />
    </motion.div>
  );
}
