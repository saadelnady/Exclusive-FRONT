import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Admin from "./Layouts/Admin/Admin.jsx";
import Seller from "./Layouts/Seller/Seller.jsx";
import User from "./Layouts/User/User.jsx";
import NotFoundPage from "./components/shared/NotFoundPage.jsx";

import {
  ProtectedAdminRoute,
  ProtectedSellerRoute,
} from "./components/shared/ProtectedRoute.jsx";

function App() {
  const [isWarning, setIsWarning] = useState(false);

  const handleWarning = () => {
    setIsWarning(!isWarning);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<User />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedAdminRoute>
              <Admin isWarning={isWarning} handleWarning={handleWarning} />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/seller/*"
          element={
            <ProtectedSellerRoute>
              <Seller isWarning={isWarning} handleWarning={handleWarning} />
            </ProtectedSellerRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
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
