import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  fetchUsers,
} from "../../store/actions/user/userActions.js";
import { Route, Routes } from "react-router-dom";

import { AdminSideBar } from "../../components/Admin/Shared/AdminSideBar.jsx";
import { AdminHeader } from "../../components/Admin/Shared/AdminHeader.jsx";
import { AdminDashboard } from "../../components/Admin/DashBoard/DashBoard.jsx";

import { AcceptedProducts } from "../../components/Admin/Products/AcceptedProducts.jsx";
import { BlockedProducts } from "../../components/Admin/Products/BlockedProducts.jsx";
import { PendingProducts } from "../../components/Admin/Products/PendingProducts.jsx";

import { Categories } from "../../components/Admin/Categories/Categories.jsx";
import Product from "../../components/Admin/Product/Index.jsx";
import AdminProfile from "../../components/Admin/AdminProfile/Index.jsx";
import Seller from "../../components/Admin/Seller/Index.jsx";
import { AddSubCategory } from "../../components/Admin/AddsubCategory/AddSubCategory.jsx";
import { SubCategories } from "../../components/Admin/SubCategories/SubCategories.jsx";
import { AddCategory } from "../../components/Admin/AddCategory/AddCategory.jsx";

import { fetchSellers } from "../../store/actions/seller/sellerActions.js";
import "./styles/Admin.css";

import NotFoundPage from "../../components/Shared/NotFoundPage.jsx";

const Admin = () => {
  const { theme } = useSelector((state) => state.themeReducer);
  // =================================================================================
  const [isWarning, setIsWarning] = useState(false);
  const token = localStorage.getItem("TOKEN");
  const handleShowWarning = () => {
    setIsWarning(!isWarning);
  };
  const dispatch = useDispatch();
  // =================================================================================
  const [isActive, setIsActive] = useState(false);
  const handleSidebarActivation = () => {
    setIsActive(!isActive);
  };
  // =================================================================================
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
      dispatch(fetchUsers());
      dispatch(fetchSellers());
    }
  }, [dispatch]);

  return (
    <div className={`admin-layout ${theme}`}>
      <AdminSideBar
        isActive={isActive}
        handleSidebarActivation={handleSidebarActivation}
      />
      <div className="d-flex flex-column w-100">
        <AdminHeader handleSidebarActivation={handleSidebarActivation} />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/profile" element={<AdminProfile />} />

          <Route
            path="/products/:productId"
            element={
              <Product
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />
          <Route
            path="/pendingProducts"
            element={
              <PendingProducts
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />
          <Route
            path="/acceptedProducts"
            element={
              <AcceptedProducts
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />

          <Route
            path="/blockedProducts"
            element={
              <BlockedProducts
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />
          <Route
            path="/Categories"
            element={
              <Categories
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route
            path="/Categories/editCategory/:categoryId"
            element={<AddCategory />}
          />
          <Route
            path="/subCategories/:subCategoryId"
            element={<AddSubCategory />}
          />
          <Route
            path="/subCategories"
            element={
              <SubCategories
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />
          <Route path="/addSubCategory" element={<AddSubCategory />} />
          <Route
            path="/seller/:sellerId"
            element={
              <Seller
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            }
          />
          <Route path="*" element={<NotFoundPage navigateTo="/admin" />} />
        </Routes>
      </div>
    </div>
  );
};
export default Admin;
