import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Admin from "./layouts/Admin/Admin.jsx";
import Seller from "./layouts/Seller/Seller.jsx";
import Login from "./layouts/Login/Login.jsx";
import User from "./layouts/User/User.jsx";
import Register from "./layouts/Register/Register.jsx";

import {
  ProtectedAdminRoute,
  ProtectedSellerRoute,
  ProtectedUserRoute,
} from "./components/Shared/ProtectedRoute.jsx";

function App() {
  const [isWarning, setIsWarning] = useState(false);

  const handleShowWarning = () => {
    setIsWarning(!isWarning);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />

        <Route
          path="/*"
          element={
            <ProtectedUserRoute>
              <User />
            </ProtectedUserRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedAdminRoute>
              <Admin
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/seller/*"
          element={
            <ProtectedSellerRoute>
              <Seller
                isWarning={isWarning}
                handleShowWarning={handleShowWarning}
              />
            </ProtectedSellerRoute>
          }
        />
      </Routes>
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
