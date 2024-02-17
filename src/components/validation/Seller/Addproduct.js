const initialValues = {
  title: "",
  description: "",
  images: [],
  category: "",
  subCategory: "",
  productOptions: [
    {
      size: "",
      color: "",
      stockCount: 0,
      price: {
        priceBeforeDiscount: "",
        discountPercentage: "",
        finalPrice: "",
        discountValue: "",
      },
    },
  ],
};

const validate = (values) => {
  const errors = {};
  if (values.images.length === 0) {
    errors.images = "Product images is required";
  } else if (values.images.length > 10) {
    errors.images = " You should not add more than 10 photos";
  }

  // ==============================================================
  if (!values.title) {
    errors.title = "Product title is required";
  } else if (values.title.length < 3) {
    errors.title = "product title must be at least 3 characters";
  } else if (values.title.length > 20) {
    errors.title = "product title must be less than 20 characters";
  }
  // ==============================================================
  if (!values.description) {
    errors.description = "Product description is required";
  } else if (values.description.length < 3) {
    errors.description = "product description must be at least 3 characters";
  } else if (values.description.length > 25) {
    errors.description = "product description must be less than 25 characters";
  }
  // ==============================================================

  return errors;
};
export { initialValues, validate };
