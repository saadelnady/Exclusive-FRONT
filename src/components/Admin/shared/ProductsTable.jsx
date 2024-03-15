import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { toast } from "react-toastify";

import {
  acceptProduct,
  blockProduct,
} from "../../../store/actions/product/productActions";
import { useDispatch } from "react-redux";

export const ProductsTable = ({
  products,
  currentPage,
  limit,
  action,
  setAction,
  handleWarning,
}) => {
  const dispatch = useDispatch();
  // =================================================================================
  const handleAceeptProduct = (productId) => {
    const payLoad = { productId, toast, handleWarning };
    dispatch(acceptProduct(payLoad));
  };
  const handleBlockProduct = (productId) => {
    const payLoad = { productId, toast };
    dispatch(blockProduct(payLoad));
  };
  // =================================================================================

  return (
    <table className="w-100 rounded text-center">
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
                    <button className="view">
                      <FaEye />
                      view product
                    </button>
                  </NavLink>
                  {product?.status === "PENDING" ||
                  product?.status === "ACCEPTED" ? (
                    <button
                      onClick={() => {
                        handleWarning();
                        setAction({
                          type: "Block",
                          message: "Are you sure to Block this product ?",
                          actionHandler: () => {
                            handleBlockProduct(product?._id);
                          },
                        });
                      }}
                    >
                      <MdBlock />
                      Block
                    </button>
                  ) : null}
                  {product?.status === "PENDING" ? (
                    <button
                      className="accept"
                      onClick={() => {
                        handleWarning();
                        setAction({
                          ...action,
                          id: product?._id,
                          type: "Accept",
                          message: "Are you sure to accept this product ?",
                          actionHandler: () => {
                            handleAceeptProduct(product?._id);
                          },
                        });
                      }}
                    >
                      <AiOutlineCheckCircle />
                      Accept
                    </button>
                  ) : null}
                  {product?.status === "BLOCKED" && (
                    <button
                      onClick={() => {
                        handleWarning();
                        setAction({
                          id: product?._id,
                          type: "Block",
                          message: "Are you sure to Block this product ?",
                          actionHandler: () => {
                            handleBlockProduct(product?._id);
                          },
                        });
                      }}
                    >
                      <MdBlock />
                      Unblock
                    </button>
                  )}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
