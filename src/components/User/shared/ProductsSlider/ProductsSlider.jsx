import React, { useEffect, useRef, useState } from "react";
import Card from "../../../Shared/Card";
import "./styles/ProductsSlider.css";

import { motion, AnimatePresence } from "framer-motion";

const ProductsSlider = ({ products, currentSlideIndex }) => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const newWidth =
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
        setWidth(newWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [products]);

  return (
    <motion.div className="carousel">
      <AnimatePresence>
        {products && products.length > 0 && (
          <motion.div ref={carouselRef} className="carousel">
            <motion.div
              drag="x"
              className="inner-carousel d-flex  "
              style={{
                "--num-slides": products.length,
                "--current-slide": currentSlideIndex,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition animation
              initial={{ x: `calc(var(--current-slide) * -100%)` }}
              animate={{ x: `calc(var(--current-slide) * -100%)` }}
              exit={{ x: `calc(var(--current-slide) * -100%)` }}
              dragConstraints={{ left: -width, right: 0 }}
            >
              {products &&
                products.length > 0 &&
                products.map((product, index) => (
                  <Card key={index} product={product} />
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductsSlider;
