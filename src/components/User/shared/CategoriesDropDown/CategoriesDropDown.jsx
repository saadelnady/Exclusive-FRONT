import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../../../../API/API";
import "./styles/CategoriesDropDown.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const CategoriesDropDown = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const [activeDropDown, setActiveDropDown] = useState(false);
  const handleDropDown = () => {
    setActiveDropDown(!activeDropDown);
  };
  return (
    <div className="d-lg-none position-relative">
      <button onClick={handleDropDown} className="btn text-light col-12 border">
        All categories <MdOutlineKeyboardArrowDown className="fs-3" />
      </button>
      <ul className="CategoriesDropDown rounded">
        {activeDropDown &&
          categories?.map((category, index) => {
            return (
              <NavLink to={`/category/${category?._id}`} key={index}>
                <li className="d-flex mb-3 align-items-center">
                  <img
                    src={`${serverUrl}/${category?.image}`}
                    alt="categoryImg"
                    className="col-3 rounded-pill"
                  />
                  <p>{category?.title}</p>
                </li>
              </NavLink>
            );
          })}
      </ul>
    </div>
  );
};

export default CategoriesDropDown;
