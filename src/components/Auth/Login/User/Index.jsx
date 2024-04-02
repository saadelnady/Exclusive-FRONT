import mobileImage from "../../../../assets/images/pngs/mobile.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { toast } from "react-toastify";

import { initialValues, validate } from "../../../Validation/loginValidation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../../store/actions/user/userActions";
import Loading from "../../../Shared/Loading";
import ErrorMessage from "../../../Shared/ErrorMessage";

import "../../Styles/Auth.css";
const Index = () => {
  const { isLoading } = useSelector((state) => state.userReducer);

  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleLogin(values);
    },
    validate,
  });

  const handleLogin = (values) => {
    const payload = { values, toast, navigate };
    dispatch(userLogin(payload));
  };

  return (
    <div className="login row align-items-center">
      <div className="col-12 col-md-6">
        <img src={mobileImage} alt="mobileImage" className="w-100 h-100" />
      </div>
      <div className="col-10 mx-auto offset-md-2 col-md-5 col-lg-4 text-center text-md-start fw-bold py-5">
        <h1 className="fs-1">Login to Exclusive</h1>
        <p className="fs-5 fw-normal mt-4">Enter your details below</p>
        <form onSubmit={formik.handleSubmit} className="mt-5">
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            autoComplete="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="E-mail"
            className="form-control mb-4 fs-4 special-input"
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="email"
          />
          <div className="position-relative">
            <input
              type={visible ? "password" : "text"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="form-control my-3 fs-4 special-input"
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
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="password"
          />
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
            <button
              className="btn p-3 fs-4 submit d-flex justify-content-between align-items-center"
              type="sbmit"
            >
              Login
              {isLoading && <Loading />}
            </button>
            <NavLink className="forget-password p-3 fs-5">
              Forget Password ?
            </NavLink>
          </div>
          <p className="text-center fs-4 mt-4">
            Don't have an account ?
            <NavLink
              aria-current="page"
              to="/register/user"
              className="ms-4 register-btn text-dark p-2"
            >
              SignUp
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Index;
