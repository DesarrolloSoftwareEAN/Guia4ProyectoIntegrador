import { Request, Response } from "express";
import pool from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  created_at: string;
}

export const getClientes = async (req: Request, res: Response): Promise<void> => {
  try {
    // Tipamos correctamente el resultado de la consulta SELECT
    const [rows] = (await pool.query("SELECT * FROM clientes") as unknown) as [Cliente[]];
    res.json(rows);
  } catch (error) {
    console.error("Error en getClientes:", error);
    res.status(500).json({ error: "Error al obtener los clientes" });
  }
};

export const createCliente = async (req: Request, res: Response): Promise<void> => {
  const { nombre, email, telefono } = req.body;
  try {
    // Tipamos correctamente el resultado de la consulta INSERT
    const [result] = (await pool.query(
      "INSERT INTO clientes (nombre, email, telefono) VALUES (?, ?, ?)",
      [nombre, email, telefono]
    )) as unknown as [ResultSetHeader];
    res.json({ id: result.insertId, nombre, email, telefono });
  } catch (error) {
    console.error("Error en createCliente:", error);
    res.status(500).json({ error: "Error al crear el cliente" });
  }
};