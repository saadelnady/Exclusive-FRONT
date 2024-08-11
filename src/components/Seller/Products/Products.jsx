import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchAcceptedSellerProducts,
} from "../../../store/actions/product/productActions";
import Loading from "../../Shared/Loading";
import { serverUrl } from "../../../API/API";
 import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

import { Pagination } from "../../Shared/Pagination";
import { toast } from "react-toastify";

import "./styles/Myproducts.css";
import Warning from "../../Shared/Warning";

import Search from "../../Shared/Search";
import { OptionButton } from "../../Admin/Shared/OptionButton";
import CreateCoupon from "../Shared/CreateCoupon";
import { RiDeleteBin6Line } from "react-icons/ri";

const Products = ({ isWarning, handleShowWarning }) => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const { products, isLoading, total } = useSelector(
    (state) => state?.productReducer
  );
  const [action, setAction] = useState({
    type: "",
    message: "",
    subMessage: "",
    actionHandler: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const dispatch = useDispatch();
  useEffect(() => {
    if (seller && seller._id) {
      dispatch(
        fetchAcceptedSellerProducts({
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
 
  // ==========================================================
  const handleSearchProducts = (text) => {
    dispatch(
      fetchAcceptedSellerProducts({
        limit,
        page: currentPage,
        text,
        sellerId: seller?._id,
      })
    );
  };
  // ==========================================================
  // ===============================================
  const productDeleteAction = {
    type: { AR: "حذف", EN: "Delete" },
    message: {
      AR: "هل تود حذف هذا المنتج ؟",
      EN: "Are you sure to Delete this product ?",
    },
    Icon: <RiDeleteBin6Line />,
    actionHandler: (productId) => {
      const payLoad = { productId, toast };
      dispatch(deleteProduct(payLoad));
      handleShowWarning();
    },
  };
  return (
    <div className="products-page">
      {isWarning && (
        <Warning handleShowWarning={handleShowWarning} action={action} />
      )}
      {isOpen && <CreateCoupon handleIsOpen={handleIsOpen} />}
      <div className="products-list shadow pt-3   ">
        <div className="d-flex justify-content-between align-items-center flex-wrap rounded mx-3 mb-5">
          <h1 className="special-header ps-5 py-3">My Products</h1>
          <Search action={handleSearchProducts} />
        </div>
        <div className="d-flex justify-content-end mb-4 me-3">
          <button className="btn submit" onClick={handleIsOpen}>
            Add coupon code
          </button>
        </div>
        {isLoading ? (
          <Loading />
        ) : products?.length > 0 ? (
          <div className="over-flow-scroll">
            <table className="w-100 rounded text-center shadow">
              <thead>
                <tr>
                  <th rowSpan="2">ID</th>
                  <th rowSpan="2">Product Image</th>
                  <th rowSpan="2">Product title</th>
                  <th colSpan="4">Product price</th>
                  <th rowSpan="2">Sold Out</th>

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
                    <td style={{ width: `100px` }}>
                      {product?.title.slice(0, 19) + "..."}
                    </td>

                    <td>{product?.options[0].price.priceBeforeDiscount}</td>
                    <td>{product?.options[0].price.discountPercentage}</td>
                    <td>{product?.options[0].price.discountValue}</td>
                    <td>{product?.options[0].price.finalPrice}</td>
                    <td>{product?.soldOut}</td>

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

                          <OptionButton
                            handleShowWarning={handleShowWarning}
                            action={productDeleteAction}
                            setAction={setAction}
                            id={product?._id}
                            actionHandler={() => {
                              productDeleteAction.actionHandler(product?._id);
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="p-3 text-center fw-bold">
            there 's no Products to show
          </p>
        )}
      </div>
      {products.length > 0 && (
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
export default Products;
