import React from "react";
import { ProductDetails } from "./ProductDetails";
import { RelatedItem } from "../../Shared/RelatedItem";
import { fetchProduct } from "../../../store/actions/product/productActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Index = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);
  return (
    <>
      <ProductDetails />
      <RelatedItem />
    </>
  );
};

export default Index;
