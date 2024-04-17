import stars from "../../../assets/images/pngs/ic_stars.png";
import { CiHeart } from "react-icons/ci";
import Delivery from "./Delivery";
import Colors from "./Colors";
import Size from "./Size";
import Counter from "./Counter";
import { useState } from "react";

const Details = ({ product }) => {
  const [activeColor, setActiveColor] = useState(null);

  const handleColorActive = (color) => {
    setActiveColor(color);
  };

  const filteredOptions = product?.options?.filter(
    (option) => option.color === activeColor
  );
  if (!product || !product.images || product.images.length === 0) {
    return null;
  }
   return (
    <div className="product-details col-12 col-lg-4 offset-lg-1 mt-4 mt-lg-0">
      <h2 className="product-name fw-bold mb-3">{product?.title}</h2>
      <div className="d-flex align-items-center flex-wrap mb-4">
        <div className="rating border-end d-flex align-items-center me-3">
          <img src={stars} alt="" />
          <p className="ms-3 pe-4">
            (<span>150 </span>Reviews)
          </p>
        </div>
        <p className="text-gold text-warning fw-bold">In Stock</p>
      </div>
      <div className="price fs-4 fw-bold mb-4">
        <span>$</span>
        <span className="price-amount">
          {product?.options[0].price?.finalPrice}
        </span>
      </div>
      <p className="description border-bottom fs-5 pb-4 mb-4">
        {product?.description}
      </p>
      <Colors
        options={product?.options}
        activeColor={activeColor}
        handleColorActive={handleColorActive}
      />
      <Size options={filteredOptions} />
      <div className="d-flex align-items-center justify-content-between product-buttons">
        <Counter />
        <button className="buy-now">Buy Now</button>
        <CiHeart className="heart cursor-pointer" />
      </div>
      <Delivery />
    </div>
  );
};

export default Details;
