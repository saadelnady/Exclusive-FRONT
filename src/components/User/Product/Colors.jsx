import { useState } from "react";

const Colors = ({ options }) => {
  const [activeColor, setActiveColor] = useState(null);
  const handleColorActive = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="colors d-flex align-items-center mb-4">
      <p className="me-4 fs-4">Colors :</p>
      <ul className="productColors d-flex justify-content-evenly flex-wrap w-50">
        {options?.map((option) => (
          <li
            key={option.color}
            data-src={option.color}
            style={{ backgroundColor: `${option.color}` }}
            className={
              activeColor === option.color
                ? "active cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => handleColorActive(option.color)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
