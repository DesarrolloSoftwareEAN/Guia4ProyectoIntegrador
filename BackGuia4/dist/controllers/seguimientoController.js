"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeguimiento = exports.getSeguimientos = void 0;
const db_1 = __importDefault(require("../config/db"));
const getSeguimientos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Tipamos correctamente el resultado de la consulta SELECT
        const [rows] = yield db_1.default.query("SELECT * FROM seguimientos");
        res.json(rows);
    }
    catch (error) {
        console.error("Error en getSeguimientos:", error);
        res.status(500).json({ error: "Error al obtener los seguimientos" });
    }
});
exports.getSeguimientos = getSeguimientos;
const createSeguimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_pedido, estado, fecha_actualizacion } = req.body;
    try {
        // Tipamos correctamente el resultado de la consulta INSERT
        const [result] = (yield db_1.default.query("INSERT INTO seguimientos (id_pedido, estado, fecha_actualizacion) VALUES (?, ?, ?)", [id_pedido, estado, fecha_actualizacion]));
        res.json({ id: result.insertId, id_pedido, estado, fecha_actualizacion });
    }
    catch (error) {
        console.error("Error en createSeguimiento:", error);
        res.status(500).json({ error: "Error al crear el seguimiento" });
    }
});
exports.createSeguimiento = createSeguimiento;
