import { Router } from "express";
import { getProductos, createProducto } from "../controllers/productosController";

const router = Router();

router.get("/", getProductos);
router.post("/", createProducto);

export default router;