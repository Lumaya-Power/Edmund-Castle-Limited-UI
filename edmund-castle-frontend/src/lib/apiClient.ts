import axios from "axios";
import { environment } from "../config/environment";

export const apiClient = axios.create({
  baseURL: environment.apiBaseUrl,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ?? error.message ?? "Something went wrong";
    return Promise.reject(new Error(message));
  }
);
