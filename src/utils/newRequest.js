import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://event-app-backend-v2.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
