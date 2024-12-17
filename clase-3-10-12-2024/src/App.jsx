import CrearSaludo from './CrearSaludo.jsx'
import "./App.css"

const nombre = "Gabriel"
const edad = 47

const App = () => {
  return (
    <div>
      <CrearSaludo />
      <Componente2 />

      <p>Mi nombre es {nombre} y
        {
          edad > 17
            ? <span style={{ color: "red" }}> soy mayor de edad</span>
            : <span style={{ color: "green" }}> soy menor de edad</span>
        }.
      </p>

      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default App
