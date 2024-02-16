import React, { useState } from "react";
import { useFormik } from "formik";
import { IoCloudUploadSharp } from "react-icons/io5";
import { CiCircleRemove, CiSquareRemove } from "react-icons/ci";
import { initialValues, validate } from "../validation/Seller/Addproduct";
import "./styles/AddProduct.css";
import { MdError } from "react-icons/md";
import { useSelector } from "react-redux";

export const AddProduct = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  console.log("categories ------->", categories);

  const [images, setImages] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  const handleImageChange = (event) => {
    const selectedImages = event.target.files;
    setImages([...images, ...selectedImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const increaseHandler = () => {
    formik.setFieldValue("stockCount", formik.values.stockCount + 1);
  };

  const decreaseHandler = () => {
    formik.setFieldValue(
      "stockCount",
      formik.values.stockCount > 0 ? formik.values.stockCount - 1 : 0
    );
  };

  return (
    <div className="bg-light h-100 ">
      <h1 className="fw-bold shadow rounded py-3 px-5 my-3">Add product</h1>
      <div className="container ">
        <form onSubmit={formik.handleSubmit} className="add-product">
          <div className="add-images d-flex flex-wrwap">
            <label
              htmlFor="add-images"
              className="btn btn-danger fs-4 mb-3 mb-xl-0"
            >
              Upload Images <IoCloudUploadSharp className="" />
            </label>

            <input
              type="file"
              id="add-images"
              className="d-none"
              onChange={handleImageChange}
              name="images"
              multiple
            />
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
              {images.map((imgItem, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center justify-contnet-between "
                >
                  <img
                    src={URL.createObjectURL(imgItem)}
                    alt={`SelectedImage-${index}`}
                  />

                  <CiSquareRemove
                    className="fs-3 cursor-pointer"
                    onClick={() => {
                      handleRemoveImage(index);
                    }}
                  />
                </div>
              ))}
              {images.length > 10 && (
                <p>
                  <MdError className="fs-3 me-2" />
                  You should not add more than 10 photos
                </p>
              )}
            </div>
          </div>
          <div className="add-title">
            <label htmlFor="title" className="fw-bold fs-4">
              Product title :
            </label>
            <input
              type="text"
              id="title"
              className=" col-12 col-sm-8 py-2 px-3 fs-3  spcial-input"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className="">
            <label htmlFor="description" className="fw-bold fs-4">
              Description :
            </label>
            <textarea
              name="description"
              id="description"
              className="col-12 col-sm-8 py-2 px-3 fs-3 spcial-input"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
          </div>
          <div className=" ">
            <label htmlFor="category" className="fw-bold fs-4">
              category :
            </label>

            <select
              name="category"
              id="category"
              className="col-12 col-sm-8 py-2 px-3 fs-3 spcial-input"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              {categories.map((cat, index) => {
                return <option key={index}>{cat?.title}</option>;
              })}
            </select>
          </div>
          <div className="">
            <label htmlFor="subCategory" className="fw-bold fs-4">
              sub category :
            </label>

            <select
              name="subCategory"
              id="subCategory"
              className="col-12 col-sm-8 py-2 px-3 fs-3 spcial-input"
              onChange={formik.handleChange}
              value={formik.values.subCategory}
            >
              {categories.map((cat, index) => {
                return <option key={index}>{cat?.title}</option>;
              })}
            </select>
          </div>
          <div className="">
            <label htmlFor="colors" className="fw-bold fs-4">
              Product Colors :
            </label>
            <div className="w-75">
              <input name="colors" id="colors" className="" type="color" />
            </div>
          </div>
          <div className="">
            <label htmlFor="sizes" className="fw-bold fs-4">
              Product Sizes :
            </label>
            <div className="d-flex justify-content-between  w-75">
              {sizes.map((size, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="sizes"
                    id={`size${size}`}
                    value={size}
                  />
                  <label htmlFor={`size${size}`}>{size}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <label htmlFor="ProductPrice" className="fw-bold fs-4">
              Price :
            </label>
            <div className="w-75 d-flex flex-wrap">
              <div className="d-flex align-items-center w-25">
                <label htmlFor="priceBeforeDiscount" className="fw-bold fs-4">
                  Price before discount :
                </label>
                <input
                  type="text"
                  name="priceBeforeDiscount"
                  id="priceBeforeDiscount"
                  className="form-control  col-5"
                  onChange={formik.handleChange}
                  value={formik.values.priceBeforeDiscount}
                />
              </div>
              <div className="d-flex align-items-center w-25">
                <label htmlFor="discountPercentage" className="fw-bold fs-4">
                  Discount percentage:
                </label>
                <input
                  type="text"
                  name="discountPercentage"
                  id="discountPercentage"
                  className="form-control w-25"
                  onChange={formik.handleChange}
                  value={formik.values.discountPercentage}
                />
              </div>

              <div className="d-flex align-items-center  w-25">
                <label htmlFor="discountValue" className="fw-bold fs-4">
                  Discount value:
                </label>
                <input
                  type="text"
                  name="discountValue"
                  id="discountValue"
                  className="form-control w-25"
                  onChange={formik.handleChange}
                  value={formik.values.discountValue}
                />
              </div>
              <div className="d-flex align-items-center  w-25">
                <label htmlFor="finalPrice">Final Price:</label>
                <span
                  name="finalPrice"
                  id="finalPrice"
                  className="d-inline-block w-25"
                ></span>
              </div>
            </div>
          </div>
          <div className="">
            <label htmlFor="ProductPrice" className="fw-bold fs-4">
              Price :
            </label>{" "}
            <div className="counter w-75">
              <button className="decrease" onClick={decreaseHandler}>
                -
              </button>
              <input
                type="text"
                value={formik.values.stockCount}
                onChange={formik.handleChange}
              />
              <button className="increase" onClick={increaseHandler}>
                +
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-danger">
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};
