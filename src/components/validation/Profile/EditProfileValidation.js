const initialValues = {
  image: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  mobilePhone: "",
  currentPassword: "",
  newPassword: "",
  newPasswordConfirmed: "",
};

// ==================================================================================

const validate = (values) => {
  const errors = {};

  if (values?.firstName?.length < 3) {
    errors.firstName = "First Name must be at least 3 characters";
  } else if (values?.firstName?.length > 20) {
    errors.firstName = "First Name must be less than 20 characters";
  }
  // ==================================================================================
  if (values?.lastName?.length < 3) {
    errors.lastName = "Last Name must be at least 3 characters";
  } else if (values?.lastName?.length > 20) {
    errors.lastName = "Last Name must be less than 20 characters";
  }

  // ==================================================================================
  if (!/^\S+@\S+\.\S+$/.test(values?.email)) {
    errors.email = "Invalid email address";
  }
  // ==================================================================================
  if (values?.address && values?.address?.length < 5) {
    errors.address = "Address must be at least 5 characters";
  } else if (values?.address && values?.address?.length > 100) {
    errors.address = "Address must be less than 100 characters";
  }
  // ==================================================================================

  if (!/^\d{11}$/.test(values?.mobilePhone)) {
    errors.mobilePhone = "Invalid phone number";
  }
  // ==================================================================================
  if (
    values?.newPassword &&
    (!values?.currentPassword ||
      values?.currentPassword === "" ||
      values?.currentPassword === null ||
      values?.currentPassword === undefined)
  ) {
    console.log("current password", values?.currentPassword);
    errors.currentPassword = "Current password is required";
  } else if (
    values?.currentPassword &&
    !/^.{9,25}$/.test(values?.currentPassword)
  ) {
    errors.currentPassword =
      "Current password must be between 9 and 25 characters";
  } else if (
    values?.currentPassword &&
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(
      values.currentPassword
    )
  ) {
    errors.currentPassword =
      "Current password must contain at least one uppercase letter, one lowercase letter, and one number";
  }
  // ==================================================================================

  if (values?.newPassword && !/^.{9,25}$/.test(values?.newPassword)) {
    errors.newPassword = "New password must be between 9 and 25 characters";
  } else if (
    values?.newPassword &&
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(values?.newPassword)
  ) {
    errors.newPassword =
      "New password must contain at least one uppercase letter, one lowercase letter, and one number";
  }
  // ==================================================================================

  if (
    values?.newPasswordConfirmed &&
    !/^.{9,25}$/.test(values?.newPasswordConfirmed)
  ) {
    errors.newPasswordConfirmed =
      "new password confirmed must be between 9 and 25 characters";
  } else if (
    values?.newPasswordConfirmed &&
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(
      values?.newPasswordConfirmed
    )
  ) {
    errors.newPasswordConfirmed =
      "New password Confirmed must contain at least one uppercase letter, one lowercase letter, and one number";
  }
  // ==================================================================================
  if (values?.newPassword !== values?.newPasswordConfirmed) {
    errors.newPasswordConfirmed = "Not matched password !";
  }

  return errors;
};

export { initialValues, validate };
