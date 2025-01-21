import { useState } from "react"
import { hashPassword } from "../utils/hashPassword"

const OnSubmitEvent = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      const newUser = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        name,
        password: await hashPassword(password)
      }

      console.log(newUser)
    } catch (error) {
      console.error("Tenes un error :(", error)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    if (name === "name") {
      setName(e.target.value)
    }

    if (name === "password") {
      setPassword(e.target.value)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={handleChange} value={name} />
        <input type="password" placeholder="Pass" name="password" onChange={handleChange} value={password} />
        <button>Enviar</button>
      </form>
    </>
  )
}

export { OnSubmitEvent }