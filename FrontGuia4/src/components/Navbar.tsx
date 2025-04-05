import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">TechLogistics</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/pedidos">Pedidos</Link></li>
        <li><Link to="/rutas">Rutas</Link></li>
        <li><Link to="/transportistas">Transportistas</Link></li>
        <li><Link to="/seguimiento">Seguimiento</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;