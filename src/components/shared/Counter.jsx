import React from "react";

const Counter = () => {
  return (
    <div className="d-flex ">
      <button
        className="decrease"
        //   onClick={(e) => handleDecrease(e, index)}
      >
        -
      </button>
      <input
        name="stockCount"
        type="text"
        className="fs-3 special-input col-6  text-center"
        // value={formik?.values?.options[index]?.stockCount}
        // onBlur={formik.handleBlur}
        // onChange={(e) => handleStockCountChange(e, index)}
      />
      <button
        className="increase"
        //    onClick={(e) => handleIncrease(e, index)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
