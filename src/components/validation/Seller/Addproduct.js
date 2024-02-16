export const initialValues = {
  title: "",
  description: "",
  images: [],
  colors: [],
  sizes: [],
  priceBeforeDiscount: "",
  discountPercentage: "",
  finalPrice: "",
  discountValue: "",
  category: "",
  subCategory: "",
  stockCount: 0,
};

export const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Product title is required";
  } else if (values.title.length > 20) {
    errors.title = "Product title must be at least 20 characters";
  } else if (values.title.length < 3) {
    errors.title = "Product title must be 3 characters at least";
  }
  return errors;
};
