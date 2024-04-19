import React from "react";
import { Navigate } from "react-router-dom";
import { decodeToken } from "../../helpers/decodeToken";
import NotFoundPage from "./NotFoundPage";

const ProtectedAdminRoute = (props) => {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to={"/login/user"} />;
  }
  if (decodeToken().role === "ADMIN") {
    return props.children;
  } else {
    return <NotFoundPage navigateTo="/login/user" />;
  }
};
// ==============================================================
const ProtectedSellerRoute = (props) => {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to={"/login/seller"} />;
  }
  if (decodeToken().role === "SELLER") {
    return props.children;
  } else {
    return <NotFoundPage navigateTo="/login/user" />;
  }
};
// ==============================================================

const ProtectedUserRoute = (props) => {
  // if (localStorage.getItem("TOKEN") === null) {
  //   return <Navigate to={"/"} />;
  // }

  if (
    localStorage.getItem("TOKEN") &&
    (decodeToken()?.role === "ADMIN" || decodeToken().role === "SELLER")
  ) {
    if (decodeToken()?.role === "ADMIN") {
      return <NotFoundPage navigateTo="/admin" />;
    } else if (decodeToken()?.role === "SELLER") {
      return <NotFoundPage navigateTo="/seller" />;
    }
  } else {
    return props.children;
  }
};

export { ProtectedAdminRoute, ProtectedSellerRoute, ProtectedUserRoute };
