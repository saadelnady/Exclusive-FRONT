import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchSellerProducts,
} from "../../store/actions/product/productActions";
import { Loading } from "../shared/Loading";
import { serverUrl } from "../../API/API";
import { formatDateAndTime } from "../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Pagination } from "../shared/Pagination";
import { toast } from "react-toastify";

import "./styles/Myproducts.css";
import Warning from "../shared/Warning";
import { DELETE_MESSAGE } from "../../helpers/warningMessges";
import { Search } from "../shared/Search";

export const Products = ({ isWarning, handleWarning }) => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const { products, isLoading, total } = useSelector(
    (state) => state?.productReducer
  );
  const [productId, setProductId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const dispatch = useDispatch();
  useEffect(() => {
    if (seller && seller._id) {
      dispatch(
        fetchSellerProducts({
          limit,
          page: currentPage,
          sellerId: seller?._id,
        })
      );
    }
  }, [seller, dispatch, currentPage]);
  // ==========================================================
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteProduct = () => {
    const payLoad = { productId, toast };
    dispatch(deleteProduct(payLoad));
    setTimeout(() => {
      handleWarning();
      // window.location.reload();
    }, 2000);
  };
  // ==========================================================
  return (
    <div className="products-page">
      {isWarning && (
        <Warning
          message={DELETE_MESSAGE}
          handleWarning={handleWarning}
          handleAction={handleDeleteProduct}
        />
      )}
      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-lg-5">My Products </h1>

        <Search type={"sellerProducts"} sellerId={seller?._id} />
      </div>

      <div className="products-list bg-white ">
        {isLoading ? (
          <Loading />
        ) : products?.length > 0 ? (
          <table className="w-100 rounded text-center">
            <thead>
              <tr>
                <th rowSpan="2">ID</th>
                <th rowSpan="2">Product Image</th>
                <th rowSpan="2">Product title</th>
                <th colSpan="4">Product price</th>
                <th rowSpan="2">created at</th>
                <th rowSpan="2">updated at</th>
                <th rowSpan="2">Actions</th>
              </tr>
              <tr>
                <th>Price before discount</th>
                <th>Discount percentage</th>
                <th>Discount Value</th>
                <th>Final price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="border-end">
                    {(currentPage - 1) * limit + index + 1}
                  </td>
                  <td>
                    <img
                      src={`${serverUrl}/${product?.images?.[0]}`}
                      alt="productImage"
                      className="product-image"
                    />
                  </td>
                  <td style={{ width: `100px` }}>{product?.title}</td>

                  <td>{product?.options[0].price.priceBeforeDiscount}</td>
                  <td>{product?.options[0].price.discountPercentage}</td>
                  <td>{product?.options[0].price.discountValue}</td>
                  <td>{product?.options[0].price.finalPrice}</td>

                  <td>{formatDateAndTime(product?.createdAt)}</td>
                  <td>{formatDateAndTime(product?.updatedAt)}</td>

                  <td>
                    <div className="options-wrapper">
                      <HiDotsVertical className=" " />
                      <div className="options">
                        <NavLink
                          to={`/Seller/products/editProduct/${product?._id}`}
                        >
                          <button className="edit">
                            <FaRegEdit /> Edit
                          </button>
                        </NavLink>
                        <button
                          onClick={() => {
                            handleWarning();
                            setProductId(product?._id);
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
          <p>there 's no Products to show</p>
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
