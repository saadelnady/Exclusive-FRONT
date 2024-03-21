import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./styles/subCategories.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  deleteSubCategory,
  fetchSubCategories,
} from "../../../store/actions/subCategory/subCategoryActions";
import { Pagination } from "../../shared/Pagination";
import { Loading } from "../../shared/Loading";
import Warning from "../../shared/Warning";

import { Search } from "../../shared/Search";
import { OptionButton } from "../shared/OptionButton";
import { subCategoryDeleteAction } from "../../../helpers/options";

export const SubCategories = ({
  isWarning,
  handleWarning,
  action,
  setAction,
}) => {
  const { isLoading, subCategories, total } = useSelector(
    (state) => state.subCategoryReducer
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
      dispatch(fetchSubCategories({ limit, page: currentPage }));
    }
  }, [currentPage, dispatch]);
  // ==========================================================

  const handleDeleteSubCategory = (subCategoryId) => {
    const payLoad = { subCategoryId, toast };
    dispatch(deleteSubCategory(payLoad));

    handleWarning();
  };
  // ==========================================================

  const handleSearchSubCategory = (text) => {
    dispatch(fetchSubCategories({ limit, page: currentPage, text }));
  };

  return (
    <div className="subCategories-page">
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}
      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-5">All SubCategories </h1>
        <Search action={handleSearchSubCategory} />
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
              {subCategories?.map((subCategory, index) => (
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
                        <OptionButton
                          action={subCategoryDeleteAction}
                          handleWarning={handleWarning}
                          setAction={setAction}
                          id={subCategory?._id}
                          actionHandler={handleDeleteSubCategory}
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
            there 's no subCategories to show
          </p>
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
