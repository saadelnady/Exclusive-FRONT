import React from "react";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../../API/API";

export const SubCategories = ({ category }) => {
  return (
    <div className="rounded ">
      <ul className="sub-categories-links">
        {category.subCategories.map((subCategory, index) => (
          <li key={index}>
            <NavLink
              to={`${serverUrl}/categories/${category.title}/${subCategory.title}`}
            >
              <img src={`${serverUrl}/${subCategory.image}`} alt="" />
            </NavLink>
            <span>{subCategory.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
