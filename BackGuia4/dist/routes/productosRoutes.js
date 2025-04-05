"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
const router = (0, express_1.Router)();
router.get("/", productosController_1.getProductos);
router.post("/", productosController_1.createProducto);
exports.default = router;
