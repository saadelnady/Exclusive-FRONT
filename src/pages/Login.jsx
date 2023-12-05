import mobileImage from "../assets/images/pngs/mobile.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

import { initialValues, validate } from "../validation/loginValidation";
import { handleLogin } from "../formsSubmitions/loginSubmition";
import "../styles/Auth.css";
import { useFormik } from "formik";

export const Login = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleLogin(values, formik, navigate);
    },
    validate,
  });

  return (
    <div className="login row align-items-center">
      <div className="col-12 col-md-6">
        <img src={mobileImage} alt="mobileImage" className="w-100" />
      </div>
      <div className="col-10 mx-auto  offset-md-2 col-md-5 col-lg-4 text-center text-md-start fw-bold p-5">
        <h1 className="fs-1">Log in to Exclusive</h1>
        <p className="fs-5 fw-normal">Enter your details below</p>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            autoComplete="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
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
              type={visible ? "password" : "text"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
          <div className="d-flex align-items-center mb-4">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className=" me-4 remember-me rounded-circle"
            />
            <label htmlFor="checkbox" className="fs-5 ">
              Remember me
            </label>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn text-center p-3 fs-4 submit " type="sbmit">
              Login
            </button>
            <NavLink className="forget-password p-3 fs-5">
              Forget Password ?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
