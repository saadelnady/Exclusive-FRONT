import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, fetchUsers } from "../../store/actions/user/userActions";
import { Route, Routes } from "react-router-dom";

import { AdminSideBar } from "../../components/Admin/shared/AdminSideBar";
import { AdminHeader } from "../../components/Admin/shared/AdminHeader";
import { AdminDashboard } from "../../components/Admin/AdminDashBoard";
import { ProductsAddRequests } from "../../components/Admin/ProductsRequests";
import { Categories } from "../../components/Admin/Categories";
import { Product } from "../../components/Admin/Product.jsx";
import { AddSubCategory } from "../../components/Admin/AddSubCategory";
import { SubCategories } from "../../components/Admin/SubCategories";
import { AddCategory } from "../../components/Admin/AddCategory";
import { BlockedProducts } from "../../components/Admin/BlockedProducts";

import Profile from "../../components/Profile/Index";

import { fetchSellers } from "../../store/actions/seller/sellerActions";
import "../../components/Admin/styles/Admin.css";

export const Admin = ({ isWarning, handleWarning }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSidebarActivation = () => {
    setIsActive(!isActive);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
      dispatch(fetchUsers());
      dispatch(fetchSellers());
    }
  }, [dispatch]);
  return (
    <div className="admin-layout">
      <AdminSideBar
        isActive={isActive}
        handleSidebarActivation={handleSidebarActivation}
      />
      <div className="d-flex flex-column w-100 ">
        <AdminHeader handleSidebarActivation={handleSidebarActivation} />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/productsAddRequests"
            element={
              <ProductsAddRequests
                isWarning={isWarning}
                handleWarning={handleWarning}
              />
            }
          />
          <Route path="/productsAddRequests/:productId" element={<Product />} />
          <Route
            path="/blockedProducts"
            element={
              <BlockedProducts
                isWarning={isWarning}
                handleWarning={handleWarning}
              />
            }
          />
          <Route
            path="/Categories"
            element={
              <Categories isWarning={isWarning} handleWarning={handleWarning} />
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
                handleWarning={handleWarning}
              />
            }
          />
          <Route path="/addSubCategory" element={<AddSubCategory />} />
        </Routes>
      </div>
    </div>
  );
};
