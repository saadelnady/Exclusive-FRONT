import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { IoCloudUploadSharp } from "react-icons/io5";
import { CiSquareRemove } from "react-icons/ci";
import { initialValues, validate } from "../validation/Seller/Addproduct";
import "./styles/AddProduct.css";
import { MdError } from "react-icons/md";
import { useSelector } from "react-redux";

export const AddProduct = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const { seller } = useSelector((state) => state.sellerReducer);

  /* ================================================================================================== */

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmition(values);
    },
    validate,
  });

  /* ================================================================================================== */
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      const initialCategory = categories[0];
      formik.setValues({
        category: initialCategory._id,
        subCategory:
          initialCategory.subCategories.length > 0
            ? initialCategory.subCategories[0]._id
            : null,
      });
      setSubCategories(initialCategory.subCategories);
    }
  }, [categories]);

  useEffect(() => {
    formik.setFieldValue("productOwner", seller?._id);
  }, [seller]);

  const handleSubmition = (values) => {
    // Access the images from Formik values
    // const images = formik.values.images;
    // console.log(formik.values.title);
    // console.log(formik.values.description);
    // console.log("Uploaded images:", images);

    // console.log("subCategory:", formik.values.subCategory);
    // console.log("formik.values", formik.values);

    console.log("formik.values", values);
  };

  /* ================================================================================================== */
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    console.log("selectedImages -------->", selectedImages);
    setImages([...images, ...selectedImages]);
    const existingImages = Array.isArray(formik.values.images)
      ? formik.values.images
      : [];
    formik.setFieldValue("images", [...existingImages, ...selectedImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    formik.setFieldValue("images", updatedImages);
  };
  /* ================================================================================================== */

  // Update sub-categories when a category is selected
  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;

    const targetCategory = categories.find(
      (cat) => cat._id === selectedCategoryId
    );
    setSubCategories(targetCategory.subCategories);

    formik.setFieldValue("category", targetCategory._id);
    formik.setValues({
      category: targetCategory._id,
      subCategory:
        targetCategory.subCategories.length > 0
          ? targetCategory.subCategories[0]._id
          : null,
    });
  };

  /* ================================================================================================== */

  const handleSubCategoryChange = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  /* ================================================================================================== */

  const removeProductOption = (index) => {
    const newOptions = [...formik.values.options];

    newOptions.splice(index, 1);
    console.log("newOptions---------------->", newOptions);

    formik.setValues({
      ...formik.values,
      options: newOptions?.length > 0 ? newOptions : [],
    });
  };

  const addProductOption = () => {
    formik.setValues({
      ...formik.values,
      options: [
        ...formik.values.options,
        {
          size: "",
          color: "#000000",
          stockCount: 0,
          price: {
            priceBeforeDiscount: "",
            discountPercentage: "",
            finalPrice: "",
            discountValue: "",
          },
        },
      ],
    });
  };
  /* ================================================================================================== */
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;

    // Update formik state with the new color value
    formik.setFieldValue(`options[${index}].${name}`, value);
  };
  /* ================================================================================================== */
  const handleColorChange = (e, index) => {
    const { name, value } = e.target;

    if (value && /^#[0-9A-F]{6}$/i.test(value)) {
      formik.setFieldValue(`options[${index}].${name}`, value);
    } else {
      console.error("Invalid or empty color value");
    }
  };

  /* ================================================================================================== */
  const handlePriceChange = (index, field, value) => {
    const newOptions = [...formik.values.options];
    newOptions[index].price[field] = value;
    formik.setValues({ ...formik.values, options: newOptions });

    // Check if priceBeforeDiscount and either discountPercentage or discountValue are provided
    const { priceBeforeDiscount, discountPercentage, discountValue } =
      newOptions[index].price;

    // Calculate discountPercentage if discountValue is provided
    if (
      field === "discountValue" &&
      priceBeforeDiscount !== "" &&
      value !== ""
    ) {
      const calculatedDiscountPercentage =
        ((priceBeforeDiscount - value) / priceBeforeDiscount) * 100;
      newOptions[index].price.discountPercentage = calculatedDiscountPercentage;
      formik.setValues({ ...formik.values, options: newOptions });
    }

    // Calculate discountValue if discountPercentage is provided
    if (
      field === "discountPercentage" &&
      priceBeforeDiscount !== "" &&
      value !== ""
    ) {
      const calculatedDiscountValue = priceBeforeDiscount * (value / 100);
      newOptions[index].price.discountValue =
        calculatedDiscountValue.toFixed(2);
      formik.setValues({ ...formik.values, options: newOptions });
    }

    // Recalculate the final price
    if (
      priceBeforeDiscount !== "" &&
      (discountPercentage !== "" || discountValue !== "")
    ) {
      const finalPrice = calculateFinalPrice(
        priceBeforeDiscount,
        discountPercentage,
        discountValue
      );
      newOptions[index].price.finalPrice = finalPrice;
      formik.setValues({ ...formik.values, options: newOptions });
    }
  };

  const calculateFinalPrice = (
    priceBeforeDiscount,
    discountPercentage,
    discountValue
  ) => {
    // Convert input values to numbers
    const price = parseFloat(priceBeforeDiscount);
    const percentage = parseFloat(discountPercentage);
    const discount = parseFloat(discountValue);

    // Check if all required values are provided
    if (isNaN(price) || (isNaN(percentage) && isNaN(discount))) {
      return ""; // Return empty string if any required value is not provided or not a number
    }

    // Calculate the discounted amount based on discount percentage or discount value
    let discountedAmount = 0;
    if (!isNaN(percentage)) {
      discountedAmount = price * (percentage / 100);
    } else if (!isNaN(discount)) {
      discountedAmount = discount;
    }

    // Calculate the final price
    const finalPrice = price - discountedAmount;

    // Return the final price rounded to 2 decimal places
    return finalPrice.toFixed(2);
  };

  /* ================================================================================================== */
  const handleDecrease = (e, index) => {
    e.preventDefault();
    let newOptions = [...formik.values.options];
    const currentStockCount = parseInt(newOptions[index]?.stockCount);
    if (!isNaN(currentStockCount) && currentStockCount > 0) {
      newOptions[index].stockCount = currentStockCount - 1;
      formik.setValues({
        ...formik.values,
        options: newOptions,
      });
    }
  };

  const handleIncrease = (e, index) => {
    e.preventDefault();
    let newOptions = [...formik.values.options];
    const currentStockCount = parseInt(newOptions[index]?.stockCount);
    if (!isNaN(currentStockCount)) {
      newOptions[index].stockCount = currentStockCount + 1;
      formik.setValues({
        ...formik?.values,
        options: newOptions,
      });
    }
  };

  /* ================================================================================================== */
  const handleStockCountChange = (e, index) => {
    const { value } = e.target;
    let newOptions = [...formik?.values?.options];
    formik.handleChange(e);
    newOptions[index].stockCount = value;
    formik.setValues({
      ...formik?.values,
      options: newOptions,
    });
  };

  /* ================================================================================================== */

  return (
    <div className="bg-light h-100 ">
      <h1 className="fw-bold shadow rounded py-3 px-5 my-3">Add product</h1>
      <div className="container">
        <form onSubmit={formik?.handleSubmit} className="add-product">
          {/* ================================================================================================== */}

          <div className="add-images d-flex flex-wrap">
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
              // onBlur={formik?.handleBlur}
              name="images"
              multiple
            />
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
              {images.map((imgItem, index) => {
                console.log(images.length);
                return (
                  <div
                    key={index}
                    className="d-flex flex-column align-items-center justify-content-between"
                  >
                    <img
                      src={URL.createObjectURL(imgItem)}
                      alt={`SelectedImage`}
                    />

                    <CiSquareRemove
                      className="fs-3 cursor-pointer"
                      onClick={() => {
                        handleRemoveImage(index);
                      }}
                    />
                  </div>
                );
              })}
              {formik?.errors?.images ? (
                <p>
                  <MdError className="fs-3 me-2" />
                  {formik?.errors?.images}
                </p>
              ) : null}
            </div>
          </div>

          {/* ================================================================================================== */}

          <div className="add-title">
            <label htmlFor="title" className="fw-bold fs-4">
              Product title :
            </label>
            <input
              type="text"
              id="title"
              className=" col-12 col-sm-8 py-2 px-3 fs-3  special-input"
              name="title"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.title}
            />
          </div>
          {formik?.touched?.title && formik?.errors?.title ? (
            <p className="text-sm-end">
              <MdError className="fs-3 me-2" />
              {formik?.errors?.title}
            </p>
          ) : null}
          {/* ================================================================================================== */}

          <div className="add-description">
            <label htmlFor="description" className="fw-bold fs-4">
              Description :
            </label>
            <textarea
              name="description"
              id="description"
              className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.description}
            ></textarea>
          </div>
          {formik?.touched?.description && formik?.errors?.description ? (
            <p className="text-sm-end">
              <MdError className="fs-3 me-2" />
              {formik?.errors?.description}
            </p>
          ) : null}
          {/* ================================================================================================== */}
          <div className="select-category">
            <label htmlFor="category" className="fw-bold fs-4">
              Category:
            </label>

            <select
              id="category"
              name="category"
              onChange={handleCategoryChange}
              className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          {/* ================================================================================================== */}
          <div className="select-subCategory">
            <label htmlFor="subCategory" className="fw-bold fs-4">
              Sub-category:
            </label>
            <select
              name="subCategory"
              id="subCategory"
              className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
              onChange={handleSubCategoryChange}
              value={formik?.values?.subCategory}
            >
              {subCategories?.map((subCat, index) => (
                <option key={index} value={subCat._id}>
                  {subCat?.title}
                </option>
              ))}
            </select>
          </div>

          {/* ================================================================================================== */}
          <h3 className="text-center fw-bold my-3">Product options</h3>
          {/* ================================================================================================== */}
          {/* <div className="options-table">
            <button onClick={addProductOption} className="add-option">
              +
            </button>
            <table>
              <thead>
                <tr>
                  <th rowSpan="2">Color</th>
                  <th rowSpan="2">Size</th>
                  <th colSpan="4">Price</th>
                  <th rowSpan="2">Stock Count</th>
                </tr>
                <tr>
                  <th>Price before discount</th>
                  <th>Discount percentage</th>
                  <th>Discount Value</th>
                  <th>Final price</th>
                </tr>
              </thead>
              <tbody>
                {formik.values.options.map((row, index) => (
                  <tr key={index} className="option-row">
                    <td>
                      {formik.values.options.length > 1 && (
                        <button
                          onClick={() => removeProductOption(index)}
                          className="remove-option-row"
                        >
                          -
                        </button>
                      )}

                      <input
                        type="color"
                        name="color"
                        onChange={(e) => {
                          handleColorChange(e, index);
                        }}
                        onBlur={formik?.handleBlur}
                        value={formik?.values?.options[index]?.color}
                      />
                    </td>
                    <td>
                      <select
                        name="size"
                        id=""
                        className="fs-5 py-2 special-input"
                        value={formik?.values?.options[index]?.size}
                        onBlur={formik?.handleBlur}
                        onChange={(e) => {
                          handleSizeChange(e, index);
                        }}
                      >
                        <option key={index}>select size</option>
                        {sizes.map((size, index) => (
                          <option key={index}>{size}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-8 text-center"
                        name="priceBeforeDiscount"
                        onBlur={formik?.handleBlur}
                        value={
                          formik?.values?.options[index]?.price
                            ?.priceBeforeDiscount
                        }
                        onChange={(e) =>
                          handlePriceChange(
                            index,
                            "priceBeforeDiscount",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-8 text-center"
                        name="discountPercentage"
                        onBlur={formik?.handleBlur}
                        value={
                          formik?.values?.options[index]?.price
                            ?.discountPercentage
                        }
                        onChange={(e) =>
                          handlePriceChange(
                            index,
                            "discountPercentage",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-8 text-center"
                        name="discountValue"
                        onBlur={formik?.handleBlur}
                        value={
                          formik?.values?.options[index]?.price?.discountValue
                        }
                        onChange={(e) =>
                          handlePriceChange(
                            index,
                            "discountValue",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="fs-4 fw-bold">
                      <span className="final">
                        {calculateFinalPrice(
                          formik.values.options[index]?.price
                            ?.priceBeforeDiscount || "",
                          formik.values.options[index]?.price
                            ?.discountPercentage || "",
                          formik.values.options[index]?.price?.discountValue ||
                            ""
                        )}
                      </span>
                      L.E
                    </td>
                    <td className="counter">
                      <button
                        className="decrease"
                        onClick={(e) => handleDecrease(e, index)}
                      >
                        -
                      </button>
                      <input
                        name="stockCount"
                        type="text"
                        className="fs-3 special-input col-5 text-center"
                        value={formik?.values?.options[index]?.stockCount}
                        onBlur={formik.handleBlur}
                        onChange={(e) => handleStockCountChange(e, index)}
                      />
                      <button
                        className="increase"
                        onClick={(e) => handleIncrease(e, index)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {formik?.touched?.color && formik?.errors?.color ? (
            <p className="text-center my-4 fs-5">
              <MdError className="fs-3 me-2" />
              {formik?.errors?.color}
            </p>
          ) : null}
          {formik?.touched?.priceBeforeDiscount &&
            formik.errors.priceBeforeDiscount && (
              <p className="text-center my-4 fs-5">
                <MdError className="fs-3 me-2" />
                {formik?.errors?.priceBeforeDiscount}
              </p>
            )}
          {formik?.touched?.discountPercentage && formik.errors.price && (
            <p className="text-center my-4 fs-5">
              <MdError className="fs-3 me-2" />
              {formik?.errors?.price}
            </p>
          )}

          {formik.touched.options &&
            formik.errors.options &&
            formik.errors.options.stockCount && (
              <p className="text-center my-4 fs-5">
                <MdError className="fs-3 me-2" />
                {formik.errors.options.stockCount}
              </p>
            )} */}

          {/* ================================================================================================== */}

          <input
            className="btn p-3 fs-4 submit"
            type="submit"
            value={" Add Product"}
          />
        </form>
      </div>
    </div>
  );
};
