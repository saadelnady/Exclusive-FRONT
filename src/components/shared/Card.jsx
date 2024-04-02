import "./styles/Card.css";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

import icStar from "../../assets/images/pngs/ic_stars.png";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../../API/API";
import FlashSaleCounter from "../User/Home/FlashSale/FlashSaleCounter";

const Card = ({ product }) => {
  return (
    <div className="product-card mb-4">
      <div className="header rounded ">
        {product?.isFlashSale && <FlashSaleCounter />}
        <img
          src={`${serverUrl}/${product?.images[0]}`}
          alt="product-img"
          className="w-100 product-img"
        />
        <button className="addToCart bg-black">Add To Cart</button>
      </div>
      {product?.options[0].price?.discountPercentage > 0 && (
        <p className="discountPercentage">
          <span> {product?.options[0].price?.discountPercentage}%</span>
        </p>
      )}
      <div className="product-icons d-flex flex-column">
        <NavLink
          className="fs-4 text-center mb-2 rounded-pill"
          to={`/products/${product?._id}`}
        >
          <IoEyeOutline />
        </NavLink>
        <NavLink className="fs-4 text-center  rounded-pill ">
          <CiHeart />
        </NavLink>
      </div>

      <div className="content py-3">
        <h4 className="fw-bold">{product?.title}</h4>
        <div className="d-flex mb-2 ">
          <div className="final-price fw-bold me-4  fs-5">
            $ <span>{product?.options[0].price?.finalPrice}</span>
          </div>

          {product?.options[0].price?.discountPercentage > 0 && (
            <div className="price-before-discount text-decoration-line-through fw-bold text-gray-900 fs-5">
              $ <span>{product?.options[0].price?.priceBeforeDiscount}</span>
            </div>
          )}
        </div>
        <div className="d-flex align-items-center">
          <img src={icStar} alt="" />(<span>75</span>)
        </div>
      </div>
    </div>
  );
};
export default Card;
