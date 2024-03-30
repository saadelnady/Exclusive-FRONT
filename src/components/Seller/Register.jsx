import googleIcon from "../../assets/images/pngs/ic-Google.png";
import "../Auth.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";

import sellerImage from "../../assets/images/pngs/bg-seller.jpg";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validate } from "../validation/registerValidation.js";
import { useDispatch } from "react-redux";
import { sellerRegister } from "../../store/actions/seller/sellerActions.js";
import ErrorMessage from "../shared/ErrorMessage.jsx";

const SellerRegister = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleRegister(values);
    },
    validate,
  });
  const handleRegister = (values) => {
    const trimedValues = {
      firstName: values?.firstName?.trim(),
      lastName: values?.lastName?.trim(),
      email: values?.email?.trim(),
      mobilePhone: values?.mobilePhone?.trim(),
      password: values?.password,
    };

    const payLoad = { values: trimedValues, toast, navigate };
    dispatch(sellerRegister(payLoad));
  };

  return (
    <div className="register row align-items-center">
      <div className="col-12 col-md-4">
        <img src={sellerImage} alt="mobileImage" className="w-100 " />
      </div>
      <div className="col-10 mx-auto offset-md-2 col-md-5 col-lg-4 text-center text-md-start fw-bold py-5">
        <h1 className="fs-1">Create a seller account</h1>
        <p className="fs-5 fw-normal">Enter your details below</p>
        <form onSubmit={formik.handleSubmit} action="POST" className="mt-5">
          <input
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="first Name"
            className="form-control mb-3 fs-4 special-input"
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="firstName"
          />
          <input
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="last Name"
            className="form-control mb-3 fs-4 special-input"
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="lastName"
          />
          <input
            name="mobilePhone"
            onChange={formik.handleChange}
            value={formik.values.mobilePhone}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="mobile phone"
            className="form-control mb-3 fs-4 special-input"
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="mobilePhone"
          />
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            type="email"
            placeholder="E-mail"
            className="form-control mb-3 fs-4 special-input"
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="email"
          />
          <div className="position-relative">
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              type={visible ? "password" : "text"}
              placeholder="Password"
              className="form-control mb-3 fs-4 special-input"
              autoComplete="password"
            />

            {visible ? (
              <IoEyeOutline
                className="eyeIcon position-absolute fs-3 top-50 cursor-pointer translate-middle-y"
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            ) : (
              <IoEyeOffOutline
                className="eyeIcon position-absolute fs-3 top-50 cursor-pointer translate-middle-y"
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            )}
          </div>
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="password"
          />
          <button
            className="btn d-block w-100 p-3 fs-4 submit my-4"
            type="submit"
          >
            Create Account
          </button>
          <button className=" d-block btn  text-center w-100 p-3 fs-4 google-signup">
            <img src={googleIcon} alt="google-Icon" className="me-2" />
            Sign up with Google
          </button>
          <p className="text-center mt-4 fs-5">
            Already have account ?
            <NavLink to="/sellerLogin" className="login-btn text-dark p-2">
              Log in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SellerRegister;
