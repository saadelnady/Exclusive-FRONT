import React from "react";

import { MdBlock, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { serverUrl } from "../../../API/API";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-details col-12 col-md-4 col-lg-7 bg-light rounded py-3">
      <h1 className="py-3 px-4">Product details</h1>
      <div className="links d-flex align-items-center px-4 mb-2">
        <h3 className="active">{product?.category?.title}</h3>
        {product?.subCategory && (
          <>
            <MdOutlineKeyboardArrowRight className="fs-3" />
            <h3> {product?.subCategory?.title}</h3>
          </>
        )}
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {product?.images?.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`${serverUrl}/${img}`}
                alt="productImg"
                className="cursor-pointer w-100 rounded"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h3 className="py-3 px-4">{product?.title}</h3>
      <p className="pb-3 px-4">{product?.description}</p>
      <div className="d-flex ">
        Size:
        {product?.options?.map((option, index) => {
          return <p key={index}>{option.size}</p>;
        })}
      </div>
      <div>
        Color:
        {product?.options?.map((option, index) => {
          return (
            <div key={index}>
              <p>
                <span
                  style={{
                    backgroundColor: option.color,
                    width: "100px",
                    height: "100px",
                    display: "block",
                  }}
                ></span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-end mx-4">
        <button className="btn btn-primary">
          <AiOutlineCheckCircle />
          Accept
        </button>
        <button className="btn btn-danger ms-2">
          <MdBlock />
          Block
        </button>
      </div>
    </div>
  );
};
