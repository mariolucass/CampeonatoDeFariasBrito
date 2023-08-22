import axios from "axios";

const baseURL = "https://back-end-projeto-farias-brito.vercel.app/api";

export const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
