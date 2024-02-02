import React from "react";
import { motion } from "framer-motion";
import "./spinner.css";
import Typewriter from "typewriter-effect";

const Spinner = () => {
  return (
    <div className="loading-animation">
      <motion.div
        className="loading-circle"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <Typewriter
        options={{
          strings: ["Loading...", "Please wait..."],
          autoStart: true,
          loop: true,
        }}
      />
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
