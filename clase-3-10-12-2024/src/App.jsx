import CrearSaludo from './CrearSaludo.jsx'
import './App.css'

const nombre = "Edrian"
const edad = 38

const App = () => {
  return (
    <div>
      <CrearSaludo />
      <p>Mi nombre es {nombre} y {edad > 17 ? "soy mayor de edad" : "soy menor de edad"}.</p>
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
