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
      const { message } = res.data;

      toast.success(message);
      let token = "";
      if (userType === "user") {
        token = res.data.data.user.token;
      } else if (userType === "seller") {
        token = res.data.data.seller.token;
      }

      localStorage.setItem("TOKEN", JSON.stringify(token));

      resetForm();
      setTimeout(() => {
        if (userType === "user") {
          navigate("/");
        } else if (userType === "seller") {
          navigate("/sellerDashboard");
        }
      }, 2500);
    })
    .catch((error) => {
      const { message } = error.response.data;
      toast.error(message);
    });
};

export { handleRegistration };
