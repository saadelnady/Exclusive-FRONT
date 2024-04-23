import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Shared/Loading";
import Warning from "../../Shared/Warning";

import ProductOwnerCard from "../../Shared/ProductOwnerCard";
import { ProductCard } from "./ProductCard";
import { fetchProduct } from "../../../store/actions/product/productActions";

import "./styles/Product.css";

const Index = ({
  isWarning,
  handleWarning,
  action,
  setAction,
  handleBlockProduct,
  handleAceeptProduct,
  handleUnBlockProduct,
}) => {
  const { product, isLoading } = useSelector((state) => state.productReducer);
  const { productOwner } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="admin-product-page row align-items-start justify-content-evenly my-5">
          {isWarning && (
            <Warning handleWarning={handleWarning} action={action} />
          )}
          <ProductOwnerCard productOwner={productOwner} />
          <ProductCard
            product={product}
            handleWarning={handleWarning}
            setAction={setAction}
            handleBlockProduct={handleBlockProduct}
            handleAceeptProduct={handleAceeptProduct}
            handleUnBlockProduct={handleUnBlockProduct}
          />
        </div>
      )}
    </>
  );
};
export default Index;
