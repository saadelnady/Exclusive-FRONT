import React, { useEffect } from "react";
import { CiCamera } from "react-icons/ci";
import { serverUrl } from "../../API/API";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import {
  initialValues,
  validate,
} from "../../components/validation/Profile/EditProfileValidation";
import { MdError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { editUserProfile } from "../../store/actions/user/userActions";
import { useNavigate } from "react-router-dom";

const ProfileDetails = ({ user, seller }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validate,
  });

  const handleSubmit = (values) => {
    if (user) {
      handleEditUser(values);
    } else {
      handleEditSeller(values);
    }
  };

  useEffect(() => {
    if (user || seller) {
      formik.setValues({
        image: user?.image || seller?.image,
        firstName: user?.firstName || seller?.firstName,
        lastName: user?.lastName || seller?.lastName,
        email: user?.email || seller?.email,
        address: user?.address || seller?.address,
        mobilePhone: user?.mobilePhone || seller?.mobilePhone,
      });
    }
  }, [user, seller]);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input

    // Log the selected file to check its type and content
    console.log("Selected File:", file);

    // Check if the selected file is valid
    if (file && file instanceof Blob) {
      formik.setFieldValue("image", file); // Update Formik field value for 'image'

      // Use createObjectURL only if file is a valid Blob
      const imageUrl = URL.createObjectURL(file);
      console.log("Image URL:", imageUrl);
    }
  };

  const handleEditUser = (values) => {
    const formData = new FormData();
    formData.append("image", values?.image);
    formData.append("firstName", values?.firstName);
    formData.append("lastName", values?.lastName);
    formData.append("email", values?.email);
    formData.append("address", values?.address);
    formData.append("mobilePhone", values?.mobilePhone);
    formData.append("currentPassword", values?.currentPassword);
    formData.append("newPassword", values?.newPassword);

    const payLoad = { userId: user?._id, values: formData, toast };
    dispatch(editUserProfile(payLoad));
  };
  const handleEditSeller = (values) => {
    console.log("selller");
    console.log("values", values);
  };
  const resetForm = () => {
    formik.resetForm();
    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };
  return (
    <div className="col-12 col-sm-8 offset-sm-1 shadow p-5 rounded">
      <h3 className="edit">Edit Your Profile</h3>
      <form onSubmit={formik.handleSubmit} action="POST">
        <div className="rounded-pill profile-img-container">
          <label htmlFor="userImage-input" className="profile-img-label">
            <img
              src={
                formik.values.image && formik.values.image instanceof Blob
                  ? URL.createObjectURL(formik.values.image)
                  : `${serverUrl}/${seller.image || user.image}`
              }
              alt="profile-img"
              className="user-img"
            />
            <CiCamera className="bg-light rounded-pill ic-camera " />
          </label>
          <input
            type="file"
            id="userImage-input"
            className="d-none"
            name="image"
            accept="image/*"
            onBlur={formik.handleBlur}
            onChange={handleImageChange}
          />
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <label htmlFor="firstName">First Name</label>
            <input
              value={formik?.values?.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="firstName"
              className="form-control mb-3 fs-5 bg-light special-input"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p>
                <MdError className="fs-3 me-2" />
                {formik.errors.firstName}
              </p>
            ) : null}
          </div>

          <div className="col-12 col-lg-5">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={formik?.values?.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="lastName"
              className="form-control mb-3 fs-5 bg-light special-input"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p>
                <MdError className="fs-3 me-2" />
                {formik.errors.lastName}
              </p>
            ) : null}
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <label htmlFor="email">Email</label>
            <input
              value={formik?.values?.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              id="email"
              className="form-control mb-3 fs-5 bg-light special-input"
            />
            {formik.touched.email && formik.errors.email ? (
              <p>
                <MdError className="fs-3 me-2" />
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          <div className="col-12 col-lg-5">
            <label htmlFor="address">Address</label>
            <input
              value={formik?.values?.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="address"
              className="form-control mb-3 fs-5 bg-light special-input"
            />
            {formik.touched.address && formik.errors.address ? (
              <p>
                <MdError className="fs-3 me-2" />
                {formik.errors.address}
              </p>
            ) : null}
          </div>

          <div className="col-12 col-lg-5">
            <label htmlFor="mobilePhone">Mobile phone</label>
            <input
              value={formik?.values?.mobilePhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="mobilePhone"
              className="form-control mb-3 fs-5 bg-light special-input "
            />
            {formik.touched.mobilePhone && formik.errors.mobilePhone ? (
              <p>
                <MdError className="fs-3 me-2" />
                {formik.errors.mobilePhone}
              </p>
            ) : null}
          </div>
        </div>
        <p className="my-4 fs-5">Password Changes</p>
        <input
          value={formik?.values?.currentPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          className="form-control mb-3 fs-5 bg-light special-input"
          autoComplete="password"
        />

        {formik.touched.currentPassword && formik.errors.currentPassword ? (
          <p>
            <MdError className="fs-3 me-2" />
            {formik.errors.currentPassword}
          </p>
        ) : null}
        <input
          value={formik?.values?.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="newPassword"
          placeholder="New Passwod"
          className="form-control mb-3 fs-5 bg-light special-input"
          autoComplete="password"
        />
        {formik.touched.newPassword && formik.errors.newPassword ? (
          <p>
            <MdError className="fs-3 me-2" />
            {formik.errors.newPassword}
          </p>
        ) : null}
        <input
          value={formik?.values?.newPasswordConfirmed}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="newPasswordConfirmed"
          placeholder="Confirm New Password"
          className="form-control mb-3 fs-5 bg-light special-input"
          autoComplete="password"
        />
        {formik.touched.newPasswordConfirmed &&
        formik.errors.newPasswordConfirmed ? (
          <p>
            <MdError className="fs-3 me-2" />
            {formik.errors.newPasswordConfirmed}
          </p>
        ) : null}
        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn text-center"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Cancel
          </button>
          <button className="btn text-center p-3 fs-5 submit" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
