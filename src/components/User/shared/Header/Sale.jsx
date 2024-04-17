import React from "react";
import { NavLink } from "react-router-dom";

const Sale = () => {
  return (
    <p className="d-flex justify-content-center py-2 fs-6  align-center text-center flex-wrap">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <NavLink
        className="ms-md-5 fw-bold fs-6 bg-transparent text-light"
        to="/"
      >
        ShopNow
      </NavLink>
    </p>
  );
};

export default Sale;
