import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchUserProfile,
  fetchUsers,
} from "../../store/actions/user/userActions.js";
import { Route, Routes } from "react-router-dom";

import { AdminSideBar } from "../../components/Admin/shared/AdminSideBar.jsx";
import { AdminHeader } from "../../components/Admin/shared/AdminHeader.jsx";
import { AdminDashboard } from "../../components/Admin/DashBoard/DashBoard.jsx";

import { toast } from "react-toastify";

import { AcceptedProducts } from "../../components/Admin/Products/AcceptedProducts.jsx";
import { BlockedProducts } from "../../components/Admin/Products/BlockedProducts.jsx";
import { PendingProducts } from "../../components/Admin/Products/PendingProducts.jsx";

import { Categories } from "../../components/Admin/Categories/Categories.jsx";
import Product from "../../components/Admin/Product/Index.jsx";
import Seller from "../../components/Admin/Seller/Index.jsx";
import { AddSubCategory } from "../../components/Admin/AddsubCategory/AddSubCategory.jsx";
import { SubCategories } from "../../components/Admin/SubCategories/SubCategories.jsx";
import { AddCategory } from "../../components/Admin/AddCategory/AddCategory.jsx";

import Profile from "../../components/shared/Profile/Index.jsx";

import { fetchSellers } from "../../store/actions/seller/sellerActions.js";
import "./styles/Admin.css";
import {
  acceptProduct,
  blockProduct,
  unBlockProduct,
} from "../../store/actions/product/productActions.js";
import NotFoundPage from "../../components/shared/NotFoundPage.jsx";

const Admin = ({ isWarning, handleWarning }) => {
  // =================================================================================
  const dispatch = useDispatch();
  // =================================================================================
  const [isActive, setIsActive] = useState(false);
  const handleSidebarActivation = () => {
    setIsActive(!isActive);
  };
  // =================================================================================
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUserProfile());
      dispatch(fetchUsers());
      dispatch(fetchSellers());
    }
  }, [dispatch]);
  // =================================================================================
  const [action, setAction] = useState({
    id: "",
    type: "",
    message: "",
    subMessage: "",
    actionHandler: null,
  });
  // =================================================================================
  const handleBlockProduct = (productId) => {
    const payLoad = { productId, toast };
    dispatch(blockProduct(payLoad));
  };
  const handleUnBlockProduct = (productId) => {
    const payLoad = { productId, toast };
    dispatch(unBlockProduct(payLoad));
  };
  const handleAceeptProduct = (productId) => {
    const payLoad = { productId, toast, handleWarning };
    dispatch(acceptProduct(payLoad));
  };
  // =================================================================================
  return (
    <div className="admin-layout">
      <AdminSideBar
        isActive={isActive}
        handleSidebarActivation={handleSidebarActivation}
      />
      <div className="d-flex flex-column w-100">
        <AdminHeader handleSidebarActivation={handleSidebarActivation} />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/pendingProducts"
            element={
              <PendingProducts
                isWarning={isWarning}
                handleWarning={handleWarning}
                action={action}
                setAction={setAction}
                handleBlockProduct={handleBlockProduct}
                handleAceeptProduct={handleAceeptProduct}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={
              <Product
                isWarning={isWarning}
                handleWarning={handleWarning}
                action={action}
                setAction={setAction}
                handleBlockProduct={handleBlockProduct}
                handleAceeptProduct={handleAceeptProduct}
                handleUnBlockProduct={handleUnBlockProduct}
              />
            }
          />
          <Route
            path="/acceptedProducts"
            element={
              <AcceptedProducts
                isWarning={isWarning}
                handleWarning={handleWarning}
                action={action}
                setAction={setAction}
                handleBlockProduct={handleBlockProduct}
              />
            }
          />
          <Route
            path="/blockedProducts"
            element={
              <BlockedProducts
                isWarning={isWarning}
                handleWarning={handleWarning}
                action={action}
                setAction={setAction}
                handleUnBlockProduct={handleUnBlockProduct}
              />
            }
          />
          <Route
            path="/Categories"
            element={
              <Categories
                isWarning={isWarning}
                handleWarning={handleWarning}
                action={action}
                setAction={setAction}
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
                handleWarning={handleWarning}
                action={action}
                setAction={setAction}
              />
            }
          />
          <Route path="/addSubCategory" element={<AddSubCategory />} />
          <Route
            path="/seller/:sellerId"
            element={
              <Seller
                isWarning={isWarning}
                handleWarning={handleWarning}
                action={action}
                setAction={setAction}
                handleAceeptProduct={handleAceeptProduct}
                handleUnBlockProduct={handleUnBlockProduct}
                handleBlockProduct={handleBlockProduct}
              />
            }
          />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    </div>
  );
};
export default Admin;
