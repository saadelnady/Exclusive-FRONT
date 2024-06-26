import { NavLink } from "react-router-dom";
import { serverUrl } from "../../../../API/API";
import { SubCategories } from "./SubCategories";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import "../styles/Categories.css";

const Categories = () => {
  const { categories } = useSelector((state) => state.categoryReducer);

  return (
    <ul className="categouries-links pt-4 fs-5 border-end">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <NavLink to={`/category/${category?._id}`} className="text-dark">
              <div>
                <img src={`${serverUrl}/${category?.image}`} alt="" />
                <p>
                  {category?.title}
                  {category?.subCategories?.length > 0 && (
                    <MdOutlineKeyboardArrowRight className="arrow-right" />
                  )}
                </p>
              </div>
            </NavLink>
            {category?.subCategories?.length > 0 && (
              <SubCategories category={category} />
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default Categories;
