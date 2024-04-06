import React from "react";
import { NavLink } from "react-router-dom";

const AllProductsButton = ({ navigateTo }) => {
  return (
    <NavLink to={navigateTo}>
      <button className="btn submit py-3 px-5 fs-6">View All Products</button>
    </NavLink>
  );
};

export default AllProductsButton;
