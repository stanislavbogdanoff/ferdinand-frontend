
"use client";

import { motion } from "framer-motion";

export const ContentWrapper = ({
    children
}: {
    children: React.ReactNode
}) => (
    <motion.div
        initial={{ opacity: 0, y: 110 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        style={{ width: "100%" }}
    >
        {children}
    </motion.div>
)