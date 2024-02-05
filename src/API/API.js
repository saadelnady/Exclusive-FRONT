import axios from "axios";

export const serverUrl = process.env.REACT_APP_SERVER_URL;

const headers = {
  token: JSON.parse(localStorage.getItem("TOKEN")),
};

const handleRequest = async (method, URL, data = null) => {
  try {
    const response = await axios({
      method,
      url: `${serverUrl}${URL}`,
      headers,
      data,
    });

    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getData = async (URL) => {
  return handleRequest("get", URL);
};

export const postData = async (URL, data) => {
  return handleRequest("post", URL, data);
};

export const putData = async (URL, data) => {
  return handleRequest("put", URL, data);
};

export const deleteData = async (URL) => {
  return handleRequest("delete", URL);
};
