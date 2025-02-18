import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { DetailProduct } from "../pages/DetailProduct"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Layout } from "../components/Layout"

// Cada ruta necesita el path y la vista a mostrar
// Personalizar la página de not found (crearla)
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { Router }