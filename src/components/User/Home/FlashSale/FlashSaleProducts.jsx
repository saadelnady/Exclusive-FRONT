import React from "react";
import Card from "../../../Shared/Card";
import { useSelector } from "react-redux";
import Loading from "../../../Shared/Loading";
const FlashSaleProducts = () => {
  const { flashSalesProducts, isLoading } = useSelector(
    (state) => state.productReducer
  );
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        flashSalesProducts &&
        flashSalesProducts.length > 0 &&
        flashSalesProducts.map((product, index) => (
          <Card product={product} key={index} />
        ))
      )}
    </div>
  );
};

export default FlashSaleProducts;
