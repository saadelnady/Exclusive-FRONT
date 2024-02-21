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
      color: "#FFFFFF",
      stockCount: "0",
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
  } else if (values?.title?.length < 3 || values?.title?.length > 30) {
    errors.title = "Product title must be between 3 and 30 characters";
  }

  if (!values?.description) {
    errors.description = "Product description is required";
  } else if (
    values?.description?.length < 3 ||
    values?.description?.length > 150
  ) {
    errors.description =
      "Product description must be between 3 and 150 characters";
  }

  const optionsErrors = values.options.map((option, index) => {
    const optionErrors = {};

    // Color error
    if (!option?.color) {
      optionErrors.color = `Product color is required in option number ${
        index + 1
      }`;
    }
    /* ================================================================================================== */

    //   // Size error
    if (!option?.size) {
      optionErrors.size = `Product size is required in option number ${
        index + 1
      }`;
    }
    /* ================================================================================================== */

    if (!option.price?.priceBeforeDiscount) {
      optionErrors.priceBeforeDiscount = `Product priceBeforeDiscount is required in option number ${
        index + 1
      }`;
    } else if (isNaN(option.price?.priceBeforeDiscount)) {
      optionErrors.priceBeforeDiscount = `Price must be a number in option number ${
        index + 1
      }`;
    }
    /* ================================================================================================== */

    if (!option.price?.discountPercentage) {
      optionErrors.discountPercentage = `Product discountPercentage is required in option number ${
        index + 1
      }`;
    } else if (isNaN(option.price?.discountPercentage)) {
      optionErrors.discountPercentage = `discountPercentage must be a number in option number ${
        index + 1
      }`;
    }
    /* ================================================================================================== */

    if (isNaN(option?.price?.discountValue)) {
      optionErrors.discountValue = `discountValue must be a number in option number ${
        index + 1
      }`;
    }

    /* ================================================================================================== */

    if (option?.price?.discountValue === option?.price?.priceBeforeDiscount) {
      optionErrors.priceBeforeDiscount = `priceBeforeDiscount mustn't be equal discountValue in option number ${
        index + 1
      }`;
    }

    /* ================================================================================================== */

    if (!option.stockCount || option.stockCount === "0") {
      optionErrors.stockCount = `Product stockCount shouldn't be 0 in option number ${
        index + 1
      }`;
    }

    return optionErrors;
  });

  // errors.optionsErrors = optionsErrors;

  // console.log("errors --- >", errors);
  return errors;
};

export { initialValues, validate };
