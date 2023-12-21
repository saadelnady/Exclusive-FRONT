import axios from "axios";
import { toast } from "react-toastify";
import { serverUrl } from "../API/API";

const handleRegistration = (values, { resetForm }, navigate, userType) => {
  let endPoint = "";
  if (userType === "user") {
    endPoint = "/api/users/register";
  } else if (userType === "seller") {
    endPoint = "/api/sellers/register";
  }
  console.log("endPoint====>", endPoint);
  axios
    .post(`${serverUrl}${endPoint}`, values)
    .then((res) => {
      const { message } = res.data;
      toast.success(message);
      const token = res.data.data.user.token;
      localStorage.setItem("TOKEN", JSON.stringify(token));
      resetForm();
      setTimeout(() => {
        navigate("/");
      }, 2500);
    })
    .catch((error) => {
      const { message } = error.response.data;
      toast.error(message);
    });
};

export { handleRegistration };
