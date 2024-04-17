import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import ActivationPage from "../../components/Shared/Activation.jsx";

import Home from "../../components/User/Home/Index.jsx";
import Cart from "../../components/User/Cart/Index.jsx";
import Product from "../../components/User/Product/Index.jsx";
import About from "../../components//User/About/Index.jsx";
import Contact from "../../components/User/Contact/Index.jsx";
import Profile from "../../components/Shared/Profile/Index.jsx";

import Header from "../../components/User/Shared/Header/Index.jsx";
import Footer from "../../components/User/Shared/Footer/Footer.jsx";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../../store/actions/user/userActions.js";
import NotFoundPage from "../../components/Shared/NotFoundPage.jsx";
import FlashSales from "../../components/User/FlashSales/FlashSales.jsx";
import Products from "../../components/User/Products/Products.jsx";
import Category from "../../components/User/Category/Index.jsx";
import SubCategory from "../../components/User/SubCategory/Index.jsx";

const User = () => {
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
        <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/flashsales" element={<FlashSales />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:categoryTitle" element={<Category />} />
        <Route
          path="/categories/:categoryTitle/:subCategoryTitle"
          element={<SubCategory />}
        />

        <Route path="*" element={<NotFoundPage navigateTo="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default User;
