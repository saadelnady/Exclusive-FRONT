import React, { useEffect, useState } from "react";
import ProductOwnerCard from "../../Shared/ProductOwnerCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSeller } from "../../../store/actions/seller/sellerActions";
import { fetchAcceptedSellerProducts } from "../../../store/actions/product/productActions";
import SellerProducts from "./SellerProducts.jsx";
import { Pagination } from "../../Shared/Pagination.jsx";
import Loading from "../../Shared/Loading.jsx";
const Index = () => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const { products, total, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const { sellerId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    dispatch(fetchSeller(sellerId));
    dispatch(
      fetchAcceptedSellerProducts({ sellerId, limit, page: currentPage })
    );
  }, [sellerId, currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className=" d-flex justify-content-evenly align-items-start flex-wrap py-5">
      <ProductOwnerCard productOwner={seller} />

      <div className="col-12 col-md-6 col-lg-7 d-flex flex-column justify-content-between  shadow rounded">
        {isLoading ? <Loading /> : <SellerProducts products={products} />}
        {products && products?.length > 0 && (
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
