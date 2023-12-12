import axios from "axios";

import { toast } from "react-toastify";
import { serverUrl } from "../API/API";

const handleLogin = async (values, { resetForm }, navigate) => {
  axios
    .post(`${serverUrl}/api/users/login`, values, {
      origin: "http://localhost:3000",
      credentials: true,
    })
    .then((res) => {
      toast.success(res.data.message);
      const { token } = res.data.data.user;
      localStorage.setItem("TOKEN", JSON.stringify(token));

      resetForm();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    })
    .catch((errors) => {
      const { message } = errors.response.data;

      toast.error(message);
    });
};

export { handleLogin };