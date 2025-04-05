import api from "./api";

export const getSeguimientos = async () => {
  const response = await api.get("/seguimientos"); // La URL completa será http://localhost:3001/api/seguimientos
  return response.data;
};