import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import UserActivationPage from "../../components/Shared/UserActivationPage.jsx";
import SellerActivationPage from "../../components/Shared/SellerActivationPage.jsx";

import Header from "../../components/User/Shared/Header/Index.jsx";
import Footer from "../../components/User/Shared/Footer/Footer.jsx";
import Home from "../../components/User/Home/Index.jsx";
import Cart from "../../components/User/Cart/Index.jsx";
import Product from "../../components/User/Product/Index.jsx";
import SellerPage from "../../components/User/SellerPage/Index.jsx";
import About from "../../components//User/About/Index.jsx";
import Contact from "../../components/User/Contact/Index.jsx";
import Profile from "../../components/Shared/Profile/Index.jsx";
import FlashSales from "../../components/User/FlashSales/FlashSales.jsx";
import Products from "../../components/User/Products/Products.jsx";
import Category from "../../components/User/Category/Index.jsx";
import Checkout from "../../components/User/Checkout/Index.jsx";
import Wishlist from "../../components/User/Wishlist/Index.jsx";
import NotFoundPage from "../../components/Shared/NotFoundPage.jsx";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/actions/user/userActions.js";
import { fetchCategories } from "../../store/actions/category/categoryActions.js";
import {
  fetchFlashSalesProducts,
  fetchProducts,
} from "../../store/actions/product/productActions.js";
import { productStatus } from "../../helpers/options.js";

const User = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUserProfile());
    }
    dispatch(fetchCategories({ limit: 7, page: 1 }));
    dispatch(
      fetchFlashSalesProducts({
        limit: 8,
        page: 1,
        status: productStatus.ACCEPTED,
        type: "flashSale",
      })
    );

    dispatch(
      fetchProducts({
        limit: 8,
        page: 1,
        status: productStatus.ACCEPTED,
        type: "notFlashSale",
      })
    );
  }, [dispatch]);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/userActivation/:activationToken"
          element={<UserActivationPage />}
        />
        <Route
          path="/sellerActivation/:activationToken"
          element={<SellerActivationPage />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/flashsales" element={<FlashSales />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sellerpage/:sellerId" element={<SellerPage />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route
          path="/category/:categoryId/:subCategoryId"
          element={<Category />}
        />

        {isLoggedIn && <Route path="/profile/*" element={<Profile />} />}

        <Route path="*" element={<NotFoundPage navigateTo="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default User;
