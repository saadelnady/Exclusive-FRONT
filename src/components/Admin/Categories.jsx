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
import {
  deleteCategory,
  fetchCategories,
} from "../../store/actions/category/categoryActions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loading } from "../shared/Loading";
import { Search } from "../shared/Search";
import { Pagination } from "../shared/Pagination";

export const Categories = ({ isWarning, handleWarning }) => {
  const { categories, isLoading, total } = useSelector(
    (state) => state.categoryReducer
  );

  console.log("total -------->", total);
  const [categoryId, setCategoryId] = useState("");

  const dispatch = useDispatch();

  // ==========================================================

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // ==========================================================

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchCategories({ limit, page: currentPage }));
    }
  }, [currentPage, dispatch]);

  // ==========================================================
  const handleDeleteCategory = () => {
    const payLoad = { categoryId, toast };
    dispatch(deleteCategory(payLoad));
    setTimeout(() => {
      handleWarning();
      window.location.reload();
    }, 2000);
  };
  // ==========================================================

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
      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-lg-5">All Categories </h1>

        <Search type={"categories"} />
      </div>
      <div className="categories-list bg-white ">
        {isLoading ? (
          <Loading />
        ) : categories?.length > 0 ? (
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
                  <td className="border-end">
                    {" "}
                    {(currentPage - 1) * limit + index + 1}
                  </td>
                  <td>
                    <img
                      src={`${serverUrl}/${category?.image}`}
                      alt="categoryImage"
                      className="category-image"
                    />
                  </td>
                  <td>{category?.title}</td>
                  <td>{formatDateAndTime(category?.createdAt)}</td>
                  <td>{formatDateAndTime(category?.updatedAt)}</td>

                  <td>
                    <div className="options-wrapper">
                      <HiDotsVertical className=" " />
                      <div className="options">
                        <NavLink
                          to={`/admin/Categories/editCategory/${category?._id}`}
                        >
                          <button className="edit">
                            <FaRegEdit /> Edit
                          </button>
                        </NavLink>
                        <button
                          onClick={() => {
                            handleWarning();
                            setCategoryId(category?._id);
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
          <p>there 's no categories to show</p>
        )}
      </div>
      <Pagination
        itemsPerPage={limit}
        paginate={handlePageChange}
        currentPage={currentPage}
        totalItems={total}
      />
    </div>
  );
};
