import { Layout } from "../../components/Layout/Layout"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Layout>
      <div className="container text-center mt-5">
        <h1>¡Bienvenido a la Harry Potter APP!</h1>
        <p className="mt-4">
          Explora el mundo mágico creado por J.K. Rowling. Aquí encontrarás información sobre los personajes, curiosidades y todo lo relacionado con el universo de Harry Potter.
        </p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Personajes</h5>
                <p className="card-text">
                  Descubre a tus magos, brujas y criaturas mágicas favoritas.
                </p>
                <Link to="/personajes" className="btn btn-outline-light">
                  Ver Personajes
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Datos Curiosos</h5>
                <p className="card-text">
                  Aprende datos interesantes sobre el mundo mágico que no conocías.
                </p>
                <Link to="/info" className="btn btn-outline-light">
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Explorar Más</h5>
                <p className="card-text">
                  Adéntrate en la magia y vive la experiencia como un verdadero mago.
                </p>
                <Link to="/" className="btn btn-outline-light">
                  Comenzar Aventura
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Home }
