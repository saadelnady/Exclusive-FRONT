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
  console.log("endPoint====>", endPoint);

  axios
    .post(`${serverUrl}${endPoint}`, values)
    .then((res) => {
      toast.success(res.data.message);
      const { token } = res.data.data.user;
      localStorage.setItem("TOKEN", JSON.stringify(token));

      resetForm();
      setTimeout(() => {
        navigate("/");
      }, 2500);
    })
    .catch((errors) => {
      const { message } = errors.response.data;

      toast.error(message);
    });
};

export { handleLogin };
