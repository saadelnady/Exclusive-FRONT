import { NavLink } from "react-router-dom";

export const Header = () => {
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

      <div className="container py-3 d-flex justify-content-between align-items-center">
        <NavLink to="/" className="text-decoration-none fs-3 text-dark">
          Exclusive
        </NavLink>
        <ul className="nav ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
