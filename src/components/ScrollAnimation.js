// components/ScrollAnimation.js
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimation({ children, delay = 0.2 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,    // Trigger when 20% visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
