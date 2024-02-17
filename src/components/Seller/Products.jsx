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

  const removeProductOption = (index) => {
    const newProductOptions = [...formik.values.productOptions];
    newProductOptions.splice(index, 1);
    formik.setValues({
      ...formik.values,
      productOptions: newProductOptions,
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
      <div>
        {formik.values.productOptions.map((option, index) => (
          <div key={index}>
            <div>
              <label htmlFor={`size${index}`}>Size:</label>
              <input
                id={`size${index}`}
                name={`productOptions[${index}].size`}
                type="text"
                onChange={formik.handleChange}
                value={option.size}
              />
            </div>
            <div>
              <label htmlFor={`color${index}`}>Color:</label>
              <input
                id={`color${index}`}
                name={`productOptions[${index}].color`}
                type="text"
                onChange={formik.handleChange}
                value={option.color}
              />
            </div>
            <div>
              <label htmlFor={`price${index}`}>Price:</label>
              <input
                id={`price${index}`}
                name={`productOptions[${index}].price`}
                type="text"
                onChange={formik.handleChange}
                value={option.price}
              />
            </div>
            <div>
              <label htmlFor={`stockCount${index}`}>Stock Count:</label>
              <input
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
        <button type="button" onClick={addProductOption}>
          Add Product Option
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
