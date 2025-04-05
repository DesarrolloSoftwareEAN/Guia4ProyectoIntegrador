"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const pedidosRoutes_1 = __importDefault(require("./routes/pedidosRoutes"));
const seguimientoRoutes_1 = __importDefault(require("./routes/seguimientoRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const rutasRoutes_1 = __importDefault(require("./routes/rutasRoutes"));
const transportistasRoutes_1 = __importDefault(require("./routes/transportistasRoutes"));
app.use("/api/clientes", clientesRoutes_1.default);
app.use("/api/pedidos", pedidosRoutes_1.default);
app.use("/api/seguimientos", seguimientoRoutes_1.default);
app.use("/api/productos", productosRoutes_1.default);
app.use("/api/rutas", rutasRoutes_1.default);
app.use("/api/transportistas", transportistasRoutes_1.default);
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
