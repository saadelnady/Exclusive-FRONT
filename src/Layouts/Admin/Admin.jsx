import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchUserProfile,
  fetchUsers,
} from "../../store/actions/user/userActions.js";
import { Route, Routes } from "react-router-dom";

import { AdminSideBar } from "../../components/Admin/Shared/AdminSideBar.jsx";
import { AdminHeader } from "../../components/Admin/Shared/AdminHeader.jsx";
import { AdminDashboard } from "../../components/Admin/DashBoard/DashBoard.jsx";

import { toast } from "react-toastify";

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
import {
  acceptProduct,
  blockProduct,
  unBlockProduct,
} from "../../store/actions/product/productActions.js";
import NotFoundPage from "../../components/Shared/NotFoundPage.jsx";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdBlock } from "react-icons/md";

const Admin = () => {
  // =================================================================================
  const [isWarning, setIsWarning] = useState(false);
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
  const productAcceptAction = {
    type: { AR: "موافقة", EN: "Accept" },
    message: {
      AR: "هل تود الموافقة على هذا المنتج ؟",
      EN: "Are you sure to Accept this product ?",
    },
    Icon: <AiOutlineCheckCircle />,
    actionHandler: (productId) => {
      const payLoad = { productId, toast, handleShowWarning };
      dispatch(acceptProduct(payLoad));
    },
  };
  // ===============================================

  const productBlockAction = {
    type: { AR: "حجب", EN: "Block" },
    message: {
      AR: "هل تود حجب هذا المنتج ؟",
      EN: "Are you sure to Block this product ?",
    },
    Icon: <MdBlock />,
    actionHandler: (productId) => {
      const payLoad = { productId, toast };
      dispatch(unBlockProduct(payLoad));
    },
  };
  // ===============================================

  const productUnBlockAction = {
    type: { AR: "أزالة الحجب", EN: "UnBlock" },
    message: {
      AR: "هل تود أزالة الحجب عن هذا المنتج ؟",
      EN: "Are you sure to UnBlock this product ?",
    },
    Icon: <MdBlock />,
    actionHandler: (productId) => {
      const payLoad = { productId, toast };
      dispatch(blockProduct(payLoad));
    },
  };
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
          <Route path="/profile" element={<AdminProfile />} />

          <Route
            path="/products/:productId"
            element={
              <Product
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
                action={action}
                setAction={setAction}
                handleBlockProduct={productBlockAction.actionHandler}
                handleAceeptProduct={productAcceptAction.actionHandler}
                handleUnBlockProduct={productUnBlockAction.actionHandler}
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
                handleShowWarning={handleShowWarning}
                action={action}
                setAction={setAction}
                handleAceeptProduct={productAcceptAction.actionHandler}
                handleUnBlockProduct={productBlockAction.actionHandler}
                handleBlockProduct={productBlockAction.actionHandler}
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
