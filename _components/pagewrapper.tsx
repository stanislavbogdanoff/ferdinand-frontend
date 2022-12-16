"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Loading from "../app/loading";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={loading ? "page loading" : "page"}>
          <motion.div>{children}</motion.div>
        </div>
      )}
    </>
  );
}
