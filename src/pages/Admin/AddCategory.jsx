import React, { useState } from "react";

export const AddCategory = () => {
  const [CategoryImage, SetCategoryImage] = useState("");
  const handleImageChange = (event) => {
    const selectedImage = event.target.file;
    console.log(selectedImage);
    SetCategoryImage(selectedImage);
  };
  console.log(CategoryImage.name);
  return (
    <div className="vh-100 bg-light  ">
      <div className="container">
        <form action="">
          <label htmlFor="CategoryImage" className="btn btn-danger">
            Category Image :
          </label>

          <input
            type="file"
            id="CategoryImage"
            className="d-none"
            onChange={(e) => {
              handleImageChange(e);
            }}
            name="CategoryImage"
          />
          {CategoryImage && (
            <img
              src={URL.createObjectURL(CategoryImage)}
              alt={`CategoryImage Imag }`}
              width={80}
            />
          )}
        </form>
      </div>
    </div>
  );
};
