import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import DefaultUserImage from "../../../../assets/images/pngs/user-logo.png";
import iconCancel from "../../../../assets/images/pngs/ic-cancel.png";
import iconLogout from "../../../../assets/images/pngs/ic-logout.png";
import iconMallBag from "../../../../assets/images/pngs/ic-mallbag.png";
import iconReviews from "../../../../assets/images/pngs/ic-Reviews.png";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { serverUrl } from "../../../../API/API";

import { userLogout } from "../../../../store/actions/user/userActions";

const UserDropDown = () => {
  const { user } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogOut = () => {
    const payLoad = { toast, navigate, role: user.role };
    dispatch(userLogout(payLoad));
  };
  return (
    <div className="dropdown text-center">
      <button
        className="user-logo rounded-pill dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={`${serverUrl}/${user.image}`}
          alt="user-logo"
          className="w-100 h-100"
        />
      </button>
      <ul className="dropdown-menu bg-dark p-3">
        <li className="d-flex justify-content-between align-items-center mb-2">
          <img src={DefaultUserImage} alt="user-logo" />
          <NavLink
            className="dropdown-item bg-transparent text-light"
            to={`/profile`}
          >
            Manage my account(
            {user.firstName || "user name"})
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
          <NavLink
            className="dropdown-item bg-transparent text-light"
            onClick={handleLogOut}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
