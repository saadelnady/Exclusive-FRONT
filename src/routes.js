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
import { Admin } from "./pages/Admin";
import { Seller } from "./pages/Seller";
// =============================================================================
// shared components
import { Footer } from "./components/shared/Footer";
import { Header } from "./components/shared/Header";
import { Search } from "./components/shared/Search";
import { Announce } from "./components/shared/Announce";
import { Card } from "./components/shared/Card";
import { NavBar } from "./components/shared/NavBar";
import { User } from "./components/shared/User";
import { AboutUs } from "./components/shared/AboutUs";

// =============================================================================
// not shared components
import { ProductDetails } from "./components/ProductDetails";
import { RelatedItem } from "./components/RelatedItem";
import { Slider } from "./components/Slider";
import { FlashSale } from "./components/FlashSale";
import { CategouriesBrowse } from "./components/CategouriesBrowse";
import { BestSelling } from "./components/BestSelling";
import { OurProducts } from "./components/OurProducts";
import { NewArrival } from "./components/NewArrival";
// =============================================================================
// admin
import { AdminDashboard } from "./pages/Admin/AdminDashboard";
import { DashboardCard } from "./components/shared/Admin/DashBoardCard";
import { Statstics } from "./components/shared/Admin/Statstics";
import { AdminHeader } from "./components/shared/Admin/AdminHeader";
import { AdminSideBar } from "./components/shared/Admin/AdminSideBar";
import { SellersList } from "./components/shared/Admin/SellersList";
import { UsersList } from "./components/shared/Admin/UsersList";
// =================================================================================
// seller
 

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
  CategouriesBrowse,
  BestSelling,
  OurProducts,
  NewArrival,
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
};
 
