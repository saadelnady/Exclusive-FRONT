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
  handleShowWarning,

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

  // ==========================================================
  const popupInfo = {
    message: "Are you sure to Delete this category ?",
    subMessage: "You will delete every products related to this category too",
    // Icon: <RiDeleteBin6Line />,
    actionTitle: "Delete",
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="admin-product-page row align-items-start justify-content-evenly my-5">
          {isWarning && (
            <Warning
              handleShowWarning={handleShowWarning}
              // actionHandler={deleteCategoryHandler}
              // popupInfo={popupInfo}
            />
          )}
          <ProductOwnerCard productOwner={productOwner} />
          <ProductCard
            product={product}
            handleShowWarning={handleShowWarning}
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
