import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ORBITON_SMART_ROUTER_ENDPOINT || "https://api.orbiton.fi/api",
});

export default instance;
