import { HiDotsVertical } from "react-icons/hi";
import { serverUrl } from "../../API/API";
import { useDispatch, useSelector } from "react-redux";
import { formatDateAndTime } from "../../helpers/formated_date_time";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./styles/Categories.css";
import { NavLink } from "react-router-dom";
import Warning from "../shared/Warning";
import {
  DELETE_ALL_PRODUCT_RELATED,
  DELETE_MESSEGE,
} from "../../helpers/warningMessges";
import { deleteCategory } from "../../store/actions/categoryActions";
import { useState } from "react";
import { toast } from "react-toastify";

export const Categories = ({ isWarning, handleWarning }) => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const [categoryId, setCategoryId] = useState("");
  const dispatch = useDispatch();
  const handleDeleteCategory = () => {
    console.log("categoryId from categories", categoryId);
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
          messege={DELETE_MESSEGE}
          subMessege={DELETE_ALL_PRODUCT_RELATED}
          handleWarning={handleWarning}
          handleAction={handleDeleteCategory}
        />
      )}
      <div className=" container bg-white ">
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
            {categories.map((category, index) => (
              <tr key={index} className=" ">
                <td className="border-end">{index + 1}</td>
                <td>
                  <img
                    src={`${serverUrl}/${category.image}`}
                    alt=""
                    className="rounded-pill"
                  />
                </td>
                <td>{category.title}</td>
                <td>{formatDateAndTime(category.createdAt)}</td>
                <td>{formatDateAndTime(category.updatedAt)}</td>

                <td>
                  <div className="options-wrapper">
                    <HiDotsVertical className=" " />
                    <div className="options">
                      <button className="edit">
                        <NavLink
                          to={`/admin/Categories/editCategory/${category._id}`}
                        >
                          <FaRegEdit /> Edit
                        </NavLink>
                      </button>
                      <button
                        onClick={() => {
                          handleWarning();
                          setCategoryId(category._id);
                        }}
                      >
                        <RiDeleteBin6Line /> delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
