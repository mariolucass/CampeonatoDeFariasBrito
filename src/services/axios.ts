import axios from "axios";

const baseURL = "https://back-end-projeto-farias-brito.vercel.app/api";
const localUrl = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: baseURL,
  timeout: 12000,
});
