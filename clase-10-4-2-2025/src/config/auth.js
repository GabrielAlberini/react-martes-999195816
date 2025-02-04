import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Proveedor de autenticación con Google
const googleProvider = new GoogleAuthProvider();

// Función para iniciar sesión con Google
const login = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Devuelve el usuario autenticado
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
};

// Función para cerrar sesión
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

export { login, logout }