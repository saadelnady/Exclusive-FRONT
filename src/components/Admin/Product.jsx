import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/actions/product/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../shared/Loading";
import { serverUrl } from "../../API/API";
import { formatDateAndTime } from "../../helpers/formated_date_time";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Product = () => {
  const { product, isLoading } = useSelector((state) => state.productReducer);
  const { productOwner } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("productOwner ---->", productOwner);
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-4 bg-light">
            <h1>Product Owner</h1>
            <img
              src={`${serverUrl}/${productOwner.image}`}
              alt=""
              className="w-100"
            />
            <div>
              <p>Seller name :</p>
              <h3>{`${productOwner.firstName} ${productOwner.lastName}`}</h3>
            </div>
            <div>
              <p>Seller email :</p>
              <h3>{`${productOwner.email}`} </h3>
            </div>
            <div>
              <p>Date of join :</p>
              <h3>{`${formatDateAndTime(productOwner.createdAt)}`} </h3>
            </div>
          </div>
          <div className="col-6">
            <h1>Product details</h1>
            <h3>Product Images</h3>

            <Swiper
              spaceBetween={5}
              slidesPerView={2.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
              pagination={{ clickable: true }}
            >
              {product?.images.map((img) => {
                return (
                  <SwiperSlide>
                    <img
                      src={`${serverUrl}/${img}`}
                      alt="productImg"
                      className="w-100"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <h3>{product.title}</h3>
            <p>{product.description}</p>

            <h3>{product.category}</h3>
            <h3>{product.subCategory}</h3>
          </div>
        </div>
      )}
    </>
  );
};
