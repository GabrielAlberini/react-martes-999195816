import { Link } from "react-router-dom";

const products = [
  { id: 1, name: 'Producto 1', price: 100, sku: 'SKU001', description: 'Descripción 1' },
  { id: 2, name: 'Producto 2', price: 200, sku: 'SKU002', description: 'Descripción 2' },
  { id: 3, name: 'Producto 3', price: 300, sku: 'SKU003', description: 'Descripción 3' },
  { id: 4, name: 'Producto 4', price: 400, sku: 'SKU004', description: 'Descripción 4' },
];

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">Listado de productos</h1>
      <section className="columns is-multiline">
        {
          products.map((product) => (
            <div key={product.id} className="column is-one-quarter">
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-4">{product.name}</h3>
                  <p className="subtitle is-6">Precio: ${product.price}</p>
                  <p>SKU: {product.sku}</p>
                  <p>{product.description}</p>
                </div>
                <footer className="card-footer">
                  <Link to={`/product/${product.id}`} className="card-footer-item has-text-info">
                    Ver detalle
                  </Link>
                </footer>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export { Home }
