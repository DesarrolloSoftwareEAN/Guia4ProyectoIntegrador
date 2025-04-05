"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesController_1 = require("../controllers/clientesController");
const router = (0, express_1.Router)();
router.get("/", clientesController_1.getClientes);
router.post("/", clientesController_1.createCliente);
exports.default = router;
