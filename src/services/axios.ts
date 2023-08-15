import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

export const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
