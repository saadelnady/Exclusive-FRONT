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
import { getCart } from "../../store/actions/cart/cartActions.js";

const User = () => {
  const { isLoggedIn, user } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log(cart);
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUserProfile());
    }
    if (user?._id) {
      dispatch(getCart(user._id));
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
  }, [dispatch, user._id]);

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
        {isLoggedIn && <Route path="/cart" element={<Cart />} />}
        {isLoggedIn && <Route path="/wishlist" element={<Wishlist />} />}
        {isLoggedIn && <Route path="/checkout" element={<Checkout />} />}

        <Route path="*" element={<NotFoundPage navigateTo="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default User;
