import { Router } from "express";
import { getSeguimientos, createSeguimiento } from "../controllers/seguimientoController";

const router = Router();

router.get("/", getSeguimientos);
router.post("/", createSeguimiento);

export default router;