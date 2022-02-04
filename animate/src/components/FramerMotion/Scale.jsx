import React from "react";
import { motion } from "framer-motion";

export default function Scale() {
  return (
    <motion.div
      style={{ backgroundColor: "royalblue", height: 100, width: 100 }}
      animate={{ scale: 2 }}
      transition={{ duration: 1.5 }}
    ></motion.div>
  );
}
