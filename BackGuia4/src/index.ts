import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
import clientesRoutes from "./routes/clientesRoutes";
import pedidosRoutes from "./routes/pedidosRoutes";
import seguimientosRoutes from "./routes/seguimientoRoutes";
import productosRoutes from "./routes/productosRoutes";
import rutasRoutes from "./routes/rutasRoutes";
import transportistasRoutes from "./routes/transportistasRoutes";

app.use("/api/clientes", clientesRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/seguimientos", seguimientosRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/rutas", rutasRoutes);
app.use("/api/transportistas", transportistasRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});