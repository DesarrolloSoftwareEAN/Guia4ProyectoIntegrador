import React, { useEffect, useState } from "react";
import { getClientes } from "../services/clientesService";

interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
}

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await getClientes();
        console.log("Clientes obtenidos:", data);
        setClientes(data);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
        setError("Hubo un error al cargar los clientes.");
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Gestión de Clientes</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {clientes.length === 0 && !error ? (
        <p>No hay clientes disponibles.</p>
      ) : (
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente.id}>
              <strong>{cliente.nombre}</strong> - {cliente.email} - {cliente.telefono}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clientes;
