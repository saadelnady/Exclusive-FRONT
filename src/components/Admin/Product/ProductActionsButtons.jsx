import React from "react";
import { productStatus } from "../../../helpers/options";
import { OptionButton } from "../Shared/OptionButton";
import { MdBlock } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  acceptProduct,
  blockProduct,
  unBlockProduct,
} from "../../../store/actions/product/productActions";

export const ProductActionsButtons = ({
  product,
  handleShowWarning,
  setAction,
  
}) => {
  const dispatch = useDispatch();
  // =================================================================================
  const productAcceptAction = {
    type: { AR: "موافقة", EN: "Accept" },
    message: {
      AR: "هل تود الموافقة على هذا المنتج ؟",
      EN: "Are you sure to Accept this product ?",
    },
    Icon: <AiOutlineCheckCircle />,
    actionHandler: (productId) => {
      const payLoad = { productId, toast, handleShowWarning };
      dispatch(acceptProduct(payLoad));
    },
  };
  // ===============================================

  const productBlockAction = {
    type: { AR: "حجب", EN: "Block" },
    message: {
      AR: "هل تود حجب هذا المنتج ؟",
      EN: "Are you sure to Block this product ?",
    },
    Icon: <MdBlock />,
    actionHandler: (productId) => {
      const payLoad = { productId, toast };
      dispatch(unBlockProduct(payLoad));
    },
  };
  // ===============================================

  const productUnBlockAction = {
    type: { AR: "أزالة الحجب", EN: "UnBlock" },
    message: {
      AR: "هل تود أزالة الحجب عن هذا المنتج ؟",
      EN: "Are you sure to UnBlock this product ?",
    },
    Icon: <MdBlock />,
    actionHandler: (productId) => {
      const payLoad = { productId, toast };
      dispatch(blockProduct(payLoad));
    },
  };
  return (
    <div className="options">
      {product?.status === productStatus.PENDING && (
        <div className="d-flex justify-content-end mx-4">
          <OptionButton
            action={productAcceptAction}
            handleShowWarning={handleShowWarning}
            setAction={setAction}
            id={product?._id}
            actionHandler={productAcceptAction.actionHandler}
            buttonStyle="accept"
          />
          <OptionButton
            action={productBlockAction}
            handleShowWarning={handleShowWarning}
            setAction={setAction}
            id={product?._id}
            actionHandler={productBlockAction.actionHandler}
            buttonStyle="block"
          />
        </div>
      )}
      {product?.status === productStatus.ACCEPTED && (
        <OptionButton
          action={productBlockAction}
          handleShowWarning={handleShowWarning}
          setAction={setAction}
          id={product?._id}
          actionHandler={productBlockAction.actionHandler}
          buttonStyle="block"
        />
      )}
      {product?.status === productStatus.BLOCKED && (
        <OptionButton
          action={productUnBlockAction}
          handleShowWarning={handleShowWarning}
          setAction={setAction}
          id={product?._id}
          actionHandler={productUnBlockAction.actionHandler}
          buttonStyle="block"
        />
      )}
    </div>
  );
};
