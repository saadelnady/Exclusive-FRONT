import { NavLink, useNavigate } from "react-router-dom";
 
import { useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "react-toastify";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export const AdminSideBar = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [toggleStates, setToggleStates] = useState({
    isCategoriesActive: false,
    isSubCategoriesActive: false,
  });

  const HandleToggle = (key) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("TOKEN");
    toast.success("You have logged out");
    navigate("/user/login");
    window.location.reload();
  };

  return (
    <div className="sideBar">
      <aside className="px-3 h-100">
        <div className="d-flex justify-content-between align-items-center px-1  ">
          <h2 className="text-light py-5 px-3">{user.firstName}.</h2>
          <CgMenuRight className="text-light fs-1 cursor-pointer" />
        </div>
        <div className="h-50 d-flex justify-content-between flex-column">
          <ul className="main-nav">
            <li className="fs-5">
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li className="fs-5">
              <NavLink to="/admin/profile">Profile</NavLink>
            </li>
            <li className="fs-5">
              <NavLink to="/admin/joinRequests">Join requests</NavLink>
            </li>
            <li
              className="fs-5 d-flex justify-content-between align-items-center"
              onClick={() => {
                HandleToggle("isCategoriesActive");
              }}
            >
              <NavLink to="/admin/Categories">Categories</NavLink>
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
                  <NavLink to="/admin/addCategory" className="btn btn-danger">
                    Add Category
                  </NavLink>{" "}
                </li>
              </ul>
            )}
            <li
              className="fs-5 d-flex justify-content-between align-items-center"
              onClick={() => {
                HandleToggle("isSubCategoriesActive");
              }}
            >
              <NavLink to="/admin/subCategories">Sub Categories</NavLink>
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
                    className="btn btn-danger"
                  >
                    Add sub Category
                  </NavLink>{" "}
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
      </aside>
    </div>
  );
};
