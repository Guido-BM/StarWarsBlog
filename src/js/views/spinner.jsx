import React from "react";
import "./spinner.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Spinner = () => {
  const colors = ["#22238f", "#6b45fa", "#ca3286", "#fe2b49", "#fe652d"];
  const Loader = ({ count = 5 }) => {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={{ rotate: 360 }}
        style={{
          display: "flex",
          gap: 16,
          height: 100,
          alignItems: "center",
        }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        {Array(count)
          .fill(null)
          .map((_, index) => {
            return (
              <motion.div
                key={index}
                variants={dotVariants}
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: colors[index % colors.length],
                  borderRadius: 20,
                }}
              />
            );
          })}
      </motion.div>
    );
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    initial: {},
    animate: {
      height: [40, 100, 40],
      transition: {
        repeat: Infinity,
      },
    },
  };
  return (
    <div className="loading-animation">
      <motion.div
        className="loading-circle"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <Loader />
      <motion.div
        className="loading-bar"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Spinner;
