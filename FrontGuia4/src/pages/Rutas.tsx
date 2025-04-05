import React, { useEffect, useState } from "react";
import { getRutas } from "../services/rutasService";

interface Ruta {
  id: number;
  origen: string;
  destino: string;
  duracion: string;
}

const Rutas: React.FC = () => {
  const [rutas, setRutas] = useState<Ruta[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRutas = async () => {
      try {
        const data = await getRutas();
        console.log("Datos de rutas:", data); // Verifica los datos en la consola
        setRutas(data);
      } catch (err) {
        console.error("Error al obtener las rutas:", err);
        setError("Hubo un error al cargar las rutas.");
      }
    };

    fetchRutas();
  }, []);

  return (
    <div>
      <h1>Gestión de Rutas</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {rutas.map((ruta) => (
          <li key={ruta.id}>
            Origen: {ruta.origen}, Destino: {ruta.destino}, Duración: {ruta.duracion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rutas;