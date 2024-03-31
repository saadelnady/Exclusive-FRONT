import React from "react";
import { serverUrl } from "../../../API/API";

const ProductSlider = ({ images }) => {
  return (
    <div className="productSlider d-flex flex-column flex-md-row align-items-center col-12 col-lg-7 justify-content-between">
      <div className="sliderImgs d-flex flex-row flex-md-column h-100 justify-content-between mb-4 mb-md-0 ">
        {images?.map((img, index) => {
          return (
            <div className="bg-light p-4" key={index}>
              <img
                src={`${serverUrl}/${img}`}
                alt=""
                className="w-100 h-100 cursor-pointer"
                onClick={(productImg_1) => {
                  //   handleSliderImage(productImg_1);
                }}
              />
            </div>
          );
        })}

        {/* <div className="bg-light p-4">
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
        </div> */}
      </div>
      <div className="mainImg bg-light px-2 h-100 d-flex justify-content-center align-items-center">
        <img
          //   src={`${serverUrl}/${images[0]}`}
          alt=""
          className="w-100 object-fit-cover"
        />
      </div>
    </div>
  );
};

export default ProductSlider;
