import axios from "axios";
import { cookies } from "next/headers";
import envConfig from "@/src/config/envConfig";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Check if the server responded with an error message
    if (error.response) {
      const serverMessage = error.response.data?.message || "Something went wrong on the server.";
      return Promise.reject(new Error(serverMessage));
    }

    // Fallback to axios' native error message if no response
    return Promise.reject(error);
  }
);


export default axiosInstance;