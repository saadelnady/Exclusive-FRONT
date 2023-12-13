import { NavLink } from "react-router-dom";
import DefaultUserImage from "../../assets/images/pngs/user-logo.png";
import iconCancel from "../../assets/images/pngs/ic-cancel.png";
import iconLogout from "../../assets/images/pngs/ic-logout.png";
import iconMallBag from "../../assets/images/pngs/ic-mallbag.png";
import iconReviews from "../../assets/images/pngs/ic-Reviews.png";
import "../../styles/User.css";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchUser } from "../../store/actions/userActions";
export const User = () => {
  const { isAuthenticated, user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <div className="user d-flex col-12  col-lg-3 justify-content-evenly  align-items-center">
      {isAuthenticated && <CiHeart className="fs-2 wishlist" />}

      <BsCart3 className="fs-2 cart" />

      {isAuthenticated && (
        <div className="dropdown text-center">
          <button
            className="user-logo rounded-circle dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.userImage || DefaultUserImage}
              alt="user-logo"
              className="w-100"
            />
          </button>
          <ul className="dropdown-menu bg-dark p-3">
            <li className="d-flex justify-content-between align-items-center mb-2">
              <img src={DefaultUserImage} alt="user-logo" />
              <NavLink className="dropdown-item bg-transparent text-light">
                Manage my account({user.firstName || "user name"})
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
      )}
    </div>
  );
};
