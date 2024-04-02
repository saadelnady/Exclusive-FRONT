import React from "react";

const FlashSaleCounter = () => {
  return (
    <div className="sale-counter m-0 ms-md-5 d-flex  ">
      <div className="days">
        <p className="fw-bold">Days</p>
        <h1 className="fw-bold ">03</h1>
      </div>
      <span className="fs-2 mx-1">:</span>
      <div className="hours">
        <p className="fw-bold">Hours</p>
        <h1 className="fw-bold ">23</h1>
      </div>
      <span className="fs-2 mx-1">:</span>
      <div className="minutes">
        <p className="fw-bold">Minutes</p>
        <h1 className="fw-bold ">19</h1>
      </div>
      <span className="fs-2 mx-1">:</span>
      <div className="seconds">
        <p className="fw-bold">Seconds</p>
        <h1 className="fw-bold ">03</h1>
      </div>
    </div>
  );
};

export default FlashSaleCounter;
