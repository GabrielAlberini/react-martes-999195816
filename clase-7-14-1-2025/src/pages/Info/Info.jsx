import { Layout } from "../../components/Layout/Layout"
import { Link } from "react-router-dom"

const Info = () => {
  return (
    <Layout>
      <div className="container text-center mt-5">
        <h1>Datos Curiosos del Mundo Mágico</h1>
        <p className="mt-4">
          Sumérgete en el fascinante universo de Harry Potter con información única y reveladora sobre el mundo de los magos, las casas de Hogwarts y mucho más.
        </p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Las Casas de Hogwarts</h5>
                <p className="card-text">
                  Cada casa tiene su propia historia y características únicas. ¿De qué casa serías tú?
                </p>
                <Link to="/info" className="btn btn-outline-light">
                  Descubre Más
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Magia y Hechizos</h5>
                <p className="card-text">
                  Conoce los hechizos más famosos y las artes oscuras que marcaron la historia.
                </p>
                <Link to="/info" className="btn btn-outline-light">
                  Explorar Magia
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Criaturas Mágicas</h5>
                <p className="card-text">
                  Descubre criaturas fantásticas como el hipogrifo, el basilisco y mucho más.
                </p>
                <Link to="/info" className="btn btn-outline-light">
                  Conocer Criaturas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Info }
