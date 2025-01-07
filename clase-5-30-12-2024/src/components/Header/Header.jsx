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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Characters</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }