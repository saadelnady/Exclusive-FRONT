import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

// import { ActivationPage } from "./components/Shared/Activation.jsx";

import Home from "../../components/User/Home/Index.jsx";
import Product from "../../components/User/Product/Index.jsx";
import About from "../../components//User/About/Index.jsx";
import Contact from "../../components/User/Contact/Index.jsx";
import Profile from "../../components/Shared/Profile/Index.jsx";

import Header from "../../components/User/Shared/Header/Index.jsx";
import Footer from "../../components/User/Shared/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/actions/user/userActions.js";
import NotFoundPage from "../../components/Shared/NotFoundPage.jsx";

const User = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

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

        <Route path="*" element={<NotFoundPage navigateTo="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default User;
