import mobileImage from "../assets/images/pngs/mobile.png";
import googleIcon from "../assets/images/pngs/Icon-Google.png";
import "../styles/Auth.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validate } from "../validation/registerValidation.js";
import { handleRegiter } from "../formsSubmitions/registerSubmition.js";

export const Register = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleRegiter(values, formik, navigate);
    },
    validate,
  });

  return (
    <div className="register row ">
      <div className="col-12 col-md-6">
        <img src={mobileImage} alt="mobileImage" className="w-100" />
      </div>
      <div className="col-10 mx-auto  offset-md-2 col-md-5 col-lg-4 text-center text-md-start fw-bold p-5">
        <h1 className="fs-1">Create an account</h1>
        <p className="fs-5 fw-normal">Enter your details below</p>
        <form onSubmit={formik.handleSubmit} action="POST">
          <input
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="first Name"
            className="form-control mb-3 fs-4"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.firstName}
            </p>
          ) : null}
          <input
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="last Name"
            className="form-control mb-3 fs-4"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.lastName}
            </p>
          ) : null}
          <input
            name="mobilePhone"
            onChange={formik.handleChange}
            value={formik.values.mobilePhone}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="mobile phone"
            className="form-control mb-3 fs-4"
          />{" "}
          {formik.touched.mobilePhone && formik.errors.mobilePhone ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.mobilePhone}
            </p>
          ) : null}
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            type="email"
            placeholder="E-mail"
            className="form-control mb-3 fs-4"
          />
          {formik.touched.email && formik.errors.email ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.email}
            </p>
          ) : null}
          <div className="position-relative">
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              type={visible ? "password" : "text"}
              placeholder="Password"
              className="form-control mb-3 fs-4"
              autoComplete="password"
            />

            {visible ? (
              <IoEyeOutline
                className="eyeIcon position-absolute fs-3 top-50 pointer translate-middle-y"
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            ) : (
              <IoEyeOffOutline
                className="eyeIcon position-absolute fs-3 top-50 pointer translate-middle-y"
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            )}
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p>
              <MdError className="fs-3 me-2" />
              {formik.errors.password}
            </p>
          ) : null}
          <button
            className="btn d-block text-center w-100 p-3  fs-4 submit mb-4"
            type="submit"
          >
            Create Account
          </button>
          <button className=" d-block btn  text-center w-100 p-3 fs-4 google-signup   ">
            <img src={googleIcon} alt="google-Icon" className="me-2" />
            Sign up with Google
          </button>
          <p className="text-center mt-4 fs-5">
            Already have account ?{" "}
            <NavLink to="/login" className="login-btn text-dark p-2">
              Log in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
