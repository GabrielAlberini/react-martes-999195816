// eslint-disable-next-line react/prop-types
const ProductDetail = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{product.name}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <p className="has-text-weight-bold">Price: {product.price}</p>
          <p className="has-text-weight-bold">Quotas: {product.quotas}</p>
          <p className="mt-4">{product.longDescription}</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export { ProductDetail };
