import React from "react";
import cartProductImg from "../../../assets/images/pngs/person-3.png";
const CartTable = () => {
  return (
    <table className="cart-table col-12 mb-5">
      <thead className="shadow rounded">
        <th className="py-4 px-3 ">Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </thead>
      <tbody>
        <tr className="cart-row shadow rounded">
          <td className="py-2 px-3">
            <div className="position-relative">
              <img
                src={cartProductImg}
                alt=""
                className="object-fit-cover rounded-pill"
              />
            </div>
          </td>
          <td>$ 650</td>
          <td>
            <input type="number" className="special-input px-3 py-2" />
          </td>
          <td>$ 650</td>
        </tr>
        <tr className="mt-4 shadow rounded">
          <td className="py-2 px-3">
            <img
              src={cartProductImg}
              alt=""
              className="object-fit-cover rounded-pill"
            />
          </td>
          <td>$ 650</td>
          <td>
            <input type="number" className="special-input px-3 py-2" />
          </td>
          <td>$ 650</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
