function OnClickEvent() {

  const clicking = (name) => {
    console.log(`Hola ${name}`)
  }

  return (
    <>
      <h1>Hola desde app</h1>
      <button onClick={() => clicking("Gabo")}>Haz click</button>
    </>
  )
}

export default OnClickEvent
