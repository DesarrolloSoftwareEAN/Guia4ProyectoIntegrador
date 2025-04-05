import api from "./api";

export const getTransportistas = async () => {
  const response = await api.get("/transportistas"); // Asegúrate de que este endpoint sea correcto
  return response.data; // Devuelve los datos obtenidos
};