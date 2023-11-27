import { NavLink } from "react-router-dom";
import userImage from "../../assets/images/pngs/user-logo.png";
import iconCancel from "../../assets/images/pngs/icon-cancel.png";
import iconLogout from "../../assets/images/pngs/Icon-logout.png";
import iconMallBag from "../../assets/images/pngs/icon-mallbag.png";
import iconReviews from "../../assets/images/pngs/Icon-Reviews.png";

export const User = () => {
  return (
    <div className="d-flex w-25 justify-content-evenly align-items-center">
      <i className="bi bi-heart fs-3"></i>
      <i className="bi bi-cart3 fs-3"></i>

      <div className="dropdown bg-dark rounded-circle w-25 h-25 text-center">
        <button
          className="btn  text-dark bg-transparent dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={userImage} alt="user-logo" className="text-center" />
        </button>
        <ul className="dropdown-menu bg-dark ">
          <li>
            <NavLink className="dropdown-item bg-transparent text-dark">
              <img src={userImage} alt="user-logo" />
              Manage my account
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item bg-transparent text-light">
              <img src={iconMallBag} alt="bag-img" />
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item bg-transparent text-dark">
              <img src={iconCancel} alt="cancel-img" />
              My Cancellations
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item bg-transparent text-dark">
              <img src={iconReviews} alt="reviews" />
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item bg-transparent text-dark">
              <img src={iconLogout} alt="icon-logout" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
