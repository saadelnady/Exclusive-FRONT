import React from "react";
import Header from "../../components/User/Shared/Header/Index";
import Footer from "../../components/User/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SellerRegister from "../../components/Auth/Register/Seller/Index";
import UserRegister from "../../components/Auth/Register/User/Index";

const Register = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/user" element={<UserRegister />}></Route>
        <Route path="/seller" element={<SellerRegister />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Register;
