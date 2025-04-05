import "../styles/Footer.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 TechLogistics S.A. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Política de Privacidad</a>
          <a href="/terms">Términos y Condiciones</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;