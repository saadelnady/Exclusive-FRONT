import React from "react";
import { ProductDetails } from "./ProductDetails";
import { RelatedItem } from "../../Shared/RelatedItem";
import { fetchProduct } from "../../../store/actions/product/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Index = () => {
  const { product, isLoading } = useSelector((state) => state.productReducer);
  console.log("product =>", product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch]);
  return (
    <>
      <ProductDetails />
      <RelatedItem />
    </>
  );
};

export default Index;
