import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../../../API/API";
import { FaXmark } from "react-icons/fa6";
import { updateSelectedProductCount } from "../../../store/actions/cart/cartActionsCreators";

const CartTable = ({ handleShowWarning, setCurrentProductId }) => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const productSelectedCountHandler = (productId, selectedCount) => {
    const payLoad = { productId, selectedCount };
    dispatch(updateSelectedProductCount(payLoad));
  };
  return (
    <div className="overflow-auto mb-4">
      <table className="cart-table w-100   text-center">
        <thead className="shadow rounded py-3">
          <th>Product image</th>
          <th>Product title</th>
          <th>Color</th>
          <th>Size</th>
          <th>Price before discount</th>
          <th>discount</th>
          <th>Final price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </thead>
        <tbody>
          {cart?.products?.map((item, index) => {
            return (
              <tr className="cart-row shadow rounded text-center">
                <td>
                  <div
                    className="position-relative mx-auto"
                    style={{ width: "fit-content" }}
                  >
                    <button
                      style={{ width: "25px", height: "25px" }}
                      onClick={() => {
                        handleShowWarning();
                        setCurrentProductId(item?._id);
                      }}
                      className="btn p-0 position-absolute top-0 left-0 bg-danger rounded-circle text-light d-flex justify-content-center align-items-center"
                    >
                      <FaXmark />
                    </button>
                    {item?.product && item?.product?.images?.length > 0 && (
                      <img
                        src={`${serverUrl}/${item?.product?.images[0]}`}
                        alt="product-img"
                        className="object-fit-cover rounded-pill"
                      />
                    )}
                  </div>
                </td>
                <td className="fs-3"> {item?.product?.title}</td>
                <td>
                  <p
                    style={{
                      backgroundColor: `${item?.option?.color}`,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "2px solid red",
                    }}
                  ></p>
                </td>
                <td className="fw-bold fs-3"> {item?.option?.size}</td>
                <td>{item?.option?.price?.priceBeforeDiscount} $</td>
                <td>
                  {`${
                    item?.option?.price?.discountValue
                      ? `${item?.option?.price?.discountValue} $`
                      : "--"
                  }`}
                </td>
                <td>{item?.option?.price?.finalPrice} $</td>
                <td>
                  <input
                    type="number"
                    className="special-input px-3 py-2"
                    value={item?.selectedCount}
                    onChange={(e) => {
                      productSelectedCountHandler(item?._id, e.target.value);
                    }}
                  />
                </td>
                <td>{item?.subTotal} $</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
