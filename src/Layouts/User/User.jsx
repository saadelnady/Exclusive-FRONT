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

import Header from "../../components/shared/Header/Header.jsx";
import Footer from "../../components/shared/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/actions/user/userActions.js";
import NotFoundPage from "../../components/shared/Header/NotFoundPage.jsx";

const User = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log("user ===>", user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
        /> */}

        {user.role === "User" && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products/:productId" element={<Product />} />
          </>
        )}

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/sellerLogin" element={<SellerLogin />} />
        <Route path="/sellerRegister" element={<SellerRegister />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default User;
