"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transportistasController_1 = require("../controllers/transportistasController");
const router = (0, express_1.Router)();
router.get("/", transportistasController_1.getTransportistas);
router.post("/", transportistasController_1.createTransportista);
exports.default = router;
