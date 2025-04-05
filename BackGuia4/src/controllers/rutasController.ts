import { Request, Response } from "express";
import pool from "../config/db";
import { ResultSetHeader } from "mysql2";

interface Ruta {
  id: number;
  origen: string;
  destino: string;
  duracion: string;
}

export const getRutas = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = (await pool.query("SELECT * FROM rutas") as unknown) as [Ruta[]];
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener rutas:", error);
    res.status(500).json({ error: "Error al obtener las rutas" });
  }
};

export const createRuta = async (req: Request, res: Response): Promise<void> => {
  const { origen, destino, duracion } = req.body;
  try {
    const [result] = (await pool.query(
      "INSERT INTO rutas (origen, destino, duracion) VALUES (?, ?, ?)",
      [origen, destino, duracion]
    ) as unknown) as [ResultSetHeader];
    res.json({ id: result.insertId, origen, destino, duracion });
  } catch (error) {
    console.error("Error al crear ruta:", error);
    res.status(500).json({ error: "Error al crear la ruta" });
  }
};