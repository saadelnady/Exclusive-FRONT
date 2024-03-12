import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../shared/Loading";

import { ProductOwnerCard } from "./ProductOwnerCard";
import { ProductCard } from "./ProductCard";
import { fetchProduct } from "../../../store/actions/product/productActions";

import "./styles/Product.css";
import Warning from "../../shared/Warning";
const Index = ({ isWarning, handleWarning }) => {
  const { product, isLoading } = useSelector((state) => state.productReducer);
  const { productOwner } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  const [action, setAction] = useState({
    id: "",
    type: "",
    message: "",
    actionHandler: null,
  });
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
            action={action}
          />
        </div>
      )}
    </>
  );
};
export default Index;
