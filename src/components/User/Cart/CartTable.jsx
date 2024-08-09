import React from "react";
import { useSelector } from "react-redux";
import { serverUrl } from "../../../API/API";
const CartTable = () => {
  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <table className="cart-table col-12 mb-5">
      <thead className="shadow rounded">
        <th className="py-4 px-3 ">Product image</th>
        <th className="py-4 px-3 ">Product title</th>
        <th>Color</th>
        <th>Size</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </thead>
      <tbody>
        {cart?.products?.map((item) => {
          console.log("item?.product? ===>", item?.product);

          return (
            <tr className="cart-row shadow rounded">
              <td className="py-2 px-3">
                <div className="position-relative">
                  <img
                    src={`${serverUrl}/${item?.product?.images[0]}`}
                    alt="product-img"
                    className="object-fit-cover rounded-pill"
                  />
                </div>
              </td>
              <td> {item?.product?.title}</td>
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
              <td> {item?.option?.size}</td>
              <td>{item?.option?.price?.finalPrice} $</td>
              <td>
                <input
                  type="number"
                  className="special-input px-3 py-2"
                  value={item?.selectedCount}
                />
              </td>
              <td>{item?.subTotal} $</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
