import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { IoCloudUploadSharp } from "react-icons/io5";
import { CiSquareRemove } from "react-icons/ci";
import { initialValues, validate } from "../../Validation/Seller/Addproduct";
import { toast } from "react-toastify";

import "./styles/AddProduct.css";

import { useDispatch, useSelector } from "react-redux";
import ToolTip from "../../Shared/toolTip";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  fetchProduct,
  editProduct,
} from "../../../store/actions/product/productActions";
import { isObjectNotEmpty } from "../../../helpers/checkers";
import { serverUrl } from "../../../API/API";
import ErrorMessage from "../../Shared/ErrorMessage";
import { productStatus } from "../../../helpers/options";

const AddProduct = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const { product } = useSelector((state) => state.productReducer);
  const { seller } = useSelector((state) => state.sellerReducer);
  const [subCategories, setSubCategories] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
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
        (cat) => cat._id === product?.category?._id
      );
      setSubCategories(targetCategory?.subCategories);
    } else {
      const initialCategory = categories[0] || {};
      formik.setValues({
        ...formik.values,
        isFlashSale: false,
        // flashSaleExpirationDate: "",
        status: productStatus.PENDING,
        category: initialCategory?._id,
        subCategory:
          initialCategory?.subCategories?.length > 0
            ? initialCategory?.subCategories[0]?._id
            : null,
      });
      setSubCategories(initialCategory?.subCategories);
    }
  }, [categories, product, productId, dispatch]);

  useEffect(() => {
    formik.setFieldValue("productOwner", seller?._id);
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

        status: productStatus.PENDING,
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
  }, [productId, categories, dispatch]);

  useEffect(() => {
    if (isObjectNotEmpty(product) && productId) {
      formik.setValues({
        title: product.title,
        description: product.description,
        images: product.images,
        category: product.category?._id,
        subCategory: product?.subCategory?._id,
        productOwner: product.productOwner,
        isFlashSale: product.isFlashSale,
        flashSaleStartDate: product.flashSaleStartDate
          ? new Date(product.flashSaleStartDate)
          : null,
        flashSaleEndDate: product.flashSaleEndDate
          ? new Date(product.flashSaleEndDate)
          : null,
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
        // flashSaleExpirationDate: "",
        flashSaleStartDate: null,
        flashSaleEndDate: null,
        status: productStatus.PENDING,
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

    if (values?.isFlashSale === true) {
      formData.append("isFlashSale", values?.isFlashSale);
      formData.append(
        "flashSaleStartDate",
        values?.flashSaleStartDate.toISOString()
      );
      formData.append(
        "flashSaleEndDate",
        values?.flashSaleEndDate.toISOString()
      );
    }

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
            // Check if the nested key is 'discountPercentage' or 'finalPrice'
            if (
              nestedKey === "discountPercentage" ||
              nestedKey === "finalPrice"
            ) {
              // Check if the value exists and is not null or undefined
              if (nestedValue !== null && nestedValue !== undefined) {
                formData.append(
                  `options[${index}][${key}][${nestedKey}]`,
                  nestedValue
                );
              }
            } else {
              formData.append(
                `options[${index}][${key}][${nestedKey}]`,
                nestedValue
              );
            }
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

    if (values?.isFlashSale === true) {
      formData.append("isFlashSale", values?.isFlashSale);
      formData.append(
        "flashSaleStartDate",
        values?.flashSaleStartDate.toISOString()
      );
      formData.append(
        "flashSaleEndDate",
        values?.flashSaleEndDate.toISOString()
      );
    }

    formData.append("status", productStatus.PENDING);
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
      navigate("/seller/products");
    }, 2000);
  };
  /* ================================================================================================== */

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    const newImages = selectedImages.filter(
      (image) =>
        !formik.values.images.find(
          (existingImage) => existingImage.name === image.name
        )
    );

    formik.setFieldValue("images", [
      ...(formik.values.images || []),
      ...newImages,
    ]);

    // Clear the file input value to allow re-selecting the same image
    event.target.value = null;
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    // Create a copy of the images array
    updatedImages.splice(index, 1); // Remove the image at the specified index

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
      formik.setFieldValue("flashSaleStartDate", "");
      formik.setFieldValue("flashSaleEndDate", "");
    }
  };

  /* ================================================================================================== */
  const handleFlashSaleStartDate = (e) => {
    const startDate = new Date(e.target.value);
    const minEndDate = new Date(startDate?.getTime() + 3 * 24 * 60 * 60 * 1000);
    formik.setFieldValue("flashSaleStartDate", startDate);
    formik.setFieldValue("flashSaleEndDate", null);
    document.getElementById("flashSaleEndDate").min = minEndDate
      .toISOString()
      .slice(0, 10);
  };
  const handleFlashSaleEndDate = (e) => {
    const endDate = new Date(e.target.value);
    formik.setFieldValue("flashSaleEndDate", endDate);
  };

  const today = new Date().toISOString().slice(0, 10);
  const minEndDate = formik.values.flashSaleStartDate
    ? new Date(
        formik?.values?.flashSaleStartDate?.getTime() + 3 * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 10)
    : today;
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

    // Update the field with the new value
    option[field] = value;

    // Calculate discount value if discount percentage is provided
    if (field === "discountPercentage") {
      const priceBeforeDiscount = parseFloat(option.priceBeforeDiscount);
      const discountPercentage = parseFloat(value);

      if (!isNaN(priceBeforeDiscount) && !isNaN(discountPercentage)) {
        option.discountValue = priceBeforeDiscount * (discountPercentage / 100);
      } else {
        option.discountValue = ""; // Reset discount value if either input is invalid
      }
    }

    // Calculate discount percentage if discount value is provided
    if (field === "discountValue") {
      const priceBeforeDiscount = parseFloat(option.priceBeforeDiscount);
      const discountValue = parseFloat(value);

      if (
        !isNaN(priceBeforeDiscount) &&
        !isNaN(discountValue) &&
        discountValue !== 0
      ) {
        option.discountPercentage = (discountValue / priceBeforeDiscount) * 100;
      } else {
        option.discountPercentage = ""; // Reset discount percentage if either input is invalid or discountValue is 0
      }
    }

    // Calculate final price based on updated values
    const priceBeforeDiscount = parseFloat(option.priceBeforeDiscount);
    const discountValue = parseFloat(option.discountValue);

    if (!isNaN(priceBeforeDiscount)) {
      if (!isNaN(discountValue)) {
        option.finalPrice = (priceBeforeDiscount - discountValue).toFixed(2);
      } else {
        option.finalPrice = priceBeforeDiscount.toFixed(2); // Final price same as priceBeforeDiscount if discountValue is not valid
      }
    } else {
      option.finalPrice = ""; // Reset final price if priceBeforeDiscount is invalid
    }

    // Set the updated values
    formik.setValues({
      ...formik.values,
      options: newOptions,
    });
  };

  const calculateFinalPrice = (
    priceBeforeDiscount,
    discountPercentage,
    discountValue
  ) => {
    const price = parseFloat(priceBeforeDiscount);
    const percentage = parseFloat(discountPercentage);
    const discount = parseFloat(discountValue);

    if (isNaN(price)) {
      return ""; // Handle invalid price input
    }

    // Handle cases where both percentage and discount are provided
    if (!isNaN(percentage) && !isNaN(discount)) {
      // Consider only percentage and calculate final price
      return price * ((100 - percentage) / 100);
    }

    // Handle cases where only discount percentage is provided
    if (!isNaN(percentage) && !isNaN(price) && percentage !== 0) {
      return price - (price * percentage) / 100;
    }

    // Handle cases where only discount value is provided
    if (!isNaN(discount) && !isNaN(price)) {
      return price - discount;
    }

    return price.toFixed(2); // Default case, return price before discount
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
    <div className="shadow container-fluid rounded mt-4">
      <h1 className="special-header ps-5 py-3 m-3">
        {productId ? "Edit" : "Add"} product
      </h1>
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
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="images"
          />
          <div className="d-flex justify-content-end align-items-center flex-wrap ">
            {formik.values.images.map((imgItem, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center justify-content-between"
              >
                <img
                  src={
                    typeof imgItem === "string"
                      ? `${serverUrl}/${imgItem}`
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
        <ErrorMessage
          touched={formik.touched}
          errors={formik.errors}
          fieldName="title"
        />
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
        <ErrorMessage
          touched={formik.touched}
          errors={formik.errors}
          fieldName="description"
        />
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
        </div>
        {formik.values.isFlashSale && (
          <div>
            <div className="item">
              <label htmlFor="flashSaleStartDate" className="fw-bold fs-4">
                flash Sale Start date:
              </label>
              <input
                type="date"
                name="flashSaleStartDate"
                id="flashSaleStartDate"
                className="col-12 col-md-7 py-2 px-3 fs-3 special-input"
                value={
                  formik?.values?.flashSaleStartDate
                    ? formik?.values?.flashSaleStartDate
                        .toISOString()
                        .slice(0, 10)
                    : null
                }
                onChange={handleFlashSaleStartDate}
                onBlur={formik.handleBlur}
                min={today}
              />
            </div>
            <ErrorMessage
              touched={formik.touched}
              errors={formik.errors}
              fieldName="flashSaleStartDate"
              condition={formik.values.isFlashSale}
            />
            <div className="item">
              <label htmlFor="flashSaleEndDate" className="fw-bold fs-4">
                flash Sale end date:
              </label>
              <input
                type="date"
                name="flashSaleEndDate"
                id="flashSaleEndDate"
                className="col-12 col-md-7 py-2 px-3 fs-3 special-input"
                value={
                  formik?.values?.flashSaleEndDate
                    ? formik?.values?.flashSaleEndDate
                        .toISOString()
                        .slice(0, 10)
                    : null
                }
                onChange={handleFlashSaleEndDate}
                onBlur={formik.handleBlur}
                min={minEndDate}
              />
            </div>
            <ErrorMessage
              touched={formik.touched}
              errors={formik.errors}
              fieldName="flashSaleEndDate"
              condition={formik.values.isFlashSale}
            />
          </div>
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
                        formik.values.options[index]?.price?.discountValue || ""
                      )}
                    </span>
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
  );
};
export default AddProduct;
