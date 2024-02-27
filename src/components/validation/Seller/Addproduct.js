import { isObjectNotEmpty } from "../../../helpers/checkers";

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

  // Validate product images
  if (values?.images?.length === 0) {
    errors.images = "Product images are required";
  }

  // Validate product title
  if (!values?.title) {
    errors.title = "Product title is required";
  } else if (values?.title?.length < 3 || values?.title?.length > 100) {
    errors.title = "Product title must be between 3 and 100 characters";
  }

  // Validate product description
  if (!values?.description) {
    errors.description = "Product description is required";
  } else if (
    values?.description?.length < 3 ||
    values?.description?.length > 500
  ) {
    errors.description =
      "Product description must be between 3 and 500 characters";
  }

  // Validate options
  const optionsErrors = values.options
    .map((option, index) => {
      const optionErrors = {};
      // =================================================================================

      // Validate color
      if (!option?.color) {
        optionErrors.color = `Product color is required in option number ${
          index + 1
        }`;
      }
      // =================================================================================

      // Validate size
      if (!option?.size || option?.size === "select size") {
        optionErrors.size = `Product size is required in option number ${
          index + 1
        }`;
      }
      // =================================================================================

      // Validate priceBeforeDiscount
      if (!option.price?.priceBeforeDiscount) {
        optionErrors.priceBeforeDiscount = `Product priceBeforeDiscount is required in option number ${
          index + 1
        }`;
      } else if (isNaN(option.price?.priceBeforeDiscount)) {
        optionErrors.priceBeforeDiscount = `Product price before discount  must be a number in option number ${
          index + 1
        }`;
      } else if (option.price?.priceBeforeDiscount <= "0") {
        optionErrors.priceBeforeDiscount = `Product price before discount mustn't be less than or equal 0 in option number ${
          index + 1
        }`;
      }
      // =================================================================================

      // Validate discountPercentage
      if (!option.price?.discountPercentage) {
        optionErrors.discountPercentage = `Product discountPercentage is required in option number ${
          index + 1
        }`;
      } else if (isNaN(option.price?.discountPercentage)) {
        optionErrors.discountPercentage = `discountPercentage must be a number in option number ${
          index + 1
        }`;
      } else if (+option.price?.discountPercentage >= 100) {
        optionErrors.discountPercentage = `discountPercentage should be less than 100 in option number ${
          index + 1
        }`;
      } else if (option.price?.discountPercentage < "0") {
        optionErrors.discountPercentage = `discount Percentage mustn't be less than 0 in option number ${
          index + 1
        }`;
      }
      // =================================================================================
      // Validate discountValue
      if (isNaN(option?.price?.discountValue)) {
        optionErrors.discountValue = `discount Value must be a number in option number ${
          index + 1
        }`;
      } else if (option.price?.discountValue < "0") {
        optionErrors.discountValue = `discount value mustn't be less than 0 in option number ${
          index + 1
        }`;
      }
      if (+option.price?.discountValue > +option?.price?.priceBeforeDiscount) {
        optionErrors.discountValue = `discount value mustn't be bigger than price before discount in option number ${
          index + 1
        }`;
      }

      // =================================================================================

      // Validate priceBeforeDiscount and discountValue relationship
      if (option?.price?.discountValue === option?.price?.priceBeforeDiscount) {
        optionErrors.priceBeforeDiscount = `price before discount mustn't be equal discount value in option number ${
          index + 1
        }`;
      }
      // =================================================================================

      // Validate stockCount
      if (!option.stockCount || option.stockCount === "0") {
        optionErrors.stockCount = `Product stockCount shouldn't be 0 in option number ${
          index + 1
        }`;
      }

      if (isObjectNotEmpty(optionErrors)) {
        return optionErrors;
      } else {
        return;
      }
    })
    .filter(Boolean);

  if (isObjectNotEmpty(optionsErrors)) {
    errors.optionsErrors = optionsErrors;
  }

  return errors;
};

export { initialValues, validate };
