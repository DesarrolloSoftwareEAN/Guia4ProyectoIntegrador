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
exports.createRuta = exports.getRutas = void 0;
const db_1 = __importDefault(require("../config/db"));
const getRutas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query("SELECT * FROM rutas");
        res.json(rows);
    }
    catch (error) {
        console.error("Error al obtener rutas:", error);
        res.status(500).json({ error: "Error al obtener las rutas" });
    }
});
exports.getRutas = getRutas;
const createRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { origen, destino, duracion } = req.body;
    try {
        const [result] = yield db_1.default.query("INSERT INTO rutas (origen, destino, duracion) VALUES (?, ?, ?)", [origen, destino, duracion]);
        res.json({ id: result.insertId, origen, destino, duracion });
    }
    catch (error) {
        console.error("Error al crear ruta:", error);
        res.status(500).json({ error: "Error al crear la ruta" });
    }
});
exports.createRuta = createRuta;
