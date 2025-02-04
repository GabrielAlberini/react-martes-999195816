import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Escuchar cambios de autenticación
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup al desmontar
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>
    {children}
  </AuthContext.Provider>;
};

// Hook personalizado para acceder al contexto
const useAuth = () => useContext(AuthContext);

export { useAuth }