const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobilePhone: "",
  password: "",
};
const onSubmit = (values) => {
  return values;
};
const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "First Name must be at least 3 characters";
  } else if (values.firstName.length > 10) {
    errors.firstName = "First Name must be less than 10 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Last Name must be at least 3 characters";
  } else if (values.lastName.length > 10) {
    errors.lastName = "Last Name must be less than 10 characters";
  }

  if (!values.mobilePhone) {
    errors.mobilePhone = "Mobile Phone is required";
  } else if (!/^\d{11}$/.test(values.mobilePhone)) {
    errors.mobilePhone = "Invalid phone number";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!/^.{9,25}$/.test(values.password)) {
    errors.password = "Password must be between 9 and 25 characters";
  } else if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(values.password)
  ) {
    errors.password =
      "Password must contain at least one uppercase letter, one lowercase letter, and one number";
  }

  return errors;
};
export { initialValues, onSubmit, validate };
