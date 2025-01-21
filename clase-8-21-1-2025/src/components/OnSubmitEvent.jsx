import { useState } from "react"


const OnSubmitEvent = () => {
  const [name, setName] = useState("")

  const sendData = () => {
    const newUser = {
      id: crypto.randomUUID(),
      role: "admin",
      username: name
    }

    console.log("Nuevo usuario:", newUser)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendData()
  }

  const handleChange = (e) => {
    setName(e.target.value)
    console.log("Actualizando nombre...")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={handleChange} value={name} />
        <button>Enviar</button>
      </form>
    </>
  )
}

export { OnSubmitEvent }