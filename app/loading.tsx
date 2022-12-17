"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading(props: any) {
  return (
    <>
      <AnimatePresence>

        {props.loading &&
          (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="loading"
              key={1}
            >
              <video width="700" autoPlay muted>
                <source src={"/images/ferdinand.mp4"} />
              </video>
            </motion.div>

          )
        }

      </AnimatePresence>
    </>
  );
}
