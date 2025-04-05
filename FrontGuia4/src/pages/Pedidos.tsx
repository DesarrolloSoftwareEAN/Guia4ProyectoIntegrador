import React, { useEffect, useState } from "react";
import { getPedidos } from "../services/pedidosService";

interface Pedido {
  id: number;
  cliente_id: number;
  descripcion: string;
  total: string;
  created_at: string;
}

const Pedidos: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const data = await getPedidos();
        console.log("Pedidos obtenidos:", data); // Debugging
        setPedidos(data);
      } catch (error) {
        console.error("Error al obtener pedidos:", error);
        setError("Hubo un error al cargar los pedidos.");
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div>
      <h1>Gestión de Pedidos</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {pedidos.length === 0 && !error ? (
        <p>No hay pedidos disponibles.</p>
      ) : (
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id}>
              <strong>{pedido.descripcion}</strong> - ${pedido.total} <br />
              <small>Fecha: {new Date(pedido.created_at).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pedidos;
