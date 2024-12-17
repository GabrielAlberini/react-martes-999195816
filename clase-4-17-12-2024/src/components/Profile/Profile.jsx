import "./Profile.css"

const Profile = ({ urlImg, name, age, city }) => {
  return (
    <div className="cont-profile">
      <img src={urlImg} alt="imagen de usuario" />
      <div className="name">
        <h3>{name}</h3>
        <span>{age}</span>
      </div>
      <h4>{city}</h4>
    </div>
  )
}

export { Profile }