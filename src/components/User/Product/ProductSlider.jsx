import React, { useState } from "react";
import { serverUrl } from "../../../API/API";
import { motion, useDragControls } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const ProductSlider = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useDragControls();

  if (!product || !product.images || product.images.length === 0) {
    return null;
  }

  const handleDragStart = (e, info) => {
    controls.start(info);
  };

  const handleDragEnd = (e, info) => {
    const distance = info.point.y - info.point.yStart;
    const threshold = window.innerHeight * 0.2; // Set the threshold for swipe
    if (distance > threshold) {
      setActiveIndex(Math.max(0, activeIndex - 1)); // Swipe up to previous image
    } else if (distance < -threshold) {
      setActiveIndex(Math.min(product.images.length - 1, activeIndex + 1)); // Swipe down to next image
    }
  };

  const goToPrevious = () => {
    setActiveIndex(Math.max(0, activeIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex(Math.min(product.images.length - 1, activeIndex + 1));
  };

  return (
    <div className="product-slider d-flex flex-column flex-md-row align-items-center col-12 col-lg-7 justify-content-start">
      <motion.div
        className="product-slider-imgs d-flex flex-row flex-md-column justify-content-between mb-5 mb-md-0 col-12 col-md-4"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.8}
        dragControls={controls}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {product.images.map((img, index) => (
          <motion.div
            key={index}
            className="bg-light rounded mb-md-4 col-4"
            drag="y" // Enable vertical dragging
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.8}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveIndex(index)} // Handle image click
          >
            <img src={`${serverUrl}/${img}`} alt="" className="rounded" />
          </motion.div>
        ))}
      </motion.div>
      <div className="product-slider-mainImg bg-light rounded h-100 d-flex justify-content-center align-items-center col-12 col-md-7 position-relative">
        <motion.img
          src={`${serverUrl}/${product.images[activeIndex]}`}
          alt=""
          className="rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="slider-buttons ">
          <button
            className="btn prev-btn cursor-pointer"
            onClick={goToPrevious}
            disabled={activeIndex === 0}
          >
            <FaArrowLeft className="fs-3" />
          </button>
          <button
            className="btn next-btn cursor-pointer"
            onClick={goToNext}
            disabled={activeIndex === product.images.length - 1}
          >
            <FaArrowRight className="fs-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
