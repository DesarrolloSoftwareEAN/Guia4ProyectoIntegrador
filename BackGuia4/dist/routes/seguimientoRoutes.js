"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seguimientoController_1 = require("../controllers/seguimientoController");
const router = (0, express_1.Router)();
router.get("/", seguimientoController_1.getSeguimientos);
router.post("/", seguimientoController_1.createSeguimiento);
exports.default = router;
