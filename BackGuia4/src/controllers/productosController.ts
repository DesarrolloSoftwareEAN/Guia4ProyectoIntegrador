import { Request, Response } from "express";
import pool from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  created_at: string;
}

export const getProductos = async (req: Request, res: Response): Promise<void> => {
  try {
    // Tipamos correctamente el resultado de la consulta SELECT
    const [rows] = (await pool.query("SELECT * FROM productos") as unknown) as [Producto[]];
    res.json(rows);
  } catch (error) {
    console.error("Error en getProductos:", error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const createProducto = async (req: Request, res: Response): Promise<void> => {
  const { nombre, descripcion, precio, stock } = req.body;
  try {
    // Tipamos correctamente el resultado de la consulta INSERT
    const [result] = (await pool.query(
      "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)",
      [nombre, descripcion, precio, stock]
    )) as unknown as [ResultSetHeader];
    res.json({ id: result.insertId, nombre, descripcion, precio, stock });
  } catch (error) {
    console.error("Error en createProducto:", error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
};