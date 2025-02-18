import { signInWithGoogle } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        console.log("Usuario autenticado", result.user);
        navigate("/");
      })
      .catch(e => console.log(e));
  };

  return (
    <div className="container mt-5">
      <div className="column is-half is-offset-one-quarter">
        <div className="box has-text-centered">
          <h2 className="title">Iniciar sesión</h2>
          <button
            className="button is-danger is-light is-medium"
            onClick={handleGoogleLogin}
          >
            <span>Iniciar sesión con Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Login };
