import { NavLink } from "react-router-dom";
import userImage from "../../assets/images/pngs/user-logo.png";
import iconCancel from "../../assets/images/pngs/icon-cancel.png";
import iconLogout from "../../assets/images/pngs/Icon-logout.png";
import iconMallBag from "../../assets/images/pngs/icon-mallbag.png";
import iconReviews from "../../assets/images/pngs/Icon-Reviews.png";
import "../../styles/User.css";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
export const User = () => {
  return (
    <div className="user d-flex col-12  col-lg-3 justify-content-evenly  align-items-center">
      <CiHeart className="fs-2 wishlist" />
      <BsCart3 className="fs-2 cart" />

      <div className="dropdown text-center">
        <button
          className="user-logo rounded-circle dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={userImage} alt="user-logo" />
        </button>
        <ul className="dropdown-menu bg-dark p-3">
          <li className="d-flex justify-content-between align-items-center mb-2">
            <img src={userImage} alt="user-logo" />
            <NavLink className="dropdown-item bg-transparent text-light">
              Manage my account
            </NavLink>
          </li>
          <li className="d-flex justify-content-between align-items-center mb-2">
            <img src={iconMallBag} alt="bag-img" />
            <NavLink className="dropdown-item bg-transparent text-light">
              My Orders
            </NavLink>
          </li>
          <li className="d-flex justify-content-between align-items-center mb-2">
            <img src={iconCancel} alt="cancel-img" />
            <NavLink className="dropdown-item bg-transparent text-light">
              My Cancellations
            </NavLink>
          </li>
          <li className="d-flex justify-content-between align-items-center mb-2">
            <img src={iconReviews} alt="reviews" />
            <NavLink className="dropdown-item bg-transparent text-light">
              My Reviews
            </NavLink>
          </li>
          <li className="d-flex justify-content-between align-items-center mb-2">
            <img src={iconLogout} alt="icon-logout" />
            <NavLink className="dropdown-item bg-transparent text-light">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
