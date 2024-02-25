import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { sellerLogout } from "../../../store/actions/seller/sellerActions";
import "../styles/sellerSideBar.css";
import { FaChevronRight, FaXmark } from "react-icons/fa6";

export const SellerSideBar = ({ isActive, handleSidebarActivation }) => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    const payLoad = { toast, navigate };
    dispatch(sellerLogout(payLoad));
  };
  const [toggleStates, setToggleStates] = useState({
    isProductsActive: false,
    // isSubCategoriesActive: false,
  });

  const HandleToggle = (key) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  return (
    <div className={`Seller-Sidebar px-3 ${isActive ? "active" : ""}`}>
      <div className="d-flex justify-content-between align-items-center ">
        <h2 className="text-light py-5 ">{seller.firstName}.</h2>
        <FaXmark
          onClick={() => {
            handleSidebarActivation();
          }}
          className="close-Sidebar"
        />
      </div>
      <div className="Seller-links d-flex justify-content-between flex-column">
        <ul className="main-links">
          <li className="fs-5">
            <NavLink to="/Seller">Dashboard</NavLink>
          </li>
          <li className="fs-5">
            <NavLink to="/Seller/profile">Profile</NavLink>
          </li>

          <li
            className="fs-5 d-flex justify-content-between align-items-center"
            onClick={() => {
              HandleToggle("isProductsActive");
            }}
          >
            <NavLink to="/Seller/products"> My products</NavLink>
            <span>
              <FaChevronRight
                className={`text-light arrow-right ${
                  toggleStates.isProductsActive && "active"
                }`}
              />
            </span>
          </li>
          {toggleStates.isProductsActive && (
            <ul>
              <li>
                <NavLink to="/Seller/addproduct" className="btn btn-danger">
                  Add product
                </NavLink>
              </li>
            </ul>
          )}
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
    </div>
  );
};
