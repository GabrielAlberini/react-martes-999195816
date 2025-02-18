import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: 'Producto 1', price: 100, sku: 'SKU001', description: 'Descripción 1' },
  { id: 2, name: 'Producto 2', price: 200, sku: 'SKU002', description: 'Descripción 2' },
  { id: 3, name: 'Producto 3', price: 300, sku: 'SKU003', description: 'Descripción 3' },
  { id: 4, name: 'Producto 4', price: 400, sku: 'SKU004', description: 'Descripción 4' },
];

// localhost:5173/product/1

const DetailProduct = () => {
  const { id } = useParams();
  const foundProduct = products.find(product => product.id === Number(id));

  if (!foundProduct) {
    return (
      <div className="container mt-5">
        <h2 className="title has-text-danger">No se encuentra el producto...</h2>
        <Link to="/" className="button is-info mt-4">Volver al listado</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-content">
          <h2 className="title is-3">{foundProduct.name}</h2>
          <p className="subtitle is-5">Precio: ${foundProduct.price}</p>
          <p><strong>SKU:</strong> {foundProduct.sku}</p>
          <p>{foundProduct.description}</p>
        </div>
        <footer className="card-footer">
          <Link to="/" className="card-footer-item has-text-info">
            Volver al listado
          </Link>
        </footer>
      </div>
    </div>
  );
}

export { DetailProduct }
