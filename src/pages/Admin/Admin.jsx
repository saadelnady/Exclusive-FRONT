import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, fetchUsers } from "../../store/actions/user/userActions";
import { Route, Routes } from "react-router-dom";

import { AdminSideBar } from "../../components/Admin/shared/AdminSideBar";
import { AdminHeader } from "../../components/Admin/shared/AdminHeader";
import { AdminDashboard } from "../../components/Admin/AdminDashBoard";
import { JoinRequests } from "../../components/Admin/JoinRequests";
import { Categories } from "../../components/Admin/Categories";
import { AddSubCategory } from "../../components/Admin/AddSubCategory";
import { SubCategories } from "../../components/Admin/SubCategories";
import { AddCategory } from "../../components/Admin/AddCategory";

import Profile from "../../components/Profile/Index";

import { fetchSellers } from "../../store/actions/seller/sellerActions";
import { fetchCategories } from "../../store/actions/category/categoryActions";
import "../../components/Admin/styles/Admin.css";
import { fetchSubCategories } from "../../store/actions/subCategory/subCategoryActions";

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
      dispatch(fetchCategories());
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
          <Route path="/joinRequests" element={<JoinRequests />} />
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
            path="/subCategories/editSubCategory/:subCategoryId"
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
