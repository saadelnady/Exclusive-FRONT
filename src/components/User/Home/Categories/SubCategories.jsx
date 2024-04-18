import React from "react";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../../../../API/API";

export const SubCategories = ({ category }) => {
  return (
    <div className="rounded">
      <ul className="sub-categories-links">
        {category?.subCategories?.map((subCategory, index) => (
          <NavLink
            to={`/category/${category?._id}/${subCategory?._id}`}
            key={index}
          >
            <li>
              <img src={`${serverUrl}/${subCategory?.image}`} alt="" />
              <span>{subCategory?.title}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
