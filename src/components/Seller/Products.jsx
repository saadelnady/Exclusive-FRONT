import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

const initialValues = {
  title: "",
  description: "",
  category: "",
  productOptions: [
    {
      size: "",
      color: "",
      price: "",
      stockCount: "",
    },
  ],
};

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    // Fetch sub-categories based on selected category
    // You can replace this with your logic to fetch sub-categories
    // setSubCategories(fetchSubCategories(selectedCategory));
  };
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
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          onChange={(event) => {
            formik.handleChange(event);
            handleCategoryChange(event);
          }}
          value={selectedCategory}
        >
          <option value="">Select Category</option>
          {/* Render categories here */}
        </select>
      </div>
      {/* Render sub-categories based on selected category */}
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
            <label htmlFor={`discountValue${index}`} className="fw-bold fs-4">
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
            <button type="button" onClick={() => removeProductOption(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <tbody>
        {formik.values.productOptions.map((option, index) => (
          <tr key={index} className="border row py-4 px-2 rounded">
            <button type="button" onClick={addProductOption}>
              +
            </button>
            <select className="select-size d-flex justify-content-between flex-wrap w-75">
              {sizes.map((size) => (
                <option
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
                </option>
              ))}
            </select>

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
              <label htmlFor={`discountValue${index}`} className="fw-bold fs-4">
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
              <button type="button" onClick={() => removeProductOption(index)}>
                Remove
              </button>
            )}
          </tr>
        ))}
      </tbody>

      <button type="submit">Submit</button>
    </form>
  );
};
