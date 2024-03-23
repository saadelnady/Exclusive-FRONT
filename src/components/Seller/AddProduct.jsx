import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { IoCloudUploadSharp } from "react-icons/io5";
import { CiSquareRemove } from "react-icons/ci";
import { initialValues, validate } from "../validation/Seller/Addproduct";
import { toast } from "react-toastify";

import "./styles/AddProduct.css";

import { MdError } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ToolTip from "../shared/toolTip";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  fetchProduct,
  editProduct,
} from "../../store/actions/product/productActions";
import { isObjectNotEmpty } from "../../helpers/checkers";
import { serverUrl } from "../../API/API";

export const AddProduct = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const { product } = useSelector((state) => state.productReducer);
  const { seller } = useSelector((state) => state.sellerReducer);
  const [subCategories, setSubCategories] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const [images, setImages] = useState([]);
  const { productId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* ================================================================================================== */

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validate,
  });

  /* ================================================================================================== */

  useEffect(() => {
    if (isObjectNotEmpty(product) && productId && categories.length > 0) {
      const targetCategory = categories.find(
        (cat) => cat._id === product?.category
      );
      setSubCategories(targetCategory.subCategories);
    } else {
      const initialCategory = categories[0] || {};
      formik.setValues({
        ...formik.values,
        isFlashSale: false,
        flashSaleExpirationDate: "",
        status: "PENDING",
        category: initialCategory._id,
        subCategory:
          initialCategory?.subCategories?.length > 0
            ? initialCategory?.subCategories[0]?._id
            : null,
      });
      setSubCategories(initialCategory?.subCategories);
    }
  }, [categories, product, productId, dispatch]);

  useEffect(() => {
    formik.setFieldValue("productOwner", seller._id);
  }, [seller, seller._id, dispatch]);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    } else {
      formik.setValues({
        ...formik.values,

        title: "",
        description: "",
        images: [],
        isFlashSale: false,
        flashSaleExpirationDate: "",
        status: "PENDING",
        options: [
          {
            size: "",
            color: "#FFFFFF",
            stockCount: "0",
            price: {
              priceBeforeDiscount: "",
              discountPercentage: "",
              finalPrice: "",
              discountValue: "",
            },
          },
        ],
      });
      setImages([]);
    }
  }, [productId, categories, dispatch]);

  useEffect(() => {
    if (isObjectNotEmpty(product) && productId) {
      const imagesPaths = product.images.map((img) => `${serverUrl}/${img}`);
      setImages(imagesPaths);
      formik.setValues({
        title: product.title,
        description: product.description,
        images: product.images,
        category: product.category,
        subCategory: product.subCategory,
        productOwner: product.productOwner,
        isFlashSale: product.isFlashSale,
        flashSaleExpirationDate: product.flashSaleExpirationDate,
        status: product.status,
        options: product.options
          ? product.options.map((option) => ({
              size: option.size,
              color: option.color,
              stockCount: option.stockCount,
              price: {
                priceBeforeDiscount: option.price.priceBeforeDiscount,
                discountPercentage: option.price.discountPercentage,
                discountValue: option.price.discountValue,
                finalPrice: option.price.finalPrice,
              },
            }))
          : [],
      });
    } else {
      const initialCategory = categories[0] || {};

      formik.setValues({
        title: "",
        description: "",
        images: [],
        productOwner: seller._id,
        category: initialCategory._id,
        subCategory:
          initialCategory?.subCategories?.length > 0
            ? initialCategory?.subCategories[0]?._id
            : null,
        isFlashSale: false,
        flashSaleExpirationDate: "",
        status: "PENDING",
        options: [
          {
            size: "",
            color: "#FFFFFF",
            stockCount: "0",
            price: {
              priceBeforeDiscount: "",
              discountPercentage: "",
              finalPrice: "",
              discountValue: "",
            },
          },
        ],
      });
    }
  }, [categories, productId, product, dispatch]);

  /* ================================================================================================== */

  const handleSubmit = (values) => {
    if (productId) {
      handleEditProduct(values);
    } else {
      handleAddProduct(values);
    }
  };

  const handleAddProduct = (values) => {
    const formData = new FormData();
    formData.append("title", values?.title);
    formData.append("description", values?.description);
    formData.append("category", values?.category);
    formData.append("subCategory", values?.subCategory);

    formData.append("isFlashSale", values?.isFlashSale);
    formData.append("flashSaleExpirationDate", values?.flashSaleExpirationDate);
    formData.append("status", values?.status);

    // Set productOwner value programmatically
    const productOwnerId = seller?._id; // Assuming seller is available
    formData.append("productOwner", productOwnerId);

    values.images.forEach((image) => {
      formData.append(`images`, image); // Append each file with the same key 'images'
    });

    values.options.forEach((option, index) => {
      // Append option details
      Object.entries(option).forEach(([key, value]) => {
        // If the current value is an object (like 'price'), iterate over its properties
        if (typeof value === "object") {
          Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            formData.append(
              `options[${index}][${key}][${nestedKey}]`,
              nestedValue
            );
          });
        } else {
          formData.append(`options[${index}][${key}]`, value);
        }
      });
    });

    const payload = { formData, toast };
    dispatch(addProduct(payload));
    resetForm();
  };

  const handleEditProduct = (values) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("subCategory", values.subCategory);
    // Set productOwner value programmatically
    const productOwnerId = seller?._id; // Assuming seller is available
    formData.append("productOwner", productOwnerId);

    formData.append("isFlashSale", values?.isFlashSale);
    formData.append("flashSaleExpirationDate", values?.flashSaleExpirationDate);
    formData.append("status", "pending");
    // Append the existing images
    values.images.forEach((image) => {
      formData.append("images", image);
    });

    values.options.forEach((option, index) => {
      Object.entries(option).forEach(([key, value]) => {
        if (typeof value === "object") {
          Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            formData.append(
              `options[${index}][${key}][${nestedKey}]`,
              nestedValue
            );
          });
        } else {
          formData.append(`options[${index}][${key}]`, value);
        }
      });
    });

    const payload = { formData, toast, productId };

    dispatch(editProduct(payload));

    resetForm();
  };

  const resetForm = () => {
    formik.resetForm();
    setTimeout(() => {
      navigate("/Seller/products");
    }, 2000);
  };
  /* ================================================================================================== */

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    const newImages = selectedImages.filter(
      (image) =>
        !images.find((existingImage) => existingImage.name === image.name)
    );

    // Update the images state with the File objects and their object URLs
    setImages([...images, ...newImages]);

    formik.setFieldValue("images", [
      ...(formik.values.images || []),
      ...newImages,
    ]);

    // Clear the file input value to allow re-selecting the same image
    event.target.value = null;
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images]; // Create a copy of the images array
    updatedImages.splice(index, 1); // Remove the image at the specified index

    formik.setFieldValue("images", updatedImages);

    // Update the state with the new array of images
    setImages(updatedImages);
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
      ...formik.values,
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

  const handleIsFlashSale = (e) => {
    const isChecked = e.target.checked;
    formik.setValues({
      ...formik.values,
      isFlashSale: isChecked,
    });
    if (!isChecked) {
      formik.setFieldValue("flashSaleExpirationDate", "");
    }
  };

  const handleFlashSaleExpireDate = (e) => {
    formik.setValues({
      ...formik.values,
      flashSaleExpirationDate: e.target.value,
    });
  };

  /* ================================================================================================== */

  const removeProductOption = (index) => {
    const newOptions = [...formik.values.options];

    newOptions.splice(index, 1);

    formik.setValues({
      ...formik.values,
      options: newOptions?.length > 0 ? newOptions : [],
    });
  };

  const addProductOption = () => {
    formik.setValues({
      ...formik.values,
      options: [
        ...(formik.values.options || []), // Use existing options if available, or start with an empty array
        {
          size: "",
          color: "",
          stockCount: "0",
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

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    // Update formik state with the new color value
    formik.setFieldValue(`options[${index}].${name}`, value);
  };
  /* ================================================================================================== */
  const handleColorChange = (e, index) => {
    const { name, value } = e.target;
    formik.setFieldValue(`options[${index}].${name}`, value);
  };

  /* ================================================================================================== */
  const handlePriceChange = (index, field, value) => {
    const newOptions = [...formik.values.options];
    const option = newOptions[index].price;

    // Update the price field
    option[field] = value;

    if (field === "discountValue") {
      option.discountPercentage =
        value !== "" ? (value / option.priceBeforeDiscount) * 100 : "";
    } else if (field === "discountPercentage") {
      option.discountValue =
        value !== "" ? option.priceBeforeDiscount * (value / 100) : "";
    } else if (
      field === "priceBeforeDiscount" &&
      option.discountPercentage === "" &&
      option.discountValue === ""
    ) {
      option.finalPrice = value;
    }

    // Set the updated values
    formik.setValues({ ...formik.values, options: newOptions });
  };

  const calculateFinalPrice = (
    priceBeforeDiscount,
    discountPercentage,
    discountValue
  ) => {
    const price = parseFloat(priceBeforeDiscount);
    let percentage = parseFloat(discountPercentage);
    const discount = parseFloat(discountValue);

    if (percentage === "" && discount === "") {
      // Both percentage and discount provided, consider only percentage
      return ""; // Return empty string or handle error
    }
    if (isNaN(price)) {
      return "";
    }
    if (price === "0" || (percentage !== "" && percentage === "0")) {
      return price.toFixed(2); // Return price if zero or invalid percentage
    }

    if (
      price &&
      (!percentage || percentage === 0) &&
      (!discount || discount === 0)
    ) {
      return price.toFixed(2); // Return price if zero or invalid percentage
    }
    if (percentage === Infinity) {
      percentage = "";
      return 0;
    }
    if (!isNaN(percentage)) {
      return price * ((100 - percentage) / 100);
    } else if (!isNaN(discount)) {
      return (price - discount).toFixed(2);
    }

    return ""; // Default case, should not occur
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

  const getErrorMessage = (index, key) => {
    const { errors, touched } = formik;

    if (
      (isObjectNotEmpty(errors) && touched?.options?.[index]?.[key]) ||
      touched?.options?.[index]?.price?.[key]
    ) {
      const optionError = errors.optionsErrors?.[index]?.[key];
      if (optionError) {
        return <ToolTip text={optionError} />;
      }
    }

    return "";
  };

  return (
    <div className="bg-light h-100 ">
      <h1 className="fw-bold shadow rounded py-3 px-5 my-3">
        {productId ? "Edit" : "Add"} product
      </h1>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="add-product">
          {/* ================================================================================================== */}
          <div className="add-images item">
            <label
              htmlFor="add-images"
              className="btn btn-danger fs-4 mb-3 mb-xl-0"
            >
              Upload Images <IoCloudUploadSharp />
            </label>
            <input
              type="file"
              id="add-images"
              name="images"
              className="d-none"
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
              multiple
            />
            {formik.touched.images && formik.errors.images ? (
              <p className="text-sm-end">
                <MdError className="fs-3 me-2" />
                {formik.errors.images}
              </p>
            ) : null}
            <div className="d-flex justify-content-end align-items-center flex-wrap ">
              {images &&
                images.map((imgItem, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column align-items-center justify-content-between"
                  >
                    <img
                      src={
                        typeof imgItem === "string"
                          ? imgItem
                          : URL.createObjectURL(imgItem)
                      }
                      alt={`SelectedImages ${index}`}
                    />
                    <CiSquareRemove
                      className="fs-3 cursor-pointer"
                      onClick={() => {
                        handleRemoveImage(index);
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* ================================================================================================== */}
          <div className="add-title item">
            <label htmlFor="title" className="fw-bold fs-4">
              Product title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.title && formik.errors.title ? (
            <p className="text-sm-end">
              <MdError className="fs-3 me-2" />
              {formik.errors.title}
            </p>
          ) : null}

          {/* =================================================================================== */}
          <div className="add-description item">
            <label htmlFor="description" className="fw-bold fs-4">
              Description:
            </label>
            <textarea
              name="description"
              id="description"
              className="col-12  col-sm-8 py-2 px-3 fs-3 special-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            ></textarea>
          </div>
          {formik.touched.description && formik.errors.description && (
            <p className="text-sm-end">
              <MdError className="fs-3 me-2" />
              {formik.errors.description}
            </p>
          )}
          {/* ================================================================================================== */}
          <div className="select-category item">
            <label htmlFor="category" className="fw-bold fs-4">
              Category:
            </label>

            <select
              id="category"
              name="category"
              onChange={handleCategoryChange}
              value={formik.values.category}
              className="col-12  col-sm-8 py-2 px-3 fs-3 special-input"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          {/* ================================================================================================== */}
          <div className="select-subCategory item">
            <label htmlFor="subCategory" className="fw-bold fs-4">
              Sub-category:
            </label>
            <select
              name="subCategory"
              id="subCategory"
              className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
              onChange={handleSubCategoryChange}
              value={formik?.values?.subCategory} //
            >
              {subCategories?.map((subCat, index) => (
                <option key={index} value={subCat._id}>
                  {subCat?.title}
                </option>
              ))}
            </select>
          </div>
          {/* ================================================================================================== */}
          <div className="flash-Sale item">
            <label htmlFor="flashSale" className="fw-bold fs-4">
              Flash sale:
              <input
                type="checkbox"
                id="flashSale"
                name="isFlashSale"
                className="toggle-checkbox"
                value={formik?.values?.isFlashSale}
                onChange={handleIsFlashSale}
                checked={formik.values.isFlashSale}
              />
            </label>

            {formik.values.isFlashSale && (
              <input
                name="flashSaleExpirationDate"
                onBlur={formik.handleBlur}
                type="date"
                className="col-12 col-sm-7 col-lg-8 py-2 px-3 fs-3 special-input"
                onChange={handleFlashSaleExpireDate}
                value={formik?.values?.flashSaleExpirationDate}
              />
            )}
          </div>
          {formik.touched.flashSaleExpirationDate &&
            formik.errors.flashSaleExpirationDate &&
            formik.values.isFlashSale && (
              <p className="text-sm-end">
                <MdError className="fs-3 me-2" />
                {formik.errors.flashSaleExpirationDate}
              </p>
            )}
          {/* ================================================================================================== */}
          <h3 className="text-center fw-bold my-3">Product options</h3>
          {/* ================================================================================================== */}

          <div className="options-table">
            <button onClick={addProductOption} className="add-option ">
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
                {formik?.values?.options?.map((row, index) => (
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
                      {getErrorMessage(index, "color")}
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
                      {getErrorMessage(index, "size")}
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-12 text-center"
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
                      {getErrorMessage(index, "priceBeforeDiscount")}
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-12 text-center"
                        name="discountPercentage"
                        onBlur={formik?.handleBlur}
                        value={
                          formik?.values?.options[index]?.price
                            ?.discountPercentage === Infinity
                            ? ""
                            : formik?.values?.options[index]?.price
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
                      {getErrorMessage(index, "discountPercentage")}
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-12 text-center"
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
                      {getErrorMessage(index, "discountValue")}
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
                    <td className="counter ">
                      <div className="d-flex justify-content-center">
                        <button
                          className="decrease"
                          onClick={(e) => handleDecrease(e, index)}
                        >
                          -
                        </button>
                        <input
                          name="stockCount"
                          type="text"
                          className="fs-3 special-input col-6  text-center"
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
                      </div>
                      {getErrorMessage(index, "stockCount")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ================================================================================================== */}

          <button className="btn p-3 fs-4 submit" type="submit">
            {productId ? "Edit" : "Add"} product
          </button>
        </form>
      </div>
    </div>
  );
};
