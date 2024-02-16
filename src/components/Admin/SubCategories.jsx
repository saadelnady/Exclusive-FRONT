import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../../API/API";
import { formatDateAndTime } from "../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./styles/subCategories.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  deleteSubCategory,
  fetchSubCategories,
} from "../../store/actions/subCategory/subCategoryActions";
import { Pagination } from "../shared/Pagination";
import { Loading } from "../shared/Loading";
import Warning from "../shared/Warning";
import {
  DELETE_ALL_PRODUCT_RELATED_TO_SUBCATEGORY,
  DELETE_MESSAGE,
} from "../../helpers/warningMessges";
import { Search } from "../shared/Search";

export const SubCategories = ({ isWarning, handleWarning }) => {
  const { isLoading, subCategories, total } = useSelector(
    (state) => state.subCategoryReducer
  );

  const [subCategoryId, setSubCategoryId] = useState("");
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
      dispatch(fetchSubCategories({ limit, page: currentPage }));
    }
  }, [currentPage, dispatch]);
  // ==========================================================

  const handleDeleteSubCategory = () => {
    const payLoad = { subCategoryId, toast };
    dispatch(deleteSubCategory(payLoad));
    setTimeout(() => {
      handleWarning();
      window.location.reload();
    }, 2000);
  };
  // ==========================================================

  return (
    <div className="subCategories-page">
      {isWarning && (
        <Warning
          message={DELETE_MESSAGE}
          subMessage={DELETE_ALL_PRODUCT_RELATED_TO_SUBCATEGORY}
          handleWarning={handleWarning}
          handleAction={handleDeleteSubCategory}
        />
      )}
      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-lg-5">All SubCategories </h1>
        <Search type={"subCategories"} />
      </div>
      <div className="subCategories-list bg-white ">
        {isLoading ? (
          <Loading />
        ) : subCategories?.length > 0 ? (
          <table className="w-100 rounded text-center">
            <thead>
              <tr className="">
                <th>ID</th>
                <th>subCategory Image</th>
                <th>subCategory title</th>
                <th>category title</th>
                <th>created at</th>
                <th>updated at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subCategories.map((subCategory, index) => (
                <tr key={index} className=" ">
                  <td className="border-end">
                    {(currentPage - 1) * limit + index + 1}
                  </td>
                  <td>
                    <img
                      src={`${serverUrl}/${subCategory?.image}`}
                      alt="subCategoryimage"
                      className="subCategory-image"
                    />
                  </td>
                  <td>{subCategory?.title}</td>
                  <td>{subCategory?.category?.title}</td>
                  <td>{formatDateAndTime(subCategory?.createdAt)}</td>
                  <td>{formatDateAndTime(subCategory?.updatedAt)}</td>
                  <td>
                    <div className="options-wrapper">
                      <HiDotsVertical className=" " />
                      <div className="options">
                        <NavLink
                          to={`/admin/subCategories/${subCategory?._id}`}
                        >
                          <button className="edit">
                            <FaRegEdit /> Edit
                          </button>
                        </NavLink>
                        <button
                          onClick={() => {
                            handleWarning();
                            setSubCategoryId(subCategory?._id);
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
        ) : (
          <p className="text-center">there 's no subCategories to show</p>
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
