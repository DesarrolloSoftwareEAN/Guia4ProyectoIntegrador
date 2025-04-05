import { Router } from "express";
import { getTransportistas, createTransportista } from "../controllers/transportistasController";

const router = Router();

router.get("/", getTransportistas);
router.post("/", createTransportista);

export default router;