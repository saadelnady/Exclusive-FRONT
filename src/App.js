import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/Index.jsx";
import Product from "./components/Product/Index.jsx";
import About from "./components/About/Index.jsx";
import Contact from "./components/Contact/Index.jsx";
import Profile from "./components/Profile/Index.jsx";

import SellerLogin from "./components/Seller/Login.jsx";
import SelllerRegister from "./components/Seller/Register.jsx";

import UserLogin from "./components/Login/Index.jsx";
import UserRegister from "./components/Register/Index.jsx";

import { ActivationPage } from "./components/shared/Activation.jsx";
import { Seller } from "./pages/Seller/Seller.jsx";
import { Header } from "./components/shared/Header/Header.jsx";
import { Footer } from "./components/shared/Footer/Footer.jsx";
import { Admin } from "./pages/Admin/Admin.jsx";

function App() {
  const location = useLocation();
  const [isWarning, setIsWarning] = useState(false);

  const handleWarning = () => {
    setIsWarning(!isWarning);
  };

  const shouldHide =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/Seller");

  return (
    <div className="App">
      {!shouldHide && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/register" element={<SelllerRegister />} />
        <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
        />
        <Route
          path="/admin/*"
          element={
            <Admin isWarning={isWarning} handleWarning={handleWarning} />
          }
        />
        <Route
          path="/Seller/*"
          element={
            <Seller isWarning={isWarning} handleWarning={handleWarning} />
          }
        />
      </Routes>

      {!shouldHide && <Footer />}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
