import { Request, Response } from "express";
import pool from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

interface Pedido {
  id: number;
  cliente_id: number;
  descripcion: string;
  total: number;
  created_at: string;
}

export const getPedidos = async (req: Request, res: Response): Promise<void> => {
  try {
    // Tipamos correctamente el resultado de la consulta SELECT
    const [rows] = (await pool.query("SELECT * FROM pedidos") as unknown) as [Pedido[]];
    res.json(rows);
  } catch (error) {
    console.error("Error en getPedidos:", error);
    res.status(500).json({ error: "Error al obtener los pedidos" });
  }
};

export const createPedido = async (req: Request, res: Response): Promise<void> => {
  const { cliente_id, descripcion, total } = req.body;
  try {
    // Tipamos correctamente el resultado de la consulta INSERT
    const [result] = (await pool.query(
      "INSERT INTO pedidos (cliente_id, descripcion, total) VALUES (?, ?, ?)",
      [cliente_id, descripcion, total]
    )) as unknown as [ResultSetHeader];
    res.json({ id: result.insertId, cliente_id, descripcion, total });
  } catch (error) {
    console.error("Error en createPedido:", error);
    res.status(500).json({ error: "Error al crear el pedido" });
  }
};