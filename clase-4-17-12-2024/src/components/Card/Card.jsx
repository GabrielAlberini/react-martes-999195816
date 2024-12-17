import { Profile } from "../Profile/Profile.jsx"
import { Stat } from "../Stat/Stat.jsx"
import "./Card.css"

const Card = () => {
  return (
    <div className="card">
      <Profile
        urlImg="https://www.mgp.net.au/wp-content/uploads/2023/05/150-1503945_transparent-user-png-default-user-image-png-png-300x262.png"
        name="Gabriel"
        age="30"
        city="Santa Fe"
      />
      <div className="stats">
        <Stat amount="80K" text="Followers" />
        <Stat amount="803K" text="Favorites" />
        <Stat amount="1.4k" text="Likes" />
      </div>
    </div>
  )
}

export { Card }