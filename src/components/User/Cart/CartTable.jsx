import React from "react";
import { useSelector } from "react-redux";
import { serverUrl } from "../../../API/API";
const CartTable = () => {
  const { cart } = useSelector((state) => state.cartReducer);

  console.log("cart ===>", cart);
  return (
    <table className="cart-table col-12 mb-5">
      <thead className="shadow rounded">
        <th className="py-4 px-3 ">Product image</th>
        <th>Color</th>
        <th>Size</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </thead>
      <tbody>
        {cart.map((item) => {
          return (
            <tr className="cart-row shadow rounded">
              <td className="py-2 px-3">
                <div className="position-relative">
                  <img
                    src={`${serverUrl}/${item.product.images[0]}`}
                    alt=""
                    className="object-fit-cover rounded-pill"
                  />
                </div>
              </td>
              <td>
                <p
                  style={{
                    backgroundColor: `${item.color}`,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                ></p>
              </td>
              <td> {item?.size}</td>
              <td>{item?.price}</td>
              <td>
                <input type="number" className="special-input px-3 py-2" />
              </td>
              <td>subTotal</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
