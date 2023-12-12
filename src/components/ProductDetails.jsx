import { NavLink, useParams } from "react-router-dom";
import "../styles/Product.css";
import productImg_1 from "../assets/images/pngs/Gamepad-1.png";
import productImg_2 from "../assets/images/pngs/Gamepad-2.png";
import productImg_3 from "../assets/images/pngs/Gamepad-3.png";
import productImg_4 from "../assets/images/pngs/Gamepad-4.png";
import productImg_5 from "../assets/images/pngs/Gamepad-5.png";
import stars from "../assets/images/pngs/ic_stars.png";
import { useState } from "react";

export const ProductDetails = () => {
  const [imgSrc, setImageSrc] = useState(productImg_5);
  const [counter, setCounter] = useState(0);
  // const id = useParams();
  const handleSliderImage = (e) => {
    const currentImg = e.target.src;
    setImageSrc(currentImg);
  };
  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="container">
      <div className="py-5 fs-4">
        <NavLink className="links text-dark"> Account</NavLink> /
        <NavLink className="links text-dark"> Gaming</NavLink> /
        <NavLink className="links text-dark"> Havic HV G-92 Gamepad</NavLink>
      </div>
      <div className="details row">
        <div className="productSlider d-flex flex-column flex-md-row align-items-center justify-content-between col-12 col-lg-6 ">
          <div className="sliderImgs d-flex flex-row flex-md-column">
            <div className="bg-light  p-3 mb-2">
              <img
                src={productImg_1}
                alt=""
                className="w-100"
                onClick={(productImg_1) => {
                  handleSliderImage(productImg_1);
                }}
              />
            </div>
            <div className="bg-light p-3 mb-2">
              <img
                src={productImg_2}
                alt=""
                className="w-100"
                onClick={(productImg_2) => {
                  handleSliderImage(productImg_2);
                }}
              />
            </div>
            <div className="bg-light p-3 mb-2">
              <img
                src={productImg_3}
                alt=""
                className="w-100"
                onClick={(productImg_3) => {
                  handleSliderImage(productImg_3);
                }}
              />
            </div>
            <div className="bg-light p-3 mb-2 ">
              <img
                src={productImg_4}
                alt=""
                className="w-100 cursor"
                onClick={(productImg_4) => {
                  handleSliderImage(productImg_4);
                }}
              />
            </div>
          </div>
          <div className=" mainImg bg-light px-2 h-100 d-flex justify-content-center align-items-center">
            <img src={imgSrc} alt="" className="w-100  object-fit-cover" />
          </div>
        </div>
        <div className="product-details col-12 col-lg-5 offset-lg-1 ">
          <h1 className="product-name ">Havic HV G-92 Gamepad</h1>

          <div className="d-flex align-items-center">
            <div className="rating border-end d-flex align-items-center">
              <img src={stars} alt="" />
              <p>
                (<span>150 </span>Reviews)
              </p>
            </div>
            <p>In Stock</p>
          </div>
          <div className="price">
            <span>$</span>
            <span className="price-amount">150.00</span>
          </div>
          <p className="description border-bottom">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="colors">
            <span>Colors :</span>
          </div>
          <div className="sizes">
            <span>Size :</span>
          </div>
          <div className="d-flex">
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
          </div>
        </div>
      </div>
    </div>
  );
};
