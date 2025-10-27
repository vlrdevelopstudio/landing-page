"use client"

import { motion, MotionProps } from "framer-motion"

export const RevealOnScroll: React.FC<
  MotionProps & { children: React.ReactNode }
> = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
