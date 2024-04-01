import React from "react";
import { Navigate } from "react-router-dom";
import { decodeToken } from "../../helpers/decodeToken";
import NotFoundPage from "./NotFoundPage";

const ProtectedAdminRoute = (props) => {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to={"/user/login"} />;
  }
  if (decodeToken().role === "ADMIN") {
    return props.children;
  } else {
    return NotFoundPage;
  }
};
// ==============================================================
const ProtectedSellerRoute = (props) => {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to={"/user/login"} />;
  }
  if (decodeToken().role === "SELLER") {
    return props.children;
  } else {
    return NotFoundPage;
  }
};
// ==============================================================

const ProtectedUserRoute = (props) => {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to={"/user/login"} />;
  }

  if (localStorage.getItem("TOKEN")) {
    if (decodeToken()?.role === "USER") {
      return props.children;
    } else {
      return NotFoundPage;
    }
  }
};

export { ProtectedAdminRoute, ProtectedSellerRoute, ProtectedUserRoute };
