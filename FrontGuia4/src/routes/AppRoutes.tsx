import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pedidos from "../pages/Pedidos";
import Seguimiento from "../pages/Seguimiento";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/seguimiento" element={<Seguimiento />} />
    </Routes>
  );
};

export default AppRoutes;