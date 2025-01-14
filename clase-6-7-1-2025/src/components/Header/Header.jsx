import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://github.com/gabrielalberini.png" alt="foto de perfil" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }