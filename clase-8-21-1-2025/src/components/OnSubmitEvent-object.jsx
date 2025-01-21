import { useState } from "react"
import { hashPassword } from "../utils/hashPassword"

const OnSubmitEvent = () => {
  const initialUserDataState = {
    name: "",
    password: ""
  }

  const [userData, setUserData] = useState(initialUserDataState)

  const validateForm = () => {
    // Validaciones simples: Verificar que los campos no estén vacíos y que la contraseña tenga un mínimo de 6 caracteres
    if (!userData.name.trim()) {
      alert("El nombre no puede estar vacío.")
      return false
    }

    if (userData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.")
      return false
    }

    return true
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      const newUser = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        name: userData.name,
        password: await hashPassword(userData.password)
      }

      if (validateForm()) {
        console.log(newUser)
        setUserData(initialUserDataState)
      } else {
        throw new Error("Validaciones incorrectas")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserData({
      ...userData,
      [name]: value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={userData.name}
        />
        <input
          type="password"
          placeholder="Pass"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export { OnSubmitEvent }
