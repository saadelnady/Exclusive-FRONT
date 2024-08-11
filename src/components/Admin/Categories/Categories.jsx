import { serverUrl } from "../../../API/API";
import { useDispatch, useSelector } from "react-redux";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

import "./styles/Categories.css";
import { NavLink } from "react-router-dom";
import Warning from "../../Shared/Warning";

import {
  deleteCategory,
  fetchCategories,
} from "../../../store/actions/category/categoryActions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";
import Search from "../../Shared/Search";
import { Pagination } from "../../Shared/Pagination";
import { OptionButton } from "../Shared/OptionButton";
import { categoryDeleteAction } from "../../../helpers/options";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Categories = ({
  isWarning,
  handleShowWarning,
  action,
  setAction,
}) => {
  const { categories, isLoading, total } = useSelector(
    (state) => state.categoryReducer
  );

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
  // const handleDeleteCategory = (categoryId) => {
  //   const payLoad = { categoryId, toast };
  //   dispatch(deleteCategory(payLoad));

  //   handleShowWarning();
  // };
  // ==========================================================

  const handleSearchCategory = (text) => {
    dispatch(fetchCategories({ limit, page: currentPage, text }));
  };

  // ===============================================

  const categoryDeleteAction = {
    type: { AR: "حذف", EN: "Delete" },
    message: {
      AR: "هل تود حذف هذا التصنيف ؟",
      EN: "Are you sure to Delete this category ?",
    },
    subMessage: {
      AR: "سوف تقوم بحذف جميع المنتجات الخاصة بعذا التصنيف ؟",
      EN: "You will delete every products related to this category too",
    },
    Icon: <RiDeleteBin6Line />,
    actionHandler: (categoryId) => {
      console.log("categoryId: " + categoryId);

      const payLoad = { categoryId, toast };
      dispatch(deleteCategory(payLoad));

      handleShowWarning();
    },
  };
  return (
    <div className="categories-page ">
      {isWarning && (
        <Warning handleShowWarning={handleShowWarning} action={action} />
      )}
      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-5">All Categories </h1>

        <Search action={handleSearchCategory} />
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
                      <HiDotsVertical className="dotsIcon" />
                      <div className="options">
                        <NavLink
                          to={`/admin/Categories/editCategory/${category?._id}`}
                        >
                          <button className="edit">
                            <FaRegEdit /> Edit
                          </button>
                        </NavLink>
                        <OptionButton
                          action={categoryDeleteAction}
                          handleShowWarning={handleShowWarning}
                          setAction={setAction}
                          id={category?._id}
                          actionHandler={() => {
                            categoryDeleteAction.actionHandler(category?._id);
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="m-4 text-center fw-bold">
            there 's no categories to show
          </p>
        )}
      </div>
      {categories?.length > 0 && (
        <Pagination
          itemsPerPage={limit}
          paginate={handlePageChange}
          currentPage={currentPage}
          totalItems={total}
        />
      )}
    </div>
  );
};
