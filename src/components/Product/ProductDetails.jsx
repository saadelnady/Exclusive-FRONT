import { NavLink } from "react-router-dom";
import productImg_1 from "../../assets/images/pngs/Gamepad-1.png";
import productImg_2 from "../../assets/images/pngs/Gamepad-2.png";
import productImg_3 from "../../assets/images/pngs/Gamepad-3.png";
import productImg_4 from "../../assets/images/pngs/Gamepad-4.png";
import productImg_5 from "../../assets/images/pngs/Gamepad-5.png";
import iconDelivery from "../../assets/images/pngs/ic-delivery.png";
import iconReturn from "../../assets/images/pngs/ic-return.png";
import stars from "../../assets/images/pngs/ic_stars.png";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import "../../styles/Product.css";

export const ProductDetails = () => {
  const [imgSrc, setImageSrc] = useState(productImg_5);
  const [counter, setCounter] = useState(0);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const handleColorActive = (color) => {
    setActiveColor(color);
  };
  const handleSizeActive = (size) => {
    setActiveSize(size);
  };
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
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container mb-5">
      <div className="links py-5 fs-6 ">
        <NavLink className="fs-5"> Account</NavLink> /
        <NavLink className="fs-5"> Gaming</NavLink> /
        <NavLink className="text-dark fs-5 ms-2">Havic HV G-92 Gamepad</NavLink>
      </div>
      <div className="details row">
        <div className="productSlider d-flex flex-column flex-md-row align-items-center col-12 col-lg-7 justify-content-between">
          <div className="sliderImgs d-flex flex-row flex-md-column h-100 justify-content-between mb-4 mb-md-0 ">
            <div className="bg-light p-4">
              <img
                src={productImg_1}
                alt=""
                className="w-100 h-100 cursor-pointer"
                onClick={(productImg_1) => {
                  handleSliderImage(productImg_1);
                }}
              />
            </div>
            <div className="bg-light p-4">
              <img
                src={productImg_2}
                alt=""
                className="w-100 h-100  cursor-pointer"
                onClick={(productImg_2) => {
                  handleSliderImage(productImg_2);
                }}
              />
            </div>
            <div className="bg-light p-4">
              <img
                src={productImg_3}
                alt=""
                className="w-100 h-100 cursor-pointer"
                onClick={(productImg_3) => {
                  handleSliderImage(productImg_3);
                }}
              />
            </div>
            <div className="bg-light p-4">
              <img
                src={productImg_4}
                alt=""
                className="w-100 w-100 h-100 cursor-pointer"
                onClick={(productImg_4) => {
                  handleSliderImage(productImg_4);
                }}
              />
            </div>
          </div>
          <div className="mainImg bg-light px-2 h-100 d-flex justify-content-center align-items-center">
            <img src={imgSrc} alt="" className="w-100 object-fit-cover" />
          </div>
        </div>
        <div className="product-details col-12 col-lg-4 offset-lg-1 mt-4 mt-lg-0">
          <h2 className="product-name fw-bold mb-3">Havic HV G-92 Gamepad</h2>
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
            <span className="price-amount">150.00</span>
          </div>
          <p className="description border-bottom fs-5 pb-4 mb-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="colors d-flex align-items-center mb-4">
            <p className="me-4 fs-4">Colors :</p>
            <ul className="productColors d-flex justify-content-evenly flex-wrap w-50">
              <li
                data-src="black"
                className={
                  activeColor === "black"
                    ? "black active cursor-pointer"
                    : "black cursor-pointer"
                }
                onClick={() => handleColorActive("black")}
              ></li>
              <li
                data-src="yellow"
                className={
                  activeColor === "yellow"
                    ? "yellow active cursor-pointer"
                    : "yellow cursor-pointer"
                }
                onClick={() => handleColorActive("yellow")}
              ></li>
              <li
                data-src="pink"
                className={
                  activeColor === "pink"
                    ? "pink active cursor-pointer"
                    : "pink cursor-pointer"
                }
                onClick={() => handleColorActive("pink")}
              ></li>
              <li
                data-src="red"
                className={
                  activeColor === "red"
                    ? "red active cursor-pointer"
                    : "red cursor-pointer"
                }
                onClick={() => handleColorActive("red")}
              ></li>
            </ul>
          </div>
          <div className="size d-flex align-items-center mb-4 ">
            <p className="me-4 fs-4">Size :</p>
            <ul className="select-size d-flex justify-content-between flex-wrap w-75">
              <li
                className={
                  activeSize === "XS"
                    ? "active cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  handleSizeActive("XS");
                }}
              >
                XS
              </li>
              <li
                className={
                  activeSize === "S"
                    ? "active cursor-pointer"
                    : " cursor-pointer"
                }
                onClick={() => {
                  handleSizeActive("S");
                }}
              >
                S
              </li>
              <li
                className={
                  activeSize === "M"
                    ? "active cursor-pointer"
                    : " cursor-pointer"
                }
                onClick={() => {
                  handleSizeActive("M");
                }}
              >
                M
              </li>
              <li
                className={
                  activeSize === "L"
                    ? "active cursor-pointer"
                    : " cursor-pointer"
                }
                onClick={() => {
                  handleSizeActive("L");
                }}
              >
                L
              </li>
              <li
                className={
                  activeSize === "XL"
                    ? "active cursor-pointer"
                    : " cursor-pointer"
                }
                onClick={() => {
                  handleSizeActive("XL");
                }}
              >
                XL
              </li>
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
