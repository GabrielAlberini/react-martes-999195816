import "./CharacterCard.css"

const CharacterCard = ({ character }) => {
  const { id, name, image, species, status } = character

  return (
    <div className="character-card" key={id}>
      <h2>{name}</h2>
      <img src={image} alt={"imagen de " + name} />
      <p>{status} - {species}</p>
    </div>
  )
}

export { CharacterCard }