import React from "react";
import {
  productAcceptAction,
  productBlockAction,
  productStatus,
  productUnBlockAction,
} from "../../../helpers/options";
import { OptionButton } from "../shared/OptionButton";

export const ProductActionsButtons = ({
  product,
  handleWarning,
  setAction,
  handleBlockProduct,
  handleAceeptProduct,
  handleUnBlockProduct,
}) => {
  return (
    <div className="product-buttons">
      {product?.status === productStatus.PENDING && (
        <div className="d-flex justify-content-end mx-4">
          <OptionButton
            action={productAcceptAction}
            handleWarning={handleWarning}
            setAction={setAction}
            id={product?._id}
            actionHandler={handleAceeptProduct}
          />
          <OptionButton
            action={productBlockAction}
            handleWarning={handleWarning}
            setAction={setAction}
            id={product?._id}
            actionHandler={handleBlockProduct}
          />
        </div>
      )}
      {product?.status === productStatus.ACCEPTED && (
        <OptionButton
          action={productBlockAction}
          handleWarning={handleWarning}
          setAction={setAction}
          id={product?._id}
          actionHandler={handleBlockProduct}
        />
      )}
      {product?.status === productStatus.BLOCKED && (
        <OptionButton
          action={productUnBlockAction}
          handleWarning={handleWarning}
          setAction={setAction}
          id={product?._id}
          actionHandler={handleUnBlockProduct}
        />
      )}
    </div>
  );
};
