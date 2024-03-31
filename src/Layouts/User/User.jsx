import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

// import { ActivationPage } from "./components/shared/Activation.jsx";

import Home from "../../components/User/Home/Index.jsx";
import Product from "../../components/User/Product/Index.jsx";
import About from "../../components//User/About/Index.jsx";
import Contact from "../../components/User/Contact/Index.jsx";
import Profile from "../../components/shared/Profile/Index.jsx";

import SellerLogin from "../../components/Seller/Login.jsx";
import SellerRegister from "../../components/Seller/Register.jsx";

import UserLogin from "../../components/User/Login/Index.jsx";
import UserRegister from "../../components/User/Register/Index.jsx";

import Header from "../../components/User/shared/Header/Index.jsx";
import Footer from "../../components/User/shared/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/actions/user/userActions.js";
import NotFoundPage from "../../components/shared/NotFoundPage.jsx";

const User = () => {
  const { isLoggedIn, token } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, isLoggedIn]);

  return (
    <div>
      <Header />
      <Routes>
        {/* <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
        /> */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:productId" element={<Product />} />

        {!isLoggedIn && (
          <>
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />{" "}
            <Route path="/sellerLogin" element={<SellerLogin />} />
            <Route path="/sellerRegister" element={<SellerRegister />} />
          </>
        )}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default User;
