// Importar módulos encargados de manejar las rutas en react
// Crear el router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home.jsx"
import { Characters } from "../pages/Characters/Characters.jsx"
import { NotFound } from "../pages/NotFound/NotFound.jsx"

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        {/* Mostrar el home en la ruta "/" -> <Home /> */}
        <Route path="/" element={<Home />} />
        {/* Mostrar la página de personajes en la ruta "/characters" -> <Characters /> */}
        <Route path="/characters" element={<Characters />} />
        {/* Crear la página not found por defecto */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export { RouterApp }