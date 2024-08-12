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
  targetProductIdHandler,
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
            actoinTitle={"Accept"}
            Icon={<AiOutlineCheckCircle />}
            handleShowWarning={handleShowWarning}
            buttonStyle="accept"
            actionHandler={() => {
              targetProductIdHandler(product?._id, "accept");
            }}
          />
          <OptionButton
            actoinTitle={"Block"}
            Icon={<MdBlock />}
            handleShowWarning={handleShowWarning}
            buttonStyle="block"
            actionHandler={() => {
              targetProductIdHandler(product?._id, "block");
            }}
          />
        </div>
      )}
      {product?.status === productStatus.ACCEPTED && (
        <OptionButton
          actoinTitle={"Block"}
          Icon={<MdBlock />}
          handleShowWarning={handleShowWarning}
          buttonStyle="block"
          actionHandler={() => {
            targetProductIdHandler(product?._id, "block");
          }}
        />
      )}
      {product?.status === productStatus.BLOCKED && (
        <OptionButton
          actoinTitle={"UnBlock"}
          Icon={<MdBlock />}
          handleShowWarning={handleShowWarning}
          buttonStyle="block"
          actionHandler={() => {
            targetProductIdHandler(product?._id);
          }}
        />
      )}
    </div>
  );
};
