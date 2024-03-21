import React from "react";
import {
  pendingProducts,
  acceptedProducts,
  blockedProducts,
} from "../../../helpers//options";
export const SellerProductsActions = ({
  id,
  handleGetAcceptedSellerProducts,
  handleGetPendingSellerProducts,
  handleGetBlockedSellerProducts,
}) => {
  const status = [pendingProducts, acceptedProducts, blockedProducts];

  return (
    <div className="d-flex">
      {status.map((product, index) => (
        <button
          key={index}
          className={`btn mx-3 ${
            index === 0
              ? "btn-primary"
              : index === 1
              ? "btn-success"
              : "btn-danger"
          }`}
          onClick={() => {
            if (index === 0) handleGetPendingSellerProducts(id);
            else if (index === 1) handleGetAcceptedSellerProducts(id);
            else if (index === 2) handleGetBlockedSellerProducts(id);
          }}
        >
          {product.Icon}
          {product.type.EN}
        </button>
      ))}
    </div>
  );
};
