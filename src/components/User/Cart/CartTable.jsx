import React from "react";
import cartProductImg from "../../../assets/images/pngs/person-3.png";
const CartTable = () => {
  return (
    <table className="w-100">
      <thead>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src={cartProductImg}
              alt=""
              className="col-12 col-sm-1 rounded-pill"
            />
          </td>
          <td>$ 650</td>
          <td>
            <input type="number" className="special-input" />
          </td>
          <td>$ 650</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
