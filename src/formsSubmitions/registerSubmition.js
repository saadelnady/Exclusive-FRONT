import axios from "axios";
import { toast } from "react-toastify";
import { serverUrl } from "../API/API";

const handleRegiter = (values, { resetForm }, navigate) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(`${serverUrl}/api/users/register`, values, config)
    .then((res) => {
      const { message } = res.data;
      toast.success(message);
      const token = res.data.data.user.token;
      localStorage.setItem("TOKEN", JSON.stringify(token));
      resetForm();
      setTimeout(() => {
        navigate("/");
      }, 1500);
    })
    .catch((error) => {
      const { message } = error.response.data;
      toast.error(message);
    });
};
export { handleRegiter };
