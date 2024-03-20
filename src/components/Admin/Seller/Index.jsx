import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSeller } from "../../../store/actions/seller/sellerActions";
import { ProductsTable } from "../shared/ProductsTable";
import { ProductOwnerCard } from "../shared/ProductOwnerCard";
import { SellerProductsActions } from "./SellerProducts";
import { fetchSellerProducts } from "../../../store/actions/product/productActions";
import { productStatus } from "../../../helpers/options";
const Index = () => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const { products } = useSelector((state) => state.productReducer);
  const { sellerId } = useParams();
  console.log("seller", seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeller(sellerId));
    dispatch(fetchSellerProducts({ sellerId, status: productStatus.ACCEPTED }));
  }, [dispatch, sellerId]);
  return (
    <div className="row m-4 justify-content-between">
      <ProductOwnerCard productOwner={seller} />
      <div className="col-12 col-md-7 col-lg-8">
        <SellerProductsActions id={sellerId} />
        <ProductsTable products={products} />
      </div>
    </div>
  );
};

export default Index;
