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

  axios
    .post(`${serverUrl}${endPoint}`, values)
    .then((res) => {
      console.log(res);
      const { message } = res.data;
      const token = res.data.data.token;

      toast.success(message);

      localStorage.setItem("TOKEN", JSON.stringify(token));

      resetForm();
      setTimeout(() => {
        if (userType === "user") {
          navigate("/");
        } else if (userType === "seller") {
          navigate("/Seller/");
        }
      }, 2500);
    })
    .catch((error) => {
      const { message } = error.response.data;
      toast.error(message);
    });
};

export { handleRegistration };
