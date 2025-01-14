const Loader = () => {
  return <div className="text-center">
    <h2>Cargando personajes...</h2>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
}

export { Loader }