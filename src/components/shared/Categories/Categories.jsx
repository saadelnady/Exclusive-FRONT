import { NavLink } from "react-router-dom";
// import { categoriesData } from "../../static/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../../store/actions/categoryActions";
import { serverUrl } from "../../../API/API";
import { SubCategories } from "./SubCategories";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "../../../styles/Home/Categories.css";
export const Categories = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  console.log(categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ul className="categouries-links col-md-3 col-lg-2 pt-4 fs-5 border-end d-none d-md-flex flex-column justify-content-between">
      {categories.map((category, index) => {
        return (
          <>
            <li key={index}>
              <NavLink to={`/category/${category.title}`} className="text-dark">
                <div>
                  <img
                    src={`${serverUrl}/uploads/categories/${category.image}`}
                    alt=""
                  />
                  <p>
                    {category?.title}
                    {category?.subCategories?.length > 0 && (
                      <MdOutlineKeyboardArrowRight />
                    )}
                  </p>
                </div>
              </NavLink>{" "}
              {category?.subCategories?.length > 0 && (
                <SubCategories category={category} />
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};
