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
  if (values?.images?.length === 0) {
    errors.images = "Product images are required";
  }
  if (!values?.title) {
    errors.title = "Product title is required";
  } else if (values?.title?.length < 3 || values?.title?.length > 20) {
    errors.title = "Product title must be between 3 and 20 characters";
  }

  if (!values?.description) {
    errors.description = "Product description is required";
  } else if (
    values?.description?.length < 3 ||
    values?.description?.length > 25
  ) {
    errors.description =
      "Product description must be between 3 and 25 characters";
  }

  const optionsErrors = [];

  values.options.forEach((option, index) => {
    const optionErrors = {};

    // Color error
    if (!option.color) {
      optionErrors.color = `Product color is required in option number ${
        index + 1
      }`;
    }

    // Size error
    if (!option.size) {
      optionErrors.size = `Product size is required in option number ${
        index + 1
      }`;
    }

    if (!option.price?.priceBeforeDiscount) {
      optionErrors.priceBeforeDiscount = `Product priceBeforeDiscount is required in option number ${
        index + 1
      }`;
    }
    if (!option.price?.discountPercentage) {
      optionErrors.discountPercentage = `Product discountPercentage is required in option number ${
        index + 1
      }`;
    }
    if (!option.stockCount) {
      optionErrors.stockCount = `Product stockCount is required in option number ${
        index + 1
      }`;
    }

    // Other errors for the option fields can be added similarly

    // Push the errors for the current option into the optionsErrors array
    optionsErrors.push(optionErrors);
  });
  errors.optionsErrors = optionsErrors;
  return errors;
};
export { initialValues, validate };
