import axios from "axios";

const API_URL = "http://localhost:3001/api";

const api = axios.create({
  baseURL: API_URL, // Todas las solicitudes usarán esta URL base
});

export default api;