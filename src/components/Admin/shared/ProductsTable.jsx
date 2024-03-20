import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./styles/ProductsTable.css";
import {
  productAcceptAction,
  productBlockAction,
  productStatus,
  productUnBlockAction,
  productViewAction,
} from "../../../helpers/options";
import { OptionButton } from "./OptionButton";

export const ProductsTable = ({
  products,
  currentPage,
  limit,
  setAction,
  handleWarning,
  handleUnBlockProduct,
  handleAceeptProduct,
  handleBlockProduct,
}) => {
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
                        handleWarning={handleWarning}
                        setAction={setAction}
                        id={product?._id}
                        actionHandler={handleBlockProduct}
                        buttonStyle="block"
                      />
                    ) : null}
                    {product?.status === productStatus.PENDING && (
                      <OptionButton
                        action={productAcceptAction}
                        handleWarning={handleWarning}
                        setAction={setAction}
                        id={product?._id}
                        actionHandler={handleAceeptProduct}
                        buttonStyle="accept"
                      />
                    )}
                    {product?.status === productStatus.BLOCKED && (
                      <OptionButton
                        action={productUnBlockAction}
                        handleWarning={handleWarning}
                        setAction={setAction}
                        id={product?._id}
                        actionHandler={handleUnBlockProduct}
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
