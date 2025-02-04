import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { logout } from "../config/auth";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { user, setUser } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      setUser(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <header className="navbar is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>UTN App</strong>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            {
              user ? <>
                <Link to="/dashboard" className="navbar-item">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="navbar-item">
                  Cerrar sesión
                </button>
              </> : <Link to="/login" className="navbar-item">Login</Link>
            }
          </div>
        </div>
      </header>

      <main style={{ minHeight: "100vh" }} className="section">
        <div className="container">{children}</div>
      </main>

      <footer className="footer has-background-primary has-text-white">
        <div className="content has-text-centered">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export { Layout };
