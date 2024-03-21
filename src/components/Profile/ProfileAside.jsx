import React from "react";
import { NavLink } from "react-router-dom";

const ProfileAside = () => {
  return (
    <aside className="col-12 col-sm-3">
      <ul>
        <p className="my-4  fs-5">Manage My Account</p>
        <li className="ps-4 mb-2">
          <NavLink>My Profile</NavLink>
        </li>
        <li className="ps-4 mb-2">
          <NavLink>Address Book</NavLink>
        </li>
        <li className="ps-4 mb-2">
          <NavLink>My Payment Options</NavLink>
        </li>
      </ul>
      <ul>
        <p className="my-4  fs-5">My Orders</p>
        <li className="ps-4 mb-2">
          <NavLink>My Returns</NavLink>
        </li>
        <li className="ps-4">
          <NavLink>My Cancellations</NavLink>
        </li>
      </ul>
      <ul>
        <p className="my-4  fs-5">My WishList</p>
      </ul>
    </aside>
  );
};

export default ProfileAside;
