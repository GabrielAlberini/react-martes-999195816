import { Footer } from "../Footer/Footer.jsx"
import { Header } from "../Header/Header.jsx"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export { Layout }