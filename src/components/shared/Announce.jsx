import { NavLink } from "react-router-dom";

export const Announce = () => {
  return (
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
  );
};
