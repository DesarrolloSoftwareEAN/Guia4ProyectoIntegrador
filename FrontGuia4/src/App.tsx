import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
import Seguimiento from "./pages/Seguimiento";
import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import Rutas from "./pages/Rutas";
import Transportistas from "./pages/Transportistas"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/pedidos" element={<Pedidos />} />
  <Route path="/seguimiento" element={<Seguimiento />} />
  <Route path="/clientes" element={<Clientes />} />
  <Route path="/productos" element={<Productos />} />
  <Route path="/rutas" element={<Rutas />} />
  <Route path="/transportistas" element={<Transportistas />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;