import React from "react";

const Colors = ({ options, activeColor, handleColorActive }) => {
  // Get unique colors from the options array
  const uniqueColors = Array.from(
    new Set(options.map((option) => option.color))
  );

  return (
    <div className="colors d-flex align-items-center mb-4">
      <p className="me-4 fs-4">Colors:</p>
      <ul className="productColors d-flex justify-content-evenly flex-wrap w-50">
        {uniqueColors.map((color) => (
          <li
            key={color}
            style={{ backgroundColor: `${color}` }}
            className={
              activeColor === color ? "active cursor-pointer" : "cursor-pointer"
            }
            onClick={() => handleColorActive(color)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
