import React from "react";
import { useSelector } from "react-redux";

const CategoriesDropDown = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  console.log("categories", categories);
  return <div className="d-lg-none bg-light mb-5">saaad</div>;
};

export default CategoriesDropDown;
