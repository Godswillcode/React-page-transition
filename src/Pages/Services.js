import React from "react";
import imageOne from "../images/1.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animation";

function Services() {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <div className="banner" style={{ backgroundImage: `url(${imageOne})` }}>
        <div className="banner-overlay d-flex justify-content-center align-items-center">
          <div className="wrap container text-white text-center">
            <h1>Services page</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
