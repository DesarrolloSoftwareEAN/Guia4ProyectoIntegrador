import { Router } from "express";
import { getRutas, createRuta } from "../controllers/rutasController";

const router = Router();

router.get("/", getRutas); 
router.post("/", createRuta); 

export default router;