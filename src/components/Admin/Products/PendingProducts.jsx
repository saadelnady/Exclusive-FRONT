import React, { useEffect, useState } from "react";
import { Search } from "../../shared/Search";
import "./styles/Products.css";
import { Loading } from "../../shared/Loading";

import { useDispatch, useSelector } from "react-redux";
import Warning from "../../shared/Warning";

import { Pagination } from "../../shared/Pagination";
import { ProductsTable } from "../shared/ProductsTable";
import { fetchPendingProducts } from "../../../store/actions/product/productActions";

export const PendingProducts = ({
  isWarning,
  handleWarning,
  action,
  setAction,
  handleBlockProduct,
  handleAceeptProduct,
}) => {
  const { products, isLoading, total } = useSelector(
    (state) => state.productReducer
  );

  const dispatch = useDispatch();
  // =================================================================================
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // =================================================================================

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(
        fetchPendingProducts({
          limit,
          page: currentPage,
        })
      );
    }
  }, [dispatch, currentPage]);

  // =================================================================================

  return (
    <div className="productsRequests-page">
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}

      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-5">
          All Pending products
        </h1>
        <Search type={"pendingProducts"} />
      </div>
      <div className="productsRequests-list bg-white">
        {isLoading ? (
          <Loading />
        ) : products?.length > 0 ? (
          <ProductsTable
            products={products}
            limit={limit}
            currentPage={currentPage}
            setAction={setAction}
            handleWarning={handleWarning}
            handleAceeptProduct={handleAceeptProduct}
            handleBlockProduct={handleBlockProduct}
          />
        ) : (
          <p>there 's no products to show</p>
        )}
      </div>
      {products?.length > 0 && (
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
