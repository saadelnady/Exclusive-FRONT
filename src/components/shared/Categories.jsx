import { NavLink } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/actions/categoryActions";

export const Categories = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  console.log(categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <ul className="categouries col-md-3 col-lg-2 pt-4 fs-5 border-end d-none d-md-flex flex-column justify-content-between">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <NavLink to={`/category/${category.title}`} className="text-dark">
              {category?.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
