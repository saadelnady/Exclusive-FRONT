import { NavLink } from "react-router-dom";
import "../../styles/Header.css";
import { User } from "./User";
import { useState } from "react";
import { Announce, Search } from "../../routes";
export const Header = () => {
  const [active, setIsActive] = useState(null);
  const activeHandler = (listItem) => {
    setIsActive(listItem);
  };

  return (
    <div className="border-bottom">
      <Announce />
      <nav className="navbar navbar-expand-lg ">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink to="/" className="fs-3 text-dark fw-bold">
            Exclusive
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  w-75"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav w-100 justify-content-between">
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
                  <NavLink
                    aria-current="page"
                    to="/contact"
                    className="text-dark "
                  >
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
                  <NavLink
                    aria-current="page"
                    to="/about"
                    className=" text-dark"
                  >
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
                  <NavLink
                    aria-current="page"
                    to="/register"
                    className="text-dark "
                  >
                    SignUp
                  </NavLink>
                </li>
              </ul>
              <Search />
            </div>
            <User />
          </div>
        </div>
      </nav>
    </div>
  );
};
