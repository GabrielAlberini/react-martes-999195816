import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <strong>Mi Sitio</strong>
            </Link>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">Home</Link>
              <Link className="navbar-item" to="/register">Registrar usuario</Link>
              <Link className="navbar-item" to="/login">Iniciar sesión</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="section">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="footer has-background-primary has-text-white-ter">
        <div className="content has-text-centered">
          <p>Sitio desarrollado por Pepe Alfonso</p>
        </div>
      </footer>
    </>
  );
};

export { Layout };
