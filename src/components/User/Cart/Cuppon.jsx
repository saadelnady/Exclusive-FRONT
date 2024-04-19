import React from "react";

const Cuppon = () => {
  return (
    <div className="  d-flex align-items-center justify-content-between mb-3 mb-lg-0 ">
      <input
        type="text"
        placeholder="Cuppon code"
        className="form-control bg-light special-input me-3 py-3"
      />
      <button className="btn submit py-3 col-5">Apply Cuppon</button>
    </div>
  );
};

export default Cuppon;
