import React, { useState } from "react";
import Card from "../../Shared/Card";
import ProductModal from "../../Shared/ProductModal";

const SellerProducts = ({ products }) => {
  const [targetProduct, setTargetProduct] = useState({});
  const [activeModal, setActiveModal] = useState(false);
  const handleTargetProduct = (e) => {
    setTargetProduct(e);
  };
  const handleActiveModal = () => {
    setActiveModal(!activeModal);
  };
  return (
    <div className="position-relative">
      {activeModal && (
        <ProductModal
          productId={targetProduct?._id}
          handleActiveModal={handleActiveModal}
        />
      )}
      <div className="d-flex flex-wrap justify-content-evenly align-items-center p-3">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <Card
              product={product}
              key={index}
              handleTargetProduct={handleTargetProduct}
              handleActiveModal={handleActiveModal}
            />
          ))
        ) : (
          <>There is no products to show</>
        )}
      </div>
    </div>
  );
};

export default SellerProducts;
