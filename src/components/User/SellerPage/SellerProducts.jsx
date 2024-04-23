import React from "react";
import Card from "../../Shared/Card";

const SellerProducts = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly align-items-center p-3">
      {products && products.length > 0 ? (
        products.map((product, index) => <Card product={product} key={index} />)
      ) : (
        <>There is no products to show</>
      )}
    </div>
  );
};

export default SellerProducts;
