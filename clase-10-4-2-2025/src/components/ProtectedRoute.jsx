import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" replace />;
};

export { ProtectedRoute };
