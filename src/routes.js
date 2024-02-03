// =============================================================================
// pages
import { Home } from "./pages/Home";
import { UserLogin } from "./pages/UserLogin";
import { UserRegister } from "./pages/UserRegister";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Activation } from "./pages/Activation";
import { Product } from "./pages/Product";
import { Profile } from "./pages/Profile";
import { SellerRegister } from "./pages/SellerRegister";
import { SellerLogin } from "./pages/SellerLogin";
import { Admin } from "./pages/Admin/Admin";
import { Seller } from "./pages/Seller/Seller";
// =============================================================================
// shared components
import { Footer } from "./components/shared/Footer/Footer.jsx";
import { Header } from "./components/shared/Header/Header";
import { Search } from "./components/shared/Header/Search.jsx";
import { Announce } from "./components/shared/Announce";
import { Card } from "./components/shared/Card";
import { NavBar } from "./components/shared/Header/NavBar.jsx";
import { User } from "./components/shared/Header/User.jsx";
import { AboutUs } from "./components/shared/AboutUs";
import { Loading } from "./components/shared/Loading";

// =============================================================================
// not shared components
import { ProductDetails } from "./components/ProductDetails";
import { RelatedItem } from "./components/Home/RelatedItem.jsx";
import { Slider } from "./components/Home/Slider.jsx";
import { FlashSale } from "./components/Home/FlashSale.jsx";
import { CategoriesBrowse } from "./components/Home/CategoriesBrowse.jsx";
import { BestSelling } from "./components/Home/BestSelling.jsx";
import { OurProducts } from "./components/Home/OurProducts.jsx";
import { NewArrival } from "./components/Home/NewArrival.jsx";
// =============================================================================
// admin
import { AdminDashboard } from "./pages/Admin/AdminDashboard";
import { Categories } from "./pages/Admin/Categories.jsx";
import { AddCategory } from "./pages/Admin/AddCategory.jsx";
import { AddSubCategory } from "./pages/Admin/AddSubCategory.jsx";
import { SubCategories } from "./pages/Admin/SubCategories.jsx";
import { JoinRequests } from "./pages/Admin/JoinRequests.jsx";
import { DashboardCard } from "./components/shared/Admin/DashBoardCard";
import { Statstics } from "./components/shared/Admin/Statstics";
import { AdminHeader } from "./components/shared/Admin/AdminHeader";
import { AdminSideBar } from "./components/shared/Admin/AdminSideBar";
import { SellersList } from "./components/shared/Admin/SellersList";
import { UsersList } from "./components/shared/Admin/UsersList";

// =================================================================================
// seller
import { SellerDashboard } from "./pages/Seller/SellerDashboard";
import { AddProduct } from "./pages/Seller/AddProduct";
import { SellerSideBar } from "./components/shared/Seller/SellerSideBar";
import { SellerHeader } from "./components/shared/Seller/SellerHeader";
// =================================================================================
export {
  Footer,
  Header,
  Search,
  Announce,
  Product,
  RelatedItem,
  Card,
  NavBar,
  User,
  Slider,
  FlashSale,
  AboutUs,
  CategoriesBrowse,
  BestSelling,
  OurProducts,
  NewArrival,
  Loading,
};
export {
  Home,
  UserLogin,
  UserRegister,
  Contact,
  About,
  Activation,
  SellerLogin,
  ProductDetails,
  Profile,
  SellerRegister,
};

export { Admin, Seller };

export {
  AdminDashboard,
  DashboardCard,
  AdminSideBar,
  Statstics,
  AdminHeader,
  SellersList,
  UsersList,
  JoinRequests,
  Categories,
  SubCategories,
  AddCategory,
  AddSubCategory,
};
export { SellerDashboard, SellerSideBar, SellerHeader, AddProduct };
