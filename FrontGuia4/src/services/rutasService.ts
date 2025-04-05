import api from "./api";

export const getRutas = async () => {
  const response = await api.get("/rutas"); // Asegúrate de que este endpoint sea correcto
  return response.data; // Devuelve los datos obtenidos
};