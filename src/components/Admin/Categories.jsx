import { serverUrl } from "../../API/API";
import { useDispatch, useSelector } from "react-redux";
import { formatDateAndTime } from "../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./styles/Categories.css";
import { NavLink } from "react-router-dom";
import Warning from "../shared/Warning";
import {
  DELETE_ALL_PRODUCT_RELATED_TO_CATEGORY,
  DELETE_MESSAGE,
} from "../../helpers/warningMessges";
import { deleteCategory } from "../../store/actions/category/categoryActions";
import { useState } from "react";
import { toast } from "react-toastify";
import { Loading } from "../shared/Loading";

export const Categories = ({ isWarning, handleWarning }) => {
  const { categories, isLoading } = useSelector(
    (state) => state.categoryReducer
  );
  const [categoryId, setCategoryId] = useState("");
  const dispatch = useDispatch();
  const handleDeleteCategory = () => {
    const payLoad = { categoryId, toast };
    dispatch(deleteCategory(payLoad));
    setTimeout(() => {
      handleWarning();
      window.location.reload();
    }, 2000);
  };
  return (
    <div className="categories-page ">
      {isWarning && (
        <Warning
          message={DELETE_MESSAGE}
          subMessage={DELETE_ALL_PRODUCT_RELATED_TO_CATEGORY}
          handleWarning={handleWarning}
          handleAction={handleDeleteCategory}
        />
      )}

      <div className="categories-list bg-white ">
        {isLoading ? (
          <Loading />
        ) : categories.length > 0 ? (
          <table className="w-100 rounded text-center">
            <thead>
              <tr className="">
                <th>ID</th>
                <th>Category Image</th>
                <th>Category title</th>
                <th>created at</th>
                <th>updated at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category, index) => (
                <tr key={index} className=" ">
                  <td className="border-end">{index + 1}</td>
                  <td>
                    <img
                      src={`${serverUrl}/${category.image}`}
                      alt="categoryImage"
                      className="category-image"
                    />
                  </td>
                  <td>{category.title}</td>
                  <td>{formatDateAndTime(category.createdAt)}</td>
                  <td>{formatDateAndTime(category.updatedAt)}</td>

                  <td>
                    <div className="options-wrapper">
                      <HiDotsVertical className=" " />
                      <div className="options">
                        <NavLink
                          to={`/admin/Categories/editCategory/${category._id}`}
                        >
                          <button className="edit">
                            <FaRegEdit /> Edit
                          </button>
                        </NavLink>
                        <button
                          onClick={() => {
                            handleWarning();
                            setCategoryId(category._id);
                          }}
                        >
                          <RiDeleteBin6Line /> Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No categories to show</p>
        )}
      </div>
    </div>
  );
};
