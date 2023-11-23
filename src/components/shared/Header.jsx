import { NavLink } from "react-router-dom";
import "../../styles/Header.css";
import { User } from "./User";
import { useState } from "react";

export const Header = () => {
  const [active, setIsActive] = useState(null);
  const activeHandler = (listItem) => {
    setIsActive(listItem);
  };

  return (
    <div className="border-bottom">
      <div className="bg-dark py-1">
        <div className="container text-light  d-flex justify-content-evenly align-center flex-wrap">
          <p className="d-flex justify-content-center py-2 fs-6  align-center text-center flex-wrap">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <NavLink
              className="ms-md-5 fw-bold fs-6 bg-transparent text-light"
              to="/"
            >
              ShopNow
            </NavLink>
          </p>

          <div className="dropdown m-0">
            <button
              className="btn outline-none text-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  className="dropdown-item bg-transparent text-dark"
                  to="/"
                >
                  Arabic
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item bg-transparent text-dark"
                  to="/"
                >
                  English
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item bg-transparent text-dark"
                  to="/"
                >
                  French
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item bg-transparent text-dark"
                  to="/"
                >
                  German
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container d-flex justify-content-between">
          <NavLink to="/" className="fs-3 text-dark">
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
              <ul className="nav d-flex justify-content-between links">
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
              <div className="search position-relative w-50  w-md-75 mt-2 mt-lg-0">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="what are you looking for ?"
                />
                <i className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle"></i>
              </div>
            </div>
            <User />
          </div>
        </div>
      </nav>
    </div>
  );
};
