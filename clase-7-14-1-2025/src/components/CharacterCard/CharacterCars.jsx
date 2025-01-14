const CharacterCard = ({ character }) => {
  const { id, imagen, personaje, apodo, casaDeHogwarts, interpretado_por, hijos } = character

  return <div className="col-md-4 mb-4" key={id}>
    <div className="card bg-dark text-white">
      <img
        src={imagen}
        alt={personaje}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{personaje}</h5>
        <p className="card-text">
          <strong>Apodo:</strong> {apodo}
        </p>
        <p className="card-text">
          <strong>Casa de Hogwarts:</strong> {casaDeHogwarts}
        </p>
        <p className="card-text">
          <strong>Interpretado por:</strong> {interpretado_por}
        </p>
        <p className="card-text">
          <strong>Hijos:</strong> {hijos.join(", ")}
        </p>
      </div>
    </div>
  </div>
}

export { CharacterCard }