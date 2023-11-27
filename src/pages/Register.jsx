import mobileImage from "../assets/images/pngs/mobile.png";
import googleIcon from "../assets/images/pngs/Icon-Google.png";
import "../styles/register.css";
import { NavLink } from "react-router-dom";
export const Register = () => {
  return (
    <div className="register row align-items-center">
      <div className="col-12 col-md-6">
        <img src={mobileImage} alt="mobileImage" className="w-100" />
      </div>
      <div className="col-10 mx-auto  offset-md-2 col-md-3 text-center text-md-start fw-bold p-5">
        <h1 className="fs-1">Create an account</h1>
        <p className="fs-5 fw-normal">Enter your details below</p>
        <form action="">
          <input
            type="text"
            placeholder="first Name"
            className="form-control mb-5"
          />
          <input
            type="text"
            placeholder="last Name"
            className="form-control mb-5"
          />
          <input
            type="text"
            placeholder="mobile phone"
            className="form-control mb-5"
          />
          <input
            type="email"
            placeholder="e-mail"
            className="form-control mb-5"
          />
          <input
            type="password"
            placeholder="password"
            className="form-control mb-5"
          />
          <button className="btn d-block text-center w-100 p-3  fs-4 submit mb-4">
            Create Account
          </button>
          <button className="d-block btn  text-center w-100 p-3 fs-4 google-signup bg-transparent ">
            <img src={googleIcon} alt="google-Icon" className="me-2" />
            Sign up with Google
          </button>
          <p className="text-center mt-4 fs-5">
            Already have account ?{" "}
            <NavLink className="login-btn text-dark p-2">Log in</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
