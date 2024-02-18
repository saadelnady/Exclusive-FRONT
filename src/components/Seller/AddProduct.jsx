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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [images, setImages] = useState([]);
  /* ================================================================================================== */

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmition(values);
    },
    validate,
  });

  /* ================================================================================================== */

  useEffect(() => {
    if (categories.length > 0) {
      const initialCategory = categories[0];
      setSelectedCategory(initialCategory._id);
      setSubCategories(initialCategory.subCategories);

      // Check if the initial category has subcategories and if the selectedSubCategory is not already set
      if (initialCategory.subCategories.length > 0 && !selectedSubCategory) {
        const initialSubCategory = initialCategory.subCategories[0];
        setSelectedSubCategory(initialSubCategory._id);
        formik.setFieldValue("subCategory", initialSubCategory._id);
      }
    }
  }, [categories]);

  const handleSubmition = () => {
    // Access the images from Formik values
    // const images = formik.values.images;
    // console.log(formik.values.title);
    // console.log(formik.values.description);
    // console.log("Uploaded images:", images);
    // console.log("category:", selectedCategory);
    // console.log("subCategory:", formik.values.subCategory);
    console.log("formik.values", formik.values);
  };

  /* ================================================================================================== */

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages([...images, ...selectedImages]);

    // Update Formik values directly
    formik.setFieldValue("images", [
      ...formik.values.images,
      ...selectedImages,
    ]);
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
    console.log("selectedCategory =====>", selectedCategory);
    setSelectedCategory(selectedCategoryId);

    // Find the sub-categories corresponding to the selected category
    const category = categories.find((cat) => cat._id === selectedCategoryId);
    console.log("category =====>", category);

    if (category) {
      setSubCategories(category.subCategories);
      formik.setValues({ ...formik.values, category: category._id }); //
    } else {
      setSubCategories([]);
    }
  };

  /* ================================================================================================== */

  const handleSubCategoryChange = (event) => {
    const { name, value } = event.target;

    setSelectedSubCategory(value);
    formik.setFieldValue(name, value);
  };

  /* ================================================================================================== */

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const removeProductOption = (index) => {
    const newOptions = [...formik.values.options];
    newOptions.splice(index, 1);
    formik.setValues({
      ...formik.values,
      options: newOptions,
    });
  };
  const addProductOption = () => {
    formik.setValues({
      ...formik.values,
      options: [
        ...formik.values.options,
        {
          size: "",
          color: "",
          price: "",
          stockCount: 0,
        },
      ],
    });
  };
  /* ================================================================================================== */

  const handleInputChange = (e, index, fieldName) => {
    const { name, value } = e.target;
    let newOptions = [...formik.values.options];

    if (fieldName === "priceBeforeDiscount" || fieldName === "discountValue") {
      // If the changed field is priceBeforeDiscount or discountValue
      const priceBeforeDiscount = parseFloat(
        formik.values.options[index].price.priceBeforeDiscount
      );
      const discountValue = parseFloat(
        formik.values.options[index].price.discountValue
      );
      let discountPercentage = 0;
      let finalPrice = 0;

      if (
        !isNaN(priceBeforeDiscount) &&
        !isNaN(discountValue) &&
        priceBeforeDiscount !== 0
      ) {
        // Calculate discount percentage and final price
        discountPercentage = (discountValue / priceBeforeDiscount) * 100;
        finalPrice = priceBeforeDiscount - discountValue;
      }

      // Update the newOptions array with the calculated values
      newOptions[index] = {
        ...newOptions[index],
        price: {
          ...newOptions[index].price,
          [fieldName]: value,
          discountPercentage: isNaN(discountPercentage)
            ? ""
            : discountPercentage.toFixed(2), // Set discountPercentage to 2 decimal places
          finalPrice: isNaN(finalPrice) ? "" : finalPrice.toFixed(2), // Set finalPrice to 2 decimal places
        },
      };
    } else {
      // If the changed field is not priceBeforeDiscount or discountValue, update the value directly
      newOptions[index] = {
        ...newOptions[index],
        price: {
          ...newOptions[index].price,
          [fieldName]: value,
        },
      };
    }

    // Update formik values with the updated newOptions array
    formik.setValues({
      ...formik.values,
      options: newOptions,
    });
  };
  /* ================================================================================================== */
  const handleColorChange = (e, index) => {
    const { name, value } = e.target;
    // Update formik state with the new color value
    formik.setFieldValue(`options[${index}].${name}`, value);
  };

  /* ================================================================================================== */
  const handleDecrease = (index) => {
    let newOptions = [...formik.values.options];
    const currentStockCount = parseInt(newOptions[index].stockCount);
    if (!isNaN(currentStockCount) && currentStockCount > 0) {
      newOptions[index].stockCount = currentStockCount - 1;
      formik.setValues({
        ...formik.values,
        options: newOptions,
      });
    }
  };

  const handleIncrease = (index) => {
    let newOptions = [...formik.values.options];
    const currentStockCount = parseInt(newOptions[index].stockCount);
    if (!isNaN(currentStockCount)) {
      newOptions[index].stockCount = currentStockCount + 1;
      formik.setValues({
        ...formik.values,
        options: newOptions,
      });
    }
  };

  /* ================================================================================================== */
  const handleStockCountChange = (e, index) => {
    const { value } = e.target;
    let newOptions = [...formik.values.options];
    newOptions[index].stockCount = value;
    formik.setValues({
      ...formik.values,
      options: newOptions,
    });
  };

  /* ================================================================================================== */

  return (
    <div className="bg-light h-100 ">
      <h1 className="fw-bold shadow rounded py-3 px-5 my-3">Add product</h1>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="add-product">
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
              onBlur={formik.handleBlur}
              name="images"
              multiple
            />
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
              {images.map((imgItem, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center justify-content-between"
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
              {formik.touched.images && formik.errors.images ? (
                <p>
                  <MdError className="fs-3 me-2" />
                  {formik.errors.images}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
          </div>
          {formik.touched.title && formik.errors.title ? (
            <p className="text-sm-end">
              <MdError className="fs-3 me-2" />
              {formik.errors.title}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            ></textarea>
          </div>
          {formik.touched.description && formik.errors.description ? (
            <p className="text-sm-end">
              <MdError className="fs-3 me-2" />
              {formik.errors.description}
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
              onChange={(event) => {
                formik.handleChange(event);
                handleCategoryChange(event);
              }}
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
              value={formik.values.subCategory}
            >
              {subCategories.map((subCat, index) => (
                <option key={index} value={subCat._id}>
                  {subCat.title}
                </option>
              ))}
            </select>
          </div>

          {/* ================================================================================================== */}
          <h3 className="text-center fw-bold my-3">Product options</h3>
          {/* ================================================================================================== */}
          <div className="options-table">
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
                      <button
                        onClick={() => removeProductOption(index)}
                        className="remove-option-row"
                      >
                        -
                      </button>
                      <input
                        type="color"
                        name="color"
                        onChange={(e) => {
                          handleColorChange(e, index);
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.options[index].color}
                      />
                    </td>
                    <td>
                      <select
                        name="size"
                        id=""
                        className="fs-5 py-2 special-input"
                        value={formik.values.options[index].size}
                        onChange={formik.handleChange}
                      >
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
                        value={
                          formik.values.options[index].price.priceBeforeDiscount
                        }
                        onChange={(e) =>
                          handleInputChange(e, index, "priceBeforeDiscount")
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-8 text-center"
                        name="priceBeforeDiscount"
                        value={
                          formik.values.options[index].price.discountPercentage
                        }
                        onChange={(e) =>
                          handleInputChange(e, index, "discountPercentage")
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="fs-3 special-input col-8 text-center"
                        name="discountValue"
                        value={formik.values.options[index].price.discountValue}
                        onChange={(e) =>
                          handleInputChange(e, index, "discountValue")
                        }
                      />
                    </td>
                    <td className="fs-4 fw-bold">
                      <span className="final">
                        {formik.values.options[index].price.finalPrice}
                      </span>
                      L.E
                    </td>
                    <td className="counter">
                      <button
                        className="decrease"
                        onClick={() => handleDecrease(index)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="fs-3 special-input col-5 text-center"
                        value={formik.values.options[index].stockCount}
                        onChange={(e) => handleStockCountChange(e, index)}
                      />
                      <button
                        className="increase"
                        onClick={() => handleIncrease(index)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ================================================================================================== */}

          <button className="btn p-3 fs-4 submit" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
