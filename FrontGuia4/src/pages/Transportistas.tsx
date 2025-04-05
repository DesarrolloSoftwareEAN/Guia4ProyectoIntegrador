import React, { useEffect, useState } from "react";
import { getTransportistas } from "../services/transportistasService";

interface Transportista {
  id: number;
  nombre: string;
  telefono: string;
  licencia: string;
}

const Transportistas: React.FC = () => {
  const [transportistas, setTransportistas] = useState<Transportista[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransportistas = async () => {
      try {
        const data = await getTransportistas(); // Llama al servicio correcto
        console.log("Datos de transportistas:", data); // Verifica los datos en la consola
        setTransportistas(data);
      } catch (err) {
        console.error("Error al obtener los transportistas:", err);
        setError("Hubo un error al cargar los transportistas.");
      }
    };

    fetchTransportistas();
  }, []);

  return (
    <div>
      <h1>Gestión de Transportistas</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {transportistas.map((transportista) => (
          <li key={transportista.id}>
            Nombre: {transportista.nombre}, Teléfono: {transportista.telefono}, Licencia: {transportista.licencia}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transportistas;