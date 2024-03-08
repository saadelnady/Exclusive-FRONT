import React from "react";
import { Search } from "../shared/Search";
import "./styles/productsRequests.css";
import { Loading } from "../shared/Loading";
import { serverUrl } from "../../API/API";
import { MdBlock } from "react-icons/md";

import { NavLink } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

import { formatDateAndTime } from "../../helpers/formated_date_time";

import { useSelector } from "react-redux";
import Warning from "../shared/Warning";

export const ProductsAddRequests = ({ isWarning, handleWarning }) => {
  const { products, isLoading } = useSelector((state) => state.productReducer);

  return (
    <div className="productsRequests-page">
      {isWarning && (
        <Warning
          // message={DELETE_MESSAGE}
          handleWarning={handleWarning}
          // subMessage={DELETE_ALL_PRODUCT_RELATED_TO_CATEGORY}
          // handleAction={handleDeleteCategory}
          action={"Accept"}
        />
      )}

      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-lg-5">All products Requests </h1>

        <Search type={"products"} />
      </div>
      <div className="categories-list bg-white ">
        {isLoading ? (
          <Loading />
        ) : products?.length > 0 ? (
          <table className="w-100 rounded text-center">
            <thead>
              <tr className="">
                <th>ID</th>
                <th>product Image</th>
                <th>product title</th>
                <th>created at</th>
                <th>updated at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className=" ">
                  <td className="border-end">
                    {/* {(currentPage - 1) * limit + index + 1} */}
                  </td>
                  <td>
                    <img
                      src={`${serverUrl}/${product?.images[0]}`}
                      alt="categoryImage"
                      className="category-image"
                    />
                  </td>
                  <td>{product?.title}</td>
                  <td>{formatDateAndTime(product?.createdAt)}</td>
                  <td>{formatDateAndTime(product?.updatedAt)}</td>

                  <td>
                    <div className="options-wrapper">
                      <HiDotsVertical className="dotsIcon" />
                      <div className="options">
                        <NavLink
                          to={`/admin/productsAddRequests/${product?._id}`}
                        >
                          <button className="view">
                            <FaEye />
                            view product
                          </button>
                        </NavLink>

                        <button
                          className="accept"
                          onClick={() => {
                            handleWarning();
                            console.log("accept");
                            console.log("id", product?._id);
                          }}
                        >
                          <AiOutlineCheckCircle />
                          Accept
                        </button>

                        <button
                          onClick={() => {
                            // handleWarning();
                            // setCategoryId(category?._id);
                          }}
                        >
                          <MdBlock />
                          Block
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
      {/* <Pagination
        itemsPerPage={limit}
        paginate={handlePageChange}
        currentPage={currentPage}
        totalItems={total}
      />  */}
    </div>
  );
};
