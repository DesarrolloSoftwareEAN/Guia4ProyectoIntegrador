import { Request, Response } from "express";
import pool from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

interface Seguimiento {
  id: number;
  id_pedido: number;
  estado: string;
  fecha_actualizacion: string;
}

export const getSeguimientos = async (req: Request, res: Response): Promise<void> => {
  try {
    // Tipamos correctamente el resultado de la consulta SELECT
    const [rows] = (await pool.query("SELECT * FROM seguimientos") as unknown) as [Seguimiento[]];
    res.json(rows);
  } catch (error) {
    console.error("Error en getSeguimientos:", error);
    res.status(500).json({ error: "Error al obtener los seguimientos" });
  }
};

export const createSeguimiento = async (req: Request, res: Response): Promise<void> => {
  const { id_pedido, estado, fecha_actualizacion } = req.body;
  try {
    // Tipamos correctamente el resultado de la consulta INSERT
    const [result] = (await pool.query(
      "INSERT INTO seguimientos (id_pedido, estado, fecha_actualizacion) VALUES (?, ?, ?)",
      [id_pedido, estado, fecha_actualizacion]
    )) as unknown as [ResultSetHeader];
    res.json({ id: result.insertId, id_pedido, estado, fecha_actualizacion });
  } catch (error) {
    console.error("Error en createSeguimiento:", error);
    res.status(500).json({ error: "Error al crear el seguimiento" });
  }
};