import axios from "axios";

export const serverUrl = "http://localhost:4000";

export const getData = async (URL) => {
  try {
    const headers = {
      token: JSON.parse(localStorage.getItem("TOKEN")),
    };

    const response = await axios.get(URL, { headers });

    const data = response.data.data.user;
    return data;
  } catch (error) {
    console.log(error);
  }
};
