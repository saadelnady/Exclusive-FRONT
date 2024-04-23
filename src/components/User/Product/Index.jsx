import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedItems from "../../Shared/RelatedItems";

import { fetchProduct } from "../../../store/actions/product/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Index = () => {
  const { product } = useSelector((state) => state.productReducer);
  // console.log("product =>", product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch]);
  return (
    <div className="container mb-5">
      <ProductDetails />
      <RelatedItems
        categoryId={product?.category?._id}
        subCategoryId={product?.subCategory?._id}
      />
    </div>
  );
};

export default Index;
