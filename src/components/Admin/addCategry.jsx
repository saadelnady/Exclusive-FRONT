import React from "react";
import { useFormik } from "formik";
import {
  initialValues,
  validate,
} from "../../validation/Admin/AddCategoryValidation";

import { useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";
import "./styles/AddCategory.css";
import { addCategory } from "../../store/actions/categoryActions";
import { useDispatch } from "react-redux";

export const AddCategry = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleAddCategorySubmition(values);
    },
    validate,
  });
  const handleAddCategorySubmition = (values) => {
    formik.resetForm();
    console.log(values);
    dispatch(addCategory(values));
    // navigate("/admin/categories");
  };
  return (
    <div className="vh-100 bg-light">
      <div className="container">
        <h1 className="mb-5 fw-bold">Add New Category</h1>
        <form
          onSubmit={formik.handleSubmit}
          action="POST"
          className="special-form"
        >
          <div className="my-3 image-wrapper">
            <label htmlFor="CategoryImage">
              {formik.values.image instanceof Blob ? (
                <div className="CategoryImage">
                  <img
                    key={URL.createObjectURL(formik.values.image)}
                    src={URL.createObjectURL(formik.values.image)}
                    alt="Category"
                  />
                </div>
              ) : (
                <div className="add-img"> +</div>
              )}
            </label>

            <input
              type="file"
              id="CategoryImage"
              className="d-none"
              name="image"
              accept="image/*"
              onBlur={formik.handleBlur}
              onChange={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
            {formik.values.image instanceof Blob && (
              <button
                type="button"
                className="btn btn-secondary remove-img"
                onClick={() => {
                  formik.setFieldValue("image", null);
                  document.getElementById("CategoryImage").value = "";
                }}
              >
                X
              </button>
            )}
          </div>
          {formik.touched.image && formik.errors.image ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.image}
            </p>
          ) : null}
          <input
            type="text"
            id="categoryTitle"
            placeholder="Category title"
            className="form-control mb-3 w-50"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.title}
            </p>
          ) : null}
          <button type="submit" className="btn btn-danger">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};
