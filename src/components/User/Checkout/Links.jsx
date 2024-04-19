import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className="mb-5 links">
      <NavLink to={"/profile"} className="fs-5 me-2">
        Account /
      </NavLink>
      <NavLink to={"/"} className="fs-5 me-2">
        My Account /
      </NavLink>
      <NavLink to={"/"} className="fs-5 me-2">
        Product /
      </NavLink>
      <NavLink to={"/cart"} className="fs-5 me-2">
        View cart /
      </NavLink>
      <NavLink to={"/checkout"} className="text-dark fs-5 ms-2">
        Checkout
      </NavLink>
    </div>
  );
};

export default Links;
