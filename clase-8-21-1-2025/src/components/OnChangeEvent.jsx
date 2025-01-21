import { useState } from "react"

function OnChangeEvent() {
  const [name, setName] = useState("")

  const handleClick = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1>Hola desde On Change Event</h1>
      <input type="text" onChange={handleClick} />
      {
        name && <h2>Hola {name}</h2>
      }
    </>
  )
}

export default OnChangeEvent
