import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";

export const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productImages: [],
    productDescription: "",
    productColors: [],
    productSizes: [],
    price: {
      priceBeforeDiscount: "",
      discountPercentage: "",
      finalPrice: "",
      discountValue: "",
    },
    category: "",
    subCategory: "",
  });
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(0);
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
  const handleImageChange = (event) => {
    const selectedImages = event.target.files;
    setImages([...images, ...selectedImages]);
  };

  console.log(images);

  return (
    <div className="bg-light h-100">
      <div className="container">
        <h1>Add product</h1>
        <form className="add-product">
          <div className="d-flex justify-content-between align-items-center  flex-wrap">
            <label htmlFor="add-images" className="btn btn-danger">
              Add product Images <FaPlus />
            </label>{" "}
            :
            <input
              type="file"
              id="add-images"
              className="d-none"
              onChange={handleImageChange}
              name="productImages"
              multiple // Allow selecting multiple images
            />
            <div className="d-flex justify-content-evenly align-items-center w-75 flex-wrap">
              {images.length > 0 &&
                images.length <= 10 &&
                images.map((imgItem, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column align-items-center"
                  >
                    <img
                      src={URL.createObjectURL(imgItem)}
                      alt={`Selected Image ${index}`}
                      width={80}
                    />
                    <CiCircleRemove className="fs-3" />
                  </div>
                ))}
              {images.length > 10 && (
                <p>You should not add more than 10 photos</p>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="productName">Product Name :</label>
            <input
              type="text"
              id="productName"
              className="form-control w-75"
              name="productName"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label htmlFor="description">Description :</label>
            <textarea
              name="productDescription"
              id="description"
              className="form-control w-75"
            ></textarea>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label htmlFor="category">Product category :</label>
            <div className="w-75">
              <input
                name="category"
                id="category"
                className="form-control w-50 "
                type="select"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label htmlFor="subCategory">Product sub category :</label>
            <div className="w-75">
              <input
                name="subCategory"
                id="subCategory"
                className="form-control w-50"
                type="select"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label htmlFor="productColors">Product Colors :</label>
            <div className="w-75">
              <input
                name="productColors"
                id="productColors"
                className=""
                type="color"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label htmlFor="productSizes">Product Sizes :</label>
            <div className="d-flex justify-content-between  w-75">
              {sizes.map((size, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="productSizes"
                    id={`size${size}`}
                    value={size}
                  />
                  <label htmlFor={`size${size}`}>{size}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label htmlFor="ProductPrice">Price :</label>
            <div className="w-75 d-flex flex-wrap">
              <div className="d-flex align-items-center w-25">
                <label htmlFor="priceBeforeDiscount">
                  Price before discount :
                </label>
                <input
                  type="text"
                  name="priceBeforeDiscount"
                  id="priceBeforeDiscount"
                  className="form-control w-25"
                />
              </div>
              <div className="d-flex align-items-center w-25">
                <label htmlFor="discountPercentage">Discount percentage:</label>
                <input
                  type="text"
                  name="discountPercentage"
                  id="discountPercentage"
                  className="form-control w-25"
                />
              </div>

              <div className="d-flex align-items-center  w-25">
                <label htmlFor="discountValue">Discount value:</label>
                <input
                  type="text"
                  name="discountValue"
                  id="discountValue"
                  className="form-control w-25"
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
          <div className="d-flex align-items-center justify-content-between  ">
            Stock Count
            <div className="counter w-75">
              <button className="decrease" onClick={decreaseHandler}>
                -
              </button>
              <span className="amount">{counter}</span>
              <button className="increase" onClick={increaseHandler}>
                +
              </button>
            </div>
          </div>
          <button className="btn btn-danger"> add product</button>
        </form>
      </div>
    </div>
  );
};
