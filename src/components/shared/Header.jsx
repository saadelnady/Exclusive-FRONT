import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Header.css";
export const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleActive = (link) => {
    setActiveLink(link);
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

      <nav class="navbar navbar-expand-lg   container">
        <div class="container d-flex justify-content-between">
          <NavLink to="/" className="text-decoration-none fs-3 text-dark">
            Exclusive
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  w-75" id="navbarNavAltMarkup">
            <div class="navbar-nav w-100 justify-content-between">
              <ul className="nav d-flex ">
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    to="/"
                    className={
                      activeLink === "/home" ? "active nav-link " : "nav-link "
                    }
                    onClick={() => handleActive("/home")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    to="/contact"
                    className={
                      activeLink === "/contact" ? "active nav-link" : "nav-link"
                    }
                    onClick={() => handleActive("/contact")}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    to="/about"
                    className={
                      activeLink === "/about" ? "active nav-link" : "nav-link"
                    }
                    onClick={() => handleActive("/about")}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    to="/register"
                    className={
                      activeLink === "/register"
                        ? "active nav-link"
                        : "nav-link"
                    }
                    onClick={() => handleActive("/register")}
                  >
                    SignUp
                  </NavLink>
                </li>
              </ul>
              <div className="search position-relative w-50  w-md-75 mt-2 mt-lg-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="what are you looking for ?"
                />
                <i className="bi bi-search position-absolute top-50 fs-5 fw-bold end translate-middle"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
