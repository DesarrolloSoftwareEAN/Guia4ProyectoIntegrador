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
exports.createCliente = exports.getClientes = void 0;
const db_1 = __importDefault(require("../config/db"));
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Tipamos correctamente el resultado de la consulta SELECT
        const [rows] = yield db_1.default.query("SELECT * FROM clientes");
        res.json(rows);
    }
    catch (error) {
        console.error("Error en getClientes:", error);
        res.status(500).json({ error: "Error al obtener los clientes" });
    }
});
exports.getClientes = getClientes;
const createCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email, telefono } = req.body;
    try {
        // Tipamos correctamente el resultado de la consulta INSERT
        const [result] = (yield db_1.default.query("INSERT INTO clientes (nombre, email, telefono) VALUES (?, ?, ?)", [nombre, email, telefono]));
        res.json({ id: result.insertId, nombre, email, telefono });
    }
    catch (error) {
        console.error("Error en createCliente:", error);
        res.status(500).json({ error: "Error al crear el cliente" });
    }
});
exports.createCliente = createCliente;
