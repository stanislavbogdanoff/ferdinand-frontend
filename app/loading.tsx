"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading(props: any) {
  return (
    <>

      <div className="loading loader">
        <video width="700" autoPlay muted>
          <source src={"/images/ferdinand.mp4"} />
        </video>
      </div>


    </>
  );
}
