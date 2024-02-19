const initialValues = {
  title: "",
  description: "",
  images: [],
  category: "",
  subCategory: "",
  productOwner: "",
  options: [
    {
      size: "",
      color: "#000000",
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
  if (!values.images) {
    errors.images = "Product images are required";
  }

  if (!values.title) {
    errors.title = "Product title is required";
  } else if (values.title.length < 3 || values.title.length > 20) {
    errors.title = "Product title must be between 3 and 20 characters";
  }

  if (!values.description) {
    errors.description = "Product description is required";
  } else if (values.description.length < 3 || values.description.length > 25) {
    errors.description =
      "Product description must be between 3 and 25 characters";
  }

  // if (!values.options[0].color || !values.options[0].size) {
  //   errors.options = {
  //     ...errors.options,
  //     color: "You have to add a product's color & size",
  //   };
  // }

  // if (!values.options[0].price.priceBeforeDiscount) {
  //   errors.options = {
  //     ...errors.options,
  //     priceBeforeDiscount: "Product price before is required",
  //   };
  // }

  // if (
  //   !values.options[0].price.discountPercentage &&
  //   !values.options[0].price.discountValue
  // ) {
  //   errors.options = {
  //     ...errors.options,
  //     price:
  //       "You have to add product discount percentage or discount value, at least one of them",
  //   };
  // }

  // if (!values.options[0].stockCount) {
  //   errors.options = {
  //     ...errors.options,
  //     stockCount: "Product stock count shouldn't be 0",
  //   };
  // }

  return errors;
};

export { initialValues, validate };
