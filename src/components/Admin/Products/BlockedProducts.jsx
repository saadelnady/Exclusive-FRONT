import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockedProducts } from "../../../store/actions/product/productActions";

import Warning from "../../shared/Warning";
import { Search } from "../../shared/Search";
import { Loading } from "../../shared/Loading";
import { Pagination } from "../../shared/Pagination";
import { ProductsTable } from "../shared/ProductsTable";

export const BlockedProducts = ({
  isWarning,
  handleWarning,
  action,
  setAction,
  handleUnBlockProduct,
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
        fetchBlockedProducts({
          limit: limit,
          page: currentPage,
        })
      );
    }
  }, [dispatch, currentPage]);

  return (
    <div>
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}

      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2 shadow">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-5">
          All blocked products
        </h1>

        <Search type={"blockedProducts"} />
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
          handleUnBlockProduct={handleUnBlockProduct}
        />
      ) : (
        <p className="m-4">there 's no products to show</p>
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
