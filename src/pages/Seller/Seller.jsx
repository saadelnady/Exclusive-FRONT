import { Route, Routes, useNavigate } from "react-router-dom";

import { fetchSellerProfile } from "../../store/actions/seller/sellerActions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { SellerSideBar } from "../../components/Seller/shared/SellerSideBar";
import { SellerHeader } from "../../components/Seller/shared/SellerHeader";
import { SellerDashboard } from "../../components/Seller/SellerDashboard";
import { AddProduct } from "../../components/Seller/AddProduct";
import { Products } from "../../components/Seller/Products.jsx";

import "../../components/Seller/styles/seller.css";
import Profile from "../../components/Profile/Index";
import { fetchCategories } from "../../store/actions/category/categoryActions.js";

export const Seller = ({ isWarning, handleWarning }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSidebarActivation = () => {
    setIsActive(!isActive);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchSellerProfile());
      dispatch(fetchCategories());
    } else {
      navigate("/seller/login");
    }
  }, [dispatch]);
  return (
    <div className="seller-layout">
      <SellerSideBar
        isActive={isActive}
        handleSidebarActivation={handleSidebarActivation}
      />
      <div className="d-flex flex-column w-100">
        <SellerHeader handleSidebarActivation={handleSidebarActivation} />
        <Routes>
          <Route path="/" element={<SellerDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route
            path="/products/editProduct/:productId"
            element={<AddProduct />}
          />
          <Route
            path="/products"
            element={
              <Products isWarning={isWarning} handleWarning={handleWarning} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
