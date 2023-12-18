import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [active, setIsActive] = useState(null);
  const activeHandler = (listItem) => {
    setIsActive(listItem);
  };
  return (
    <ul className="nav d-flex justify-content-between links align-items-center">
      <li
        className={
          active === "home"
            ? "nav-item  me-2 fs-5 text-dark active"
            : "nav-item  me-2 fs-5 text-dark "
        }
        onClick={() => {
          activeHandler("home");
        }}
      >
        <NavLink aria-current="page" to="/" className="text-dark">
          Home
        </NavLink>
      </li>
      <li
        className={
          active === "contact"
            ? "nav-item  me-2 fs-5 text-dark active"
            : "nav-item  me-2 fs-5 text-dark"
        }
        onClick={() => {
          activeHandler("contact");
        }}
      >
        <NavLink aria-current="page" to="/contact" className="text-dark ">
          Contact
        </NavLink>
      </li>
      <li
        className={
          active === "About"
            ? "nav-item  me-2 fs-5 text-dark active"
            : "nav-item  me-2 fs-5 text-dark"
        }
        onClick={() => {
          activeHandler("About");
        }}
      >
        <NavLink aria-current="page" to="/about" className=" text-dark">
          About
        </NavLink>
      </li>
      <li
        className={
          active === "SignUp"
            ? "nav-item  me-2 fs-5 text-dark active"
            : "nav-item  me-2 fs-5 text-dark"
        }
        onClick={() => {
          activeHandler("SignUp");
        }}
      >
        <NavLink aria-current="page" to="/register" className="text-dark ">
          SignUp
        </NavLink>
      </li>
    </ul>
  );
};
