import React from "react";

export const ProductOptions = ({ options }) => {
  return (
    <div className="product-options mb-5">
      <table className="col-12 text-center">
        <thead>
          <tr>
            <th rowSpan="2">Color</th>
            <th rowSpan="2">Size</th>
            <th colSpan="4">Price</th>
            <th rowSpan="2">Stock Count</th>
          </tr>
          <tr>
            <th>Price before discount</th>
            <th>Discount percentage</th>
            <th>Discount Value</th>
            <th>Final price</th>
          </tr>
        </thead>
        <tbody>
          {options?.map((option, index) => {
            return (
              <tr key={index}>
                <td>
                  <span
                    className="product-color"
                    style={{ backgroundColor: option?.color }}
                  ></span>
                </td>
                <td>{option?.size}</td>
                <td>{option?.price?.priceBeforeDiscount}</td>
                <td>{option?.price?.discountPercentage}</td>
                <td>{option?.price?.discountValue}</td>
                <td>{option?.price?.finalPrice}</td>
                <td>{option?.stockCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
