import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../shared/Loading";

import { ProductOwnerCard } from "./ProductOwnerCard";
import { ProductCard } from "./ProductCard";
import { fetchProduct } from "../../../store/actions/product/productActions";

import "./styles/Product.css";
export const Product = () => {
  const { product, isLoading } = useSelector((state) => state.productReducer);
  const { productOwner } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);
  //   console.log("product ---------->", product);
  return (
    <div className="product-page">
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" row align-items-start justify-content-evenly ">
          <ProductOwnerCard productOwner={productOwner} />
          <ProductCard product={product} />
        </div>
      )}
    </div>
  );
};
