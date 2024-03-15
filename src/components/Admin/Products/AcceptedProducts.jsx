import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAcceptedProducts } from "../../../store/actions/product/productActions";
import { Pagination } from "../../shared/Pagination";
import Warning from "../../shared/Warning";
import { Search } from "../../shared/Search";
import { Loading } from "../../shared/Loading";

import { ProductsTable } from "../shared/ProductsTable";

export const AcceptedProducts = ({ isWarning, handleWarning }) => {
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

  const [action, setAction] = useState({
    id: "",
    type: "",
    message: "",
    actionHandler: null,
  });
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchAcceptedProducts({ limit, page: currentPage }));
    }
  }, [dispatch, currentPage]);

  return (
    <div className="productsRequests-page">
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}

      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-6">
          All Accepted products
        </h1>
        <Search type={"acceptedProducts"} />
      </div>
      <div className="productsRequests-list bg-white ">
        {isLoading ? (
          <Loading />
        ) : products?.length > 0 ? (
          <ProductsTable
            products={products}
            limit={limit}
            currentPage={currentPage}
            action={action}
            setAction={setAction}
            handleWarning={handleWarning}
          />
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
