import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./styles/ProductsTable.css";
import { FaEye } from "react-icons/fa";

import { productStatus } from "../../../helpers/options";
import { OptionButton } from "./OptionButton";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  acceptProduct,
  blockProduct,
  unBlockProduct,
} from "../../../store/actions/product/productActions";
import { MdBlock } from "react-icons/md";

export const ProductsTable = ({
  products,
  currentPage,
  limit,
  setAction,
  handleShowWarning,
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
      dispatch(blockProduct(payLoad));
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
      dispatch(unBlockProduct(payLoad));
    },
  };
  // ===============================================

  const productViewAction = {
    type: { AR: "عرض المنتج", EN: "View Product" },
    Icon: <FaEye />,
  };
  return (
    <div className="mt-4 mx-md-4 rounded shadow">
      <table className="col-12 rounded text-center products-table">
        <thead>
          <tr className="">
            <th>ID</th>
            <th>product Image</th>
            <th>product title</th>
            <th>created at</th>
            <th>updated at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={index} className=" ">
              <td className="border-end">
                {(currentPage - 1) * limit + index + 1}
              </td>
              <td>
                <img
                  src={`${serverUrl}/${product?.images[0]}`}
                  alt="productImage"
                  className="product-image"
                />
              </td>
              <td>{product?.title}</td>
              <td>{formatDateAndTime(product?.createdAt)}</td>
              <td>{formatDateAndTime(product?.updatedAt)}</td>

              <td>
                <div className="options-wrapper">
                  <HiDotsVertical className="dotsIcon" />
                  <div className="options">
                    <NavLink to={`/admin/products/${product?._id}`}>
                      <OptionButton
                        action={productViewAction}
                        buttonStyle="view"
                      />
                    </NavLink>
                    {product?.status === productStatus.PENDING ||
                    product?.status === productStatus.ACCEPTED ? (
                      <OptionButton
                        action={productBlockAction}
                        handleShowWarning={handleShowWarning}
                        setAction={setAction}
                        id={product?._id}
                        actionHandler={() => {
                          productBlockAction.actionHandler(product?._id);
                        }}
                        buttonStyle="block"
                      />
                    ) : null}
                    {product?.status === productStatus.PENDING && (
                      <OptionButton
                        action={productAcceptAction}
                        handleShowWarning={handleShowWarning}
                        setAction={setAction}
                        id={product?._id}
                        actionHandler={() => {
                          productAcceptAction.actionHandler(product?._id);
                        }}
                        buttonStyle="accept"
                      />
                    )}
                    {product?.status === productStatus.BLOCKED && (
                      <OptionButton
                        action={productUnBlockAction}
                        handleShowWarning={handleShowWarning}
                        setAction={setAction}
                        id={product?._id}
                        actionHandler={() => {
                          productUnBlockAction.actionHandler(product?._id);
                        }}
                        buttonStyle="block"
                      />
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
