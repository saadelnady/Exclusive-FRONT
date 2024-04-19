import React from "react";
import icBkash from "../../../assets/images/pngs/ic_Bkash.png";
import icNagad from "../../../assets/images/pngs/ic_Nagad.png";
import icMastercard from "../../../assets/images/pngs/ic_Mastercard.png";
import icVisa from "../../../assets/images/pngs/ic_Visa.png";
const imgs = [icVisa, icMastercard, icNagad, icBkash];
const PaymentMethod = () => {
  return (
    <ul className="mb-3 payment-method">
      <li className="d-flex justify-content-between align-items-center">
        <div>
          <input
            type="radio"
            name="payment"
            id="Bank"
            className="me-3 outline custom-radio"
          />
          <label htmlFor="Bank">Bank</label>
        </div>
        <div className="payment-imgs">
          {imgs.map((img, index) => {
            return <img src={img} alt="payment-img" />;
          })}
        </div>
      </li>
      <li>
        <input
          type="radio"
          name="payment"
          id="cash"
          className="me-3 outline custom-radio"
        />
        <label htmlFor="cash">Cash on delivery</label>
      </li>
    </ul>
  );
};

export default PaymentMethod;
