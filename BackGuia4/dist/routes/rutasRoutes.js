"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutasController_1 = require("../controllers/rutasController");
const router = (0, express_1.Router)();
router.get("/", rutasController_1.getRutas);
router.post("/", rutasController_1.createRuta);
exports.default = router;
