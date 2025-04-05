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
exports.createTransportista = exports.getTransportistas = void 0;
const db_1 = __importDefault(require("../config/db"));
const getTransportistas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM transportistas");
        res.json(rows);
    }
    catch (error) {
        console.error("Error al obtener transportistas:", error);
        res.status(500).json({ error: "Error al obtener los transportistas" });
    }
});
exports.getTransportistas = getTransportistas;
const createTransportista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, telefono, empresa_transportadora } = req.body;
    try {
        const [result] = (yield db_1.default.query("INSERT INTO transportistas (nombre, telefono, empresa_transportadora) VALUES (?, ?, ?)", [nombre, telefono, empresa_transportadora]));
        res.json({ id: result.insertId, nombre, telefono, empresa_transportadora });
    }
    catch (error) {
        console.error("Error al crear transportista:", error);
        res.status(500).json({ error: "Error al crear el transportista" });
    }
});
exports.createTransportista = createTransportista;
