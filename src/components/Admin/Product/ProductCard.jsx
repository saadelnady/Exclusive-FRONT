import React from "react";
import { toast } from "react-toastify";
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
import { ProductOptions } from "./ProductOptions";
import { useDispatch } from "react-redux";
import {
  acceptProduct,
  blockProduct,
} from "../../../store/actions/product/productActions";

export const ProductCard = ({ product, handleWarning, setAction, action }) => {
  const dispatch = useDispatch();

  const handleAceeptProduct = (productId) => {
    const payLoad = { productId, toast, handleWarning };
    dispatch(acceptProduct(payLoad));
  };
  const handleBlockProduct = (productId) => {
    const payLoad = { productId, toast };
    dispatch(blockProduct(payLoad));
  };

  return (
    <div className="product-details col-12 col-md-6 col-lg-7 bg-light rounded py-3">
      <h1 className="py-3 px-4 fw-bold">Product details</h1>

      <div className="d-flex pe-3 mb-3 justify-content-between">
        <div className="links d-flex align-items-center px-4 mb-2">
          <h3 className="fw-bold">{product?.category?.title}</h3>
          {product?.subCategory && (
            <>
              <MdOutlineKeyboardArrowRight className="fs-3" />
              <h3 className="fw-bold"> {product?.subCategory?.title}</h3>
            </>
          )}
        </div>
        {product?.isFlashSale && (
          <div className="d-flex justify-content-center flex-column">
            <h1 className="fw-bold">Flash Sale</h1>

            <h3>
              To <MdOutlineKeyboardArrowRight />
              {product?.flashSaleExpirationDate}
            </h3>
          </div>
        )}
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4.5}
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
      <h2 className="py-3 px-4 fs-1 fw-bold">{product?.title}</h2>
      <p className="pb-3 px-4 description fw-bold">{product?.description}</p>

      <ProductOptions options={product?.options} />
      <div className="d-flex justify-content-end mx-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            handleWarning();
            setAction({
              ...action,
              id: product?._id,
              type: "Accept",
              message: "Are you sure to accept this product ?",
              actionHandler: () => {
                handleAceeptProduct(product?._id);
              },
            });
          }}
        >
          <AiOutlineCheckCircle className="mb-1" />
          Accept
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => {
            handleWarning();
            setAction({
              type: "Block",
              message: "Are you sure to Block this product ?",
              actionHandler: () => {
                handleBlockProduct(product?._id);
              },
            });
          }}
        >
          <MdBlock className="mb-1" />
          Block
        </button>
      </div>
    </div>
  );
};
