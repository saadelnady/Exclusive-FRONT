import { serverUrl } from "../utils/utils";

import axios from "axios";
import { toast } from "react-toastify";

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
      resetForm();
      navigate("/");
      localStorage.setItem("TOKEN", JSON.stringify(res.data.data.user.token));
    })
    .catch((error) => {
      const { message } = error.response.data;
      toast.error(message);
    });
};
export { handleRegiter };
