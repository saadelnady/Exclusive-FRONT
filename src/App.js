import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Admin } from "./pages/Admin/Admin.jsx";
import { ProductPage } from "./pages/Product.jsx";
import { HomePage } from "./pages/Home.jsx";
import { AboutPage } from "./pages/About.jsx";
import { UserLoginPage } from "./pages/UserLogin.jsx";
import { UserRegisterPage } from "./pages/UserRegister.jsx";
import { ContactPage } from "./pages/Contact.jsx";
import { ProfilePage } from "./pages/Profile.jsx";
import { SellerLoginPage } from "./pages/SellerLogin.jsx";
import { SellerRegisterPage } from "./pages/SellerRegister.jsx";
import { ActivationPage } from "./pages/Activation.jsx";
import { Seller } from "./pages/Seller/Seller.jsx";
import { Header } from "./components/shared/Header/Header.jsx";
import { Footer } from "./components/shared/Footer/Footer.jsx";
function App() {
  const location = useLocation();

  const shouldHide =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/Seller");

  return (
    <div className="App">
      {!shouldHide && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="/user/register" element={<UserRegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/seller/login" element={<SellerLoginPage />} />
        <Route path="/seller/register" element={<SellerRegisterPage />} />
        <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
        />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/Seller/*" element={<Seller />} />
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
