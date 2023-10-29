import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});
