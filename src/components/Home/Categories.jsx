import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../store/actions/categoryActions";
import { serverUrl } from "../../API/API";
import { SubCategories } from "./SubCategories";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./styles/Categories.css";
export const Categories = () => {
  const { categories } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <ul className="categouries-links pt-4 fs-5 border-end ">
      {categories.map((category, index) => {
        return (
          <>
            <li key={index}>
              <NavLink to={`/category/${category.title}`} className="text-dark">
                <div>
                  <img src={`${serverUrl}/${category.image}`} alt="" />
                  <p>
                    {category?.title}
                    {category?.subCategories?.length > 0 && (
                      <MdOutlineKeyboardArrowRight className="arrow-right" />
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
