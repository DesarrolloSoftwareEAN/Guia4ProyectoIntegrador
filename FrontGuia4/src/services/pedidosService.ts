import api from "./api";

export const getPedidos = async () => {
  const response = await api.get("/pedidos"); 
  return response.data;
};