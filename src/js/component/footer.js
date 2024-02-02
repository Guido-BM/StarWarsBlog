import React, { Component } from "react";
import { motion } from "framer-motion";

export const Footer = () => (
  <footer className="footer mb-0 py-3 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-warning mb-0">
        <small>
          &copy; 2024 Star Wars. All rights reserved. This is a fan-made website
          and is not affiliated with Lucasfilm Ltd.
        </small>
      </p>
    </motion.div>
  </footer>
);
