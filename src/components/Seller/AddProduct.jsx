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
    const images = formik.values.images;
    console.log(formik.values.title);
    console.log(formik.values.description);
    console.log("Uploaded images:", images);
    console.log("category:", selectedCategory);
    console.log("subCategory:", formik.values.subCategory);
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
    console.log("name ===", name);
    console.log("value ===", value);
    setSelectedSubCategory(value);
    formik.setFieldValue(name, value);
  };

  /* ================================================================================================== */
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const [activeSize, setActiveSize] = useState(null);

  const handleSizeActive = (size) => {
    setActiveSize(size);
  };
  const removeProductOption = (index) => {
    const newProductOptions = [...formik.values.productOptions];
    newProductOptions.splice(index, 1);
    formik.setValues({
      ...formik.values,
      productOptions: newProductOptions,
    });
  };
  const addProductOption = () => {
    formik.setValues({
      ...formik.values,
      productOptions: [
        ...formik.values.productOptions,
        {
          size: "",
          color: "",
          price: "",
          stockCount: "",
        },
      ],
    });
  };

  // const increaseHandler = () => {
  //   formik.setFieldValue("stockCount", +formik.values.stockCount + 1);
  // };

  // const decreaseHandler = () => {
  //   formik.setFieldValue(
  //     "stockCount",
  //     formik.values.stockCount > 0 ? +formik.values.stockCount - 1 : 0
  //   );
  // };

  return (
    <div className="bg-light h-100 ">
      <h1 className="fw-bold shadow rounded py-3 px-5 my-3">Add product</h1>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="add-product">
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
          <h3 className="text-center fw-bold">Product options</h3>
          {/* ================================================================================================== */}
          {formik.values.productOptions.map((option, index) => (
            <div key={index} className="border row py-4 px-2 rounded">
              <div>
                <label htmlFor={`size${index}`} className="fw-bold fs-4">
                  Size:
                </label>
                <ul className="select-size d-flex justify-content-between flex-wrap w-75">
                  {sizes.map((size) => (
                    <li
                      key={size}
                      className={
                        activeSize === size
                          ? "active cursor-pointer"
                          : "cursor-pointer"
                      }
                      onClick={() => {
                        handleSizeActive(size);
                      }}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label htmlFor={`color${index}`} className="fw-bold fs-4">
                  Color:
                </label>
                <input
                  className="special-input"
                  id={`color${index}`}
                  name={`productOptions[${index}].color`}
                  type="color"
                  onChange={formik.handleChange}
                  value={option.color}
                />
              </div>
              <div>
                <label
                  htmlFor={`priceBeforeDiscount${index}`}
                  className="fw-bold fs-4"
                >
                  Price Before Discount:
                </label>
                <input
                  className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
                  id={`priceBeforeDiscount${index}`}
                  name={`productOptions[${index}].price.priceBeforeDiscount`}
                  type="text"
                  onChange={formik.handleChange}
                  value={option.price.priceBeforeDiscount}
                />
              </div>
              <div>
                <label
                  htmlFor={`discountPercentage${index}`}
                  className="fw-bold fs-4"
                >
                  Discount Percentage:
                </label>
                <input
                  className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
                  id={`discountPercentage${index}`}
                  name={`productOptions[${index}].price.discountPercentage`}
                  type="text"
                  onChange={formik.handleChange}
                  value={option.price.discountPercentage}
                />
              </div>
              <div>
                <label htmlFor={`finalPrice${index}`} className="fw-bold fs-4">
                  Final Price:
                </label>
                <input
                  className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
                  id={`finalPrice${index}`}
                  name={`productOptions[${index}].price.finalPrice`}
                  type="text"
                  onChange={formik.handleChange}
                  value={option.price.finalPrice}
                />
              </div>
              <div>
                <label
                  htmlFor={`discountValue${index}`}
                  className="fw-bold fs-4"
                >
                  Discount Value:
                </label>
                <input
                  className="col-12 col-sm-8 py-2 px-3 fs-3 special-input"
                  id={`discountValue${index}`}
                  name={`productOptions[${index}].price.discountValue`}
                  type="text"
                  onChange={formik.handleChange}
                  value={option.price.discountValue}
                />
              </div>
              <div>
                <label htmlFor={`stockCount${index}`} className="fw-bold fs-4">
                  Stock Count:
                </label>

                <input
                  className="col-1 py-2 px-3 fs-3 special-input text-center"
                  id={`stockCount${index}`}
                  name={`productOptions[${index}].stockCount`}
                  type="text"
                  onChange={formik.handleChange}
                  value={option.stockCount}
                />
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeProductOption(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button type="button" onClick={addProductOption}>
            Add Product Option
          </button>

          {/* ================================================================================================== */}

          <button className="btn p-3 fs-4 submit" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
