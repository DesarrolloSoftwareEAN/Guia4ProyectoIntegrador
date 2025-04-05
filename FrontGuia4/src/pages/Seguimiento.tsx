import React, { useEffect, useState } from "react";
import { getSeguimientos } from "../services/seguimientoService";

const Seguimiento: React.FC = () => {
  const [seguimientos, setSeguimientos] = useState([]);

  useEffect(() => {
    const fetchSeguimientos = async () => {
      const data = await getSeguimientos();
      setSeguimientos(data);
    };

    fetchSeguimientos();
  }, []);

  return (
    <div>
      <h1>Seguimiento de Envíos</h1>
      <ul>
        {seguimientos.map((seguimiento: any) => (
          <li key={seguimiento.id}>
            Pedido: {seguimiento.id_pedido}, Estado: {seguimiento.estado}, Fecha: {seguimiento.fecha_actualizacion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seguimiento;