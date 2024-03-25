import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductsTable } from "../shared/ProductsTable";
import { ProductOwnerCard } from "../shared/ProductOwnerCard";
import { SellerProductsActions } from "./SellerProducts";
import { fetchSeller } from "../../../store/actions/seller/sellerActions";
import { fetchSellerProducts } from "../../../store/actions/product/productActions";
import { productStatus } from "../../../helpers/options";

import Warning from "../../shared/Warning";
import { Loading } from "../../shared/Loading";

import { Pagination } from "../../shared/Pagination";

const Index = ({
  isWarning,
  handleWarning,
  action,
  setAction,
  handleBlockProduct,
  handleAceeptProduct,
  handleUnBlockProduct,
}) => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const { products, isLoading, total } = useSelector(
    (state) => state.productReducer
  );
  const { sellerId } = useParams();

  const dispatch = useDispatch();
  // =================================================================================
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchSeller(sellerId));
    dispatch(fetchSellerProducts({ sellerId, status: productStatus.ACCEPTED }));
  }, [dispatch, sellerId, currentPage]);

  const handleGetAcceptedSellerProducts = (sellerId) => {
    dispatch(fetchSellerProducts({ sellerId, status: productStatus.ACCEPTED }));
  };
  const handleGetPendingSellerProducts = (sellerId) => {
    dispatch(fetchSellerProducts({ sellerId, status: productStatus.PENDING }));
  };
  const handleGetBlockedSellerProducts = (sellerId) => {
    dispatch(fetchSellerProducts({ sellerId, status: productStatus.BLOCKED }));
  };

  return (
    <div className="row m-4 justify-content-between">
      {isWarning && <Warning handleWarning={handleWarning} action={action} />}
      <div className="row justify-content-between align-items-center flex-wrap px-3 py-2 shadow mb-5">
        <h1 className="fw-bold col-12 col-sm-6 col-lg-5">
          All seller products
        </h1>
      </div>
      <ProductOwnerCard productOwner={seller} />
      <div className="col-12 col-md-7 col-lg-8 ">
        <SellerProductsActions
          id={sellerId}
          handleGetAcceptedSellerProducts={handleGetAcceptedSellerProducts}
          handleGetPendingSellerProducts={handleGetPendingSellerProducts}
          handleGetBlockedSellerProducts={handleGetBlockedSellerProducts}
        />
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
            handleAceeptProduct={handleAceeptProduct}
            handleUnBlockProduct={handleUnBlockProduct}
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
    </div>
  );
};

export default Index;
