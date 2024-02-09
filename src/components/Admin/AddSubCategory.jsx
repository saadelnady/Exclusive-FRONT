import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MdError } from "react-icons/md";
import { CiCamera } from "react-icons/ci";

import { serverUrl } from "../../API/API";

import { Loading } from "../shared/Loading";
import {
  initialValues,
  validate,
} from "../../validation/Admin/SubCategoryValidation";
import { useSelector } from "react-redux";
import { useState } from "react";
export const AddSubCategory = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const [previewImage, setPreviewImage] = useState("");

  const { subCategoryId } = useParams();
  const isLoading = false;

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmition(values);
    },
    validate,
  });
  const handleSubmition = (values) => {
    console.log(values);
  };
  // ================================================================================
  const handleImageChange = (event) => {
    console.log("event.currentTarget", event.currentTarget.files);
    const imageFile = event.currentTarget.files[0];

    event.currentTarget.value = null;

    // Set preview image

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataURL = e.target.result;
        console.log(imageDataURL);
        setPreviewImage(imageDataURL);
        formik.setFieldValue("image", imageFile);
        formik.setFieldValue("previewImage", imageDataURL); // Assigning imageDataURL directly, no need to use previewImage state
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleRemoveImage = () => {
    formik.setFieldValue("image", null);
    formik.setFieldValue("previewImage", null);
    document.getElementById("CategoryImage").value = null; // Reset the input field
    setPreviewImage(""); // Reset the preview image
  };

  return (
    <div className="vh-100 bg-light py-5">
      <div className="container">
        <h1 className="mb-5 fw-bold">
          {subCategoryId ? "Edit Subcategory " : "Add New Subcategory"}
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          action="POST"
          className="special-form"
        >
          <div className="my-3 image-wrapper">
            <label htmlFor="subCategoryImage">
              {formik.values.previewImage ? (
                <div className="subCategoryImage" id="subCategoryImage">
                  <img src={formik.values.previewImage} alt="Category" />
                </div>
              ) : (
                <div className="add-img">
                  <CiCamera />
                </div>
              )}
            </label>

            <input
              type="file"
              id="subCategoryImage"
              className="d-none"
              name="image"
              accept="image/*"
              onBlur={formik.handleBlur}
              onChange={handleImageChange}
            />
            {formik.values.previewImage && (
              <button
                type="button"
                className="btn btn-secondary remove-img"
                onClick={handleRemoveImage}
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
            placeholder="Subcategory title"
            className="form-control mb-3 w-50"
            name="title"
            value={formik.values.title}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.title}
            </p>
          ) : null}

          <select name="" id="">
            {categories?.map((category, index) => {
              return (
                <option key={index} value={category.title}>
                  {category.title}
                </option>
              );
            })}
          </select>
          <button type="submit" className="btn btn-danger">
            {isLoading ? (
              <Loading />
            ) : subCategoryId ? (
              "Edit Subcategory"
            ) : (
              "Add Subcategory"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
