import React, { useEffect, useState } from "react";
import { getProductos } from "../services/productosService";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        console.log("Productos obtenidos:", data);
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setError("Hubo un error al cargar los productos.");
      }
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Gestión de Productos</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {productos.length === 0 && !error ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <strong>{producto.nombre}</strong> - {producto.descripcion} - ${producto.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Productos;
