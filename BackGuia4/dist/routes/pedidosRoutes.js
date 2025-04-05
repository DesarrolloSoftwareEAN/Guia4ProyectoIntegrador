"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidosController_1 = require("../controllers/pedidosController");
const router = (0, express_1.Router)();
router.get("/", pedidosController_1.getPedidos);
router.post("/", pedidosController_1.createPedido);
exports.default = router;
