import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Links from "./Links";
import User from "./User";
import Search from "../../../../components/Shared/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchedProducts } from "../../../../store/actions/product/productActions";
import { productStatus } from "../../../../helpers/options";
import { FaXmark } from "react-icons/fa6";
import CategoriesDropDown from "../../Shared/CategoriesDropDown/CategoriesDropDown";

const NavBar = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [currentPage] = useState(1);
  const limit = 10;
  const handleSearchAcceptedProducts = (text) => {
    dispatch(
      fetchSearchedProducts({
        limit,
        page: currentPage,
        text,
        status: productStatus.ACCEPTED,
      })
    );
  };
  // ==========================================================
  const [activeNavBar, setActiveNavBar] = useState(false);
  const handleActiveNavBar = () => {
    setActiveNavBar(!activeNavBar);
  };
  // ==========================================================

  return (
    <div className="container d-flex justify-content-between align-items-center p-2">
      <NavLink to="/" className="fs-3 fw-bold">
        Exclusive
      </NavLink>

      <div
        className={`links-wrapper row col-md-7 ${
          activeNavBar ? "active" : ""
        } `}
      >
        <div className="d-flex justify-content-between align-items-center mb-5 mb-lg-0">
          <NavLink to="/" className="fs-3 fw-bold d-lg-none text-light">
            Exclusive
          </NavLink>
          <FaXmark
            onClick={() => {
              handleActiveNavBar();
            }}
            className="close-Sidebar d-lg-none"
          />
        </div>
        <Links />
        {!isLoggedIn && (
          <NavLink
            className="btn submit d-block d-lg-none mb-3"
            to="/login/seller"
          >
            login as a Seller
          </NavLink>
        )}
        <CategoriesDropDown />
        <Search action={handleSearchAcceptedProducts} />
      </div>

      <User handleActiveNavBar={handleActiveNavBar} />
    </div>
  );
};

export default NavBar;
