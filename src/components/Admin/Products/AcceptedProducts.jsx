import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAcceptedProducts } from "../../../store/actions/product/productActions";
import { Pagination } from "../../shared/Pagination";
import Warning from "../../shared/Warning";
import { Search } from "../../shared/Search";
import { Loading } from "../../shared/Loading";

import { ProductsTable } from "../shared/ProductsTable";

export const AcceptedProducts = ({
  isWarning,
  handleWarning,
  action,
  setAction,
  handleBlockProduct,
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
      dispatch(fetchAcceptedProducts({ limit, page: currentPage }));
    }
  }, [dispatch, currentPage]);

  return (
    <div>
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}

      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2 shadow">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-6">
          All Accepted products
        </h1>
        <Search type={"acceptedProducts"} />
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
          handleBlockProduct={handleBlockProduct}
        />
      ) : (
        <p className="m-4">there 's no Products to show</p>
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
