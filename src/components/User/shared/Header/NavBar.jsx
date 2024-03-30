import React from "react";
import { NavLink } from "react-router-dom";
import Links from "./Links";
import { User } from "./User";
import { Search } from "../../../../components/shared/Search";

const NavBar = () => {
  return (
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
          className="collapse navbar-collapse col-12 col-md-10"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav d-flex w-100 justify-content-between align-items-center">
            <Links />
            <Search />
          </div>
          <User />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
