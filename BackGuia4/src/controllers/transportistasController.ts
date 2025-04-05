import { Request, Response } from "express";
import pool from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

interface Transportista {
  id: number;
  nombre: string;
  telefono: string;
  empresa_transportadora: string;
}

export const getTransportistas = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = (await pool.query("SELECT * FROM transportistas") as unknown) as [Transportista[]];
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener transportistas:", error);
    res.status(500).json({ error: "Error al obtener los transportistas" });
  }
};

export const createTransportista = async (req: Request, res: Response): Promise<void> => {
  const { nombre, telefono, empresa_transportadora } = req.body;
  try {
    const [result] = (await pool.query(
      "INSERT INTO transportistas (nombre, telefono, empresa_transportadora) VALUES (?, ?, ?)",
      [nombre, telefono, empresa_transportadora]
    )) as unknown as [ResultSetHeader];
    res.json({ id: result.insertId, nombre, telefono, empresa_transportadora });
  } catch (error) {
    console.error("Error al crear transportista:", error);
    res.status(500).json({ error: "Error al crear el transportista" });
  }
};