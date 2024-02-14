import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { CgMenuRight } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { sellerLogout } from "../../../store/actions/seller/sellerActions";
import "../styles/sellerSideBar.css";
import { FaXmark } from "react-icons/fa6";

export const SellerSideBar = ({ isActive, handleSidebarActivation }) => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    const payLoad = { toast, navigate };
    dispatch(sellerLogout(payLoad));
  };

  return (
    <div className={`Seller-Sidebar  px-3 ${isActive ? "active" : ""}`}>
      <aside className="px-3 h-75">
        <div className="d-flex justify-content-between align-items-center px-1  ">
          <h2 className="text-light py-5 px-3">{seller?.firstName}.</h2>
          <FaXmark
            onClick={() => {
              handleSidebarActivation();
            }}
            className="close-Sidebar"
          />
        </div>
        <div className="h-50 d-flex justify-content-between flex-column">
          <ul>
            <li className="fs-5">
              <NavLink to="/Seller">Dashboard</NavLink>
            </li>
            <li className="fs-5">
              <NavLink to="/Seller/profile">Profile</NavLink>
            </li>
            <li className="fs-5">
              <NavLink to="/Seller/addproduct">Add product</NavLink>
            </li>
          </ul>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleLogOut();
            }}
          >
            <HiOutlineLogout /> Log out
          </button>
        </div>
      </aside>
    </div>
  );
};
