import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockedProducts } from "../../../store/actions/product/productActions";
import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdBlock } from "react-icons/md";
import Warning from "../../shared/Warning";
import { Search } from "../../shared/Search";
import { Loading } from "../../shared/Loading";

export const BlockedProducts = ({ isWarning, handleWarning }) => {
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const [action, setAction] = useState({
    id: "",
    type: "",
    message: "",
    actionHandler: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchBlockedProducts());
    }
  }, [dispatch]);
  return (
    <div className="productsRequests-page">
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}

      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-lg-5">All blocked products </h1>

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
                            setAction({
                              ...action,
                              id: product?._id,
                              type: "Accept",
                              message: "Are you sure to accept this product ?",
                              actionHandler: () => {
                                // handleAceeptProduct(product?._id);
                              },
                            });
                          }}
                        >
                          <AiOutlineCheckCircle />
                          Accept
                        </button>

                        <button
                          onClick={() => {
                            // handleWarning();
                            // setAction({
                            //   id: product?._id,
                            //   type: "Block",
                            //   message: "Are you sure to Block this product ?",
                            //   actionHandler: () => {
                            //     handleBlockProduct(product?._id);
                            //   },
                            // });
                          }}
                        >
                          <MdBlock />
                          Unblock
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
