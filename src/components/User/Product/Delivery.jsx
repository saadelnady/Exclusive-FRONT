import React from "react";
import { NavLink } from "react-router-dom";
import iconDelivery from "../../../assets/images/pngs/ic-delivery.png";
import iconReturn from "../../../assets/images/pngs/ic-return.png";

const Delivery = () => {
  return (
    <div className="border mt-4 ">
      <div className="delivery d-flex align-items-center  justify-content-start p-4 border-bottom">
        <img src={iconDelivery} alt="" className="me-4" />
        <div className="content">
          <h3>Free Delivery</h3>
          <NavLink className="text-dark text-decoration-underline">
            Enter your postal code for Delivery Availability
          </NavLink>
        </div>
      </div>
      <div className="return d-flex align-items-center justify-content-start p-4 ">
        <img src={iconReturn} alt="" className="me-4" />
        <div className="content">
          <h3>Return Delivery</h3>
          Free 30 Days Delivery Returns.
          <NavLink className="text-dark text-decoration-underline">
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
