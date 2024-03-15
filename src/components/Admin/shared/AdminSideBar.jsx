import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { userLogout } from "../../../store/actions/user/userActions";

import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaProductHunt } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";

import "./styles/AdminSideBar.css";
export const AdminSideBar = ({ isActive, handleSidebarActivation }) => {
  const { user } = useSelector((state) => state.userReducer);
  const [toggleStates, setToggleStates] = useState({
    isCategoriesActive: false,
    isSubCategoriesActive: false,
    isProductsActive: false,
  });
  const dispatch = useDispatch();
  const HandleToggle = (key) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    const payLoad = { toast, navigate, role: "ADMIN" };
    dispatch(userLogout(payLoad));
  };
  return (
    <div className={`Admin-SideBar px-3 ${isActive ? "active" : ""}`}>
      <div className="d-flex justify-content-between align-items-center px-1">
        <h2 className="text-light py-5 px-3">{user.firstName}.</h2>
        <FaXmark
          onClick={() => {
            handleSidebarActivation();
          }}
          className="close-Sidebar"
        />
      </div>
      <div className="Admin-links d-flex justify-content-between flex-column">
        <ul className="main-nav">
          <li className="fs-5 cursor-pointer">
            <NavLink to="/admin" className="d-flex align-items-center">
              <IoHomeOutline className="me-2 fs-4" />
              Dashboard
            </NavLink>
          </li>
          <li className="fs-5 cursor-pointer">
            <NavLink to="/admin/profile" className="d-flex align-items-center">
              <CgProfile className="me-2 fs-4" />
              Profile
            </NavLink>
          </li>
          <li
            className="fs-5 d-flex justify-content-between align-items-center cursor-pointer"
            onClick={() => {
              HandleToggle("isProductsActive");
            }}
          >
            <NavLink
              to="/admin/acceptedProducts"
              className="d-flex align-items-center"
            >
              <FaProductHunt className="me-2 fs-4" />
              Products
            </NavLink>
            <span>
              <FaChevronRight
                className={`text-light arrow-right ${
                  toggleStates.isProductsActive && "active"
                }`}
              />
            </span>
          </li>
          {toggleStates.isProductsActive && (
            <ul className="sub-nav">
              <li className="fs-5 ms-3">
                <NavLink
                  to="/admin/pendingProducts"
                  className="btn btn-danger d-flex "
                >
                  Pending Products
                </NavLink>
              </li>
              <li className="fs-5 ms-3 mt-2">
                <NavLink
                  to="/admin/blockedProducts"
                  className="btn btn-danger d-flex "
                >
                  Blocked products
                </NavLink>
              </li>
            </ul>
          )}

          <li
            className="fs-5 d-flex justify-content-between align-items-center cursor-pointer"
            onClick={() => {
              HandleToggle("isCategoriesActive");
            }}
          >
            <NavLink
              to="/admin/Categories"
              className="d-flex align-items-center"
            >
              <BiCategory className="me-2 fs-4" />
              Categories
            </NavLink>
            <span>
              <FaChevronRight
                className={`text-light arrow-right ${
                  toggleStates.isCategoriesActive && "active"
                }`}
              />
            </span>
          </li>
          {toggleStates.isCategoriesActive && (
            <ul className="sub-nav">
              <li className="fs-5 ms-3">
                <NavLink
                  to="/admin/addCategory"
                  className="btn btn-danger d-flex "
                >
                  Add Category
                </NavLink>
              </li>
            </ul>
          )}
          <li
            className="fs-5 d-flex justify-content-between align-items-center cursor-pointer"
            onClick={() => {
              HandleToggle("isSubCategoriesActive");
            }}
          >
            <NavLink
              to="/admin/subCategories"
              className="d-flex align-items-center"
            >
              <MdOutlineCategory className="me-2 fs-4 fs-4" />
              Sub Categories
            </NavLink>
            <span>
              <FaChevronRight
                className={`text-light arrow-right ${
                  toggleStates.isSubCategoriesActive && "active"
                }`}
              />
            </span>
          </li>
          {toggleStates.isSubCategoriesActive && (
            <ul className="sub-nav">
              <li className="fs-5 ms-3">
                <NavLink
                  to="/admin/addSubCategory"
                  className="btn btn-danger d-flex "
                >
                  Add subCategory
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
