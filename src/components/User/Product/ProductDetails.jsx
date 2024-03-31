import { NavLink, useParams } from "react-router-dom";
// import productImg_1 from "../../../assets/images/pngs/Gamepad-1.png";
// import productImg_2 from "../../../assets/images/pngs/Gamepad-2.png";
// import productImg_3 from "../../../assets/images/pngs/Gamepad-3.png";
// import productImg_4 from "../../../assets/images/pngs/Gamepad-4.png";
// import productImg_5 from "../../../assets/images/pngs/Gamepad-5.png";
import iconDelivery from "../../../assets/images/pngs/ic-delivery.png";
import iconReturn from "../../../assets/images/pngs/ic-return.png";
import stars from "../../../assets/images/pngs/ic_stars.png";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import "./styles/Product.css";
import ProductSlider from "./ProductSlider";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const { product } = useSelector((state) => state.productReducer);
  console.log("product ===", product);
  // const [imgSrc, setImageSrc] = useState(productImg_5);
  const images = product?.images;
  const [counter, setCounter] = useState(0);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const handleColorActive = (color) => {
    setActiveColor(color);
  };
  // const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const handleSizeActive = (size) => {
    setActiveSize(size);
  };
  // const id = useParams();
  // const handleSliderImage = (e) => {
  //   const currentImg = e.target.src;
  //   setImageSrc(currentImg);
  // };
  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container mb-5">
      <div className="links py-5 fs-6 ">
        <NavLink className="fs-5">{product?.category?.title}</NavLink> /
        <NavLink className="fs-5"> {product?.subCategory?.title}</NavLink> /
        <NavLink className="text-dark fs-5 ms-2">{product?.title}</NavLink>
      </div>
      <div className="details row">
        <ProductSlider images={images} />
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
          <div className="colors d-flex align-items-center mb-4">
            <p className="me-4 fs-4">Colors :</p>
            <ul className="productColors d-flex justify-content-evenly flex-wrap w-50">
              {product?.options?.map((option) => (
                <li
                  key={option.color}
                  data-src={option.color}
                  className={
                    activeColor === option.color
                      ? "black active cursor-pointer"
                      : "black cursor-pointer"
                  }
                  // onClick={() => handleColorActive({option.color})}
                ></li>
              ))}
            </ul>
          </div>
          <div className="size d-flex align-items-center mb-4 ">
            <p className="me-4 fs-4">Size :</p>
            <ul className="select-size d-flex justify-content-between flex-wrap w-75">
              {product?.options?.map((option) => (
                <li
                  key={option}
                  className={
                    activeSize === option?.size
                      ? "active cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={() => {
                    handleSizeActive(option?.size);
                  }}
                >
                  {option?.size}
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex align-items-center justify-content-between product-buttons">
            <div className="counter">
              <button className="decrease" onClick={decreaseHandler}>
                -
              </button>
              <span className="amount">{counter}</span>
              <button className="increase" onClick={increaseHandler}>
                +
              </button>
            </div>
            <button className="buy-now">Buy Now</button>
            <CiHeart className="heart cursor-pointer" />
          </div>
          <div className="border mt-4 ">
            <div className="delivery d-flex align-items-center  justify-content-start p-4 border-bottom">
              <img src={iconDelivery} alt="" className="me-4" />
              <div className="content">
                <h3>Free Delivery</h3>
                <NavLink className="text-dark text-decoration-underline">
                  Enter your postal code for Delivery Availability
                </NavLink>
              </div>
            </div>
            <div className="return d-flex align-items-center justify-content-start p-4 ">
              <img src={iconReturn} alt="" className="me-4" />
              <div className="content">
                <h3>Return Delivery</h3>
                Free 30 Days Delivery Returns.
                <NavLink className="text-dark text-decoration-underline">
                  Details
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
