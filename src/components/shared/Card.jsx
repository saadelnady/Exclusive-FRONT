import "../../styles/Card.css";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

import icStar from "../../assets/images/pngs/ic_stars.png";
import productImg from "../../assets/images/pngs/Gamepad-6.png";
import { NavLink } from "react-router-dom";
export const Card = () => {
  return (
    <div className="product-card mb-4">
      <div className="header py-5 rounded">
        <img src={productImg} alt="" />
        <button className="addToCart">Add To Cart</button>
      </div>
      <p className="discountPercentage">
        <span>-40 </span>%
      </p>
      <div className="product-icons d-flex flex-column">
        <NavLink className="fs-4 text-center mb-2 rounded-pill">
          <IoEyeOutline />
        </NavLink>
        <NavLink className="fs-4 text-center  rounded-pill ">
          <CiHeart />
        </NavLink>
      </div>
      <div className="content py-3">
        <h4 className="fw-bold">product Name</h4>
        <div className="d-flex mb-2 ">
          <div className="final-price fw-bold me-4  fs-5">
            $ <span>120</span>
          </div>
          <div className="price-before-discount text-decoration-line-through fw-bold text-gray-900 fs-5">
            $ <span>320</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={icStar} alt="" />(<span>75</span>)
        </div>
      </div>
    </div>
  );
};
