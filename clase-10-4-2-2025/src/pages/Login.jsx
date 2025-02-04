import { Layout } from "../components/Layout";
import { login, logout } from "../config/auth";
import { useAuth } from "../context/UserContext";

const Login = () => {
  const { user, setUser } = useAuth();

  const handleLogin = async () => {
    try {
      const loggedInUser = await login();
      setUser(loggedInUser);
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout()
      setUser(null)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <Layout>
      <div className="container is-flex is-justify-content-center is-align-items-center" style={{ height: "100vh" }}>
        <div className="box has-text-centered">
          <h1 className="title">Iniciar sesión</h1>
          {user ? (
            <div>
              <figure className="image is-128x128 is-inline-block">
                <img className="is-rounded" src={user.photoURL} alt="Avatar" />
              </figure>
              <p className="subtitle">Bienvenido, {user.displayName}</p>
              <button className="button is-danger is-fullwidth" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button className="button is-primary is-fullwidth" onClick={handleLogin}>
              <span className="icon">
                <i className="fab fa-google"></i>
              </span>
              <span>Iniciar sesión con Google</span>
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export { Login };
