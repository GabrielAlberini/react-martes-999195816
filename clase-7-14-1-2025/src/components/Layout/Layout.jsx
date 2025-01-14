import { Link } from "react-router-dom"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">Harry Potter APP</Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/personajes">Personajes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/info">Info</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-dark text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="navbar-brand text-white">Harry Potter APP</h5>
              <p>Tu portal para explorar el mágico mundo de Harry Potter, con información sobre personajes, datos curiosos y mucho más.</p>
            </div>

            <div className="col-md-4">
              <h5>Navegación</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/personajes">Personajes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/info">Info</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Síguenos</h5>
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://facebook.com" className="nav-link text-white" target="_blank">
                    <i className="bi bi-facebook"></i> Facebook
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com" className="nav-link text-white" target="_blank">
                    <i className="bi bi-twitter"></i> Twitter
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://instagram.com" className="nav-link text-white" target="_blank">
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-4 text-white" />

          <div className="text-center pb-3">
            <p className="mb-0">&copy; 2025 Harry Potter APP. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>


    </>
  )
}

export { Layout }