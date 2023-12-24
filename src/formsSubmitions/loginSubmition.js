import axios from "axios";

import { toast } from "react-toastify";
import { serverUrl } from "../API/API";

const handleLogin = async (values, { resetForm }, navigate, userType) => {
  let endPoint = "";
  if (userType === "user") {
    endPoint = "/api/users/login";
  } else if (userType === "seller") {
    endPoint = "/api/sellers/login";
  }

  axios
    .post(`${serverUrl}${endPoint}`, values)
    .then((res) => {
      toast.success(res.data.message);

      let token = "";

      if (userType === "user") {
        token = res.data.data.user.token;
        console.log("user  tokeeeen ==== >", token);
      } else if (userType === "seller") {
        token = res.data.data.seller.token;
        console.log("seller  tokeeeen ==== >", token);
      }
      localStorage.setItem("TOKEN", JSON.stringify(token));

      resetForm();

      setTimeout(() => {
        if (userType === "user") {
          navigate("/");
          const adminRole = res.data.data.user.role === "ADMIN";
          if (adminRole) {
            navigate("/adminDashboard");
          }
        } else if (userType === "seller") {
          navigate("/sellerDashboard");
        }
      }, 2500);
    })
    .catch((errors) => {
      console.log(errors);
      const { message } = errors.response.data;
      console.log(errors);
      toast.error(message);
    });
};

export { handleLogin };
