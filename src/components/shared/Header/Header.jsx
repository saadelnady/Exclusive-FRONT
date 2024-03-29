import { NavLink } from "react-router-dom";
import { Announce } from "./Announce";
import { NavBar } from "./NavBar";

import { User } from "./User";
import { Search } from "./Search";

const Header = () => {
  return (
    <div className="border-bottom ">
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
            className="collapse navbar-collapse col-12 col-md-10"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex w-100 justify-content-between align-items-center">
              <NavBar />
              <Search />
            </div>
            <User />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
