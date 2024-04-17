import React, { useEffect, useState } from "react";
import Search from "../../Shared/Search";
import Loading from "../../Shared/Loading";

import { useDispatch, useSelector } from "react-redux";
import Warning from "../../Shared/Warning";

import { Pagination } from "../../Shared/Pagination";
import { ProductsTable } from "../Shared/ProductsTable";
import { fetchProducts } from "../../../store/actions/product/productActions";
import { productStatus } from "../../../helpers/options";

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
        fetchProducts({
          limit,
          page: currentPage,
          status: productStatus.PENDING,
        })
      );
    }
  }, [dispatch, currentPage]);

  // =================================================================================
  const handleSearchPendingProducts = (text) => {
    dispatch(
      fetchProducts({
        limit,
        page: currentPage,
        text,
        status: productStatus.PENDING,
      })
    );
  };
  return (
    <div>
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}

      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2 shadow">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-5">
          All Pending products
        </h1>
        <Search action={handleSearchPendingProducts} />
      </div>

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
        <p className="m-4 text-center fw-bold">there 's no products to show</p>
      )}

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
