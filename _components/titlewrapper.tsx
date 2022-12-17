"use client";

import { motion } from "framer-motion";

export const TitleWrapper = ({
    children
}: {
    children: React.ReactNode
}) => (
    <motion.div
        key={1}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
            duration: 0.3
        }}
    >
        {children}
    </motion.div>
)