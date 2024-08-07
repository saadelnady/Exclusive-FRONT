import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

import icStar from "../../assets/images/pngs/ic_stars.png";
import { NavLink, useNavigate } from "react-router-dom";
import { serverUrl } from "../../API/API";
import FlashSaleCounter from "../User/Shared/FlashSaleCounter/FlashSaleCounter";
import "./styles/Card.css";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../helpers/toast_helper";
import { toast } from "react-toastify";
import { useState } from "react";
import { addToCart } from "../../store/actions/cart/cartActions";
import { BsCart3 } from "react-icons/bs";

const Card = ({ product, handleTargetProduct, handleActiveModal }) => {
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size
  const [selectedColor, setSelectedColor] = useState(""); // State for selected color
  const [selectedPrice, setSelectedPrice] = useState(""); // State for selected color

  const { isLoggedIn, user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const uniqueColors = Array.from(
    new Set(product.options.map((option) => option.color))
  );
  const sizesOfSelectedColor = product.options
    .filter((option) => option.color === selectedColor) // Filter options by selectedColor
    .map((option) => option.size); // Extract sizes from filtered options

  return (
    <div className="product">
      <div className="product-icons">
        <IoEyeOutline
          className="cursor-pointer"
          onClick={() => {
            handleTargetProduct(product);
            handleActiveModal();
          }}
        />
      </div>

      <NavLink to={`/products/${product?._id}`}>
        {product?.options[0].price?.discountPercentage > 0 && (
          <p className="discountPercentage">
            <span> {product?.options[0].price?.discountPercentage}%</span>
          </p>
        )}
        <div className="product-card">
          <div className="header">
            {product?.isFlashSale && (
              <FlashSaleCounter date={product?.flashSaleEndDate} />
            )}
            <img
              src={`${serverUrl}/${product?.images[0]}`}
              alt="product-img"
              className="product-img"
            />
          </div>

          <div className="content py-3">
            <h4 className="fw-bold">{product?.title.split("", 20)}.. </h4>
            <div className="d-flex mb-2 ">
              <div className="final-price fw-bold me-4  fs-5">
                $ <span>{product?.options[0].price?.finalPrice}</span>
              </div>

              {product?.options[0].price?.discountPercentage > 0 && (
                <div className="price-before-discount text-decoration-line-through fw-bold text-gray-900 fs-5">
                  ${" "}
                  <span>{product?.options[0].price?.priceBeforeDiscount}</span>
                </div>
              )}
            </div>
            <div className="d-flex align-items-center">
              <img src={icStar} alt="" />(<span>75</span>)
            </div>
          </div>

          {/* <div className="dropdowns">
            <div className="colors d-flex align-items-center mb-4">
              <ul className="productColors d-flex justify-content-start flex-wrap w-50 ">
                {uniqueColors?.map((color) => (
                  <li
                    key={color}
                    style={{ backgroundColor: color }}
                    className={`cursor-pointer col-5 ${
                      selectedColor === color ? "active cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                  ></li>
                ))}
              </ul>
            </div>

            <ul className="select-size d-flex justify-content-start flex-wrap w-75">
              {sizesOfSelectedColor.map((size) => (
                <li
                  key={size}
                  className={
                    selectedSize === size
                      ? "active cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
