import { NavLink } from "react-router-dom";
import { categoriesData } from "../../static/data";

export const Categouries = () => {
  return (
    <ul className="categouries col-md-3 col-lg-2 pt-4 fs-5 border-end d-none d-md-flex flex-column justify-content-between">
      {categoriesData.map((category, index) => {
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
