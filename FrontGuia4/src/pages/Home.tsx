import "../styles/Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Bienvenido a <span>TechLogistics</span>
        </h1>
        <p className="home-description">
          Gestiona tus pedidos y realiza un seguimiento eficiente con nuestra plataforma.
        </p>
      </div>
    </div>
  );
};

export default Home;