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
exports.createPedido = exports.getPedidos = void 0;
const db_1 = __importDefault(require("../config/db"));
const getPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Tipamos correctamente el resultado de la consulta SELECT
        const [rows] = yield db_1.default.query("SELECT * FROM pedidos");
        res.json(rows);
    }
    catch (error) {
        console.error("Error en getPedidos:", error);
        res.status(500).json({ error: "Error al obtener los pedidos" });
    }
});
exports.getPedidos = getPedidos;
const createPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cliente_id, descripcion, total } = req.body;
    try {
        // Tipamos correctamente el resultado de la consulta INSERT
        const [result] = (yield db_1.default.query("INSERT INTO pedidos (cliente_id, descripcion, total) VALUES (?, ?, ?)", [cliente_id, descripcion, total]));
        res.json({ id: result.insertId, cliente_id, descripcion, total });
    }
    catch (error) {
        console.error("Error en createPedido:", error);
        res.status(500).json({ error: "Error al crear el pedido" });
    }
});
exports.createPedido = createPedido;
