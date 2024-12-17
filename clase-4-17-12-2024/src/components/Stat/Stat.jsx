import "./Stat.css"

const Stat = (props) => {
  const { amount, text } = props

  return (
    <div className="stat">
      <h3>{amount}</h3>
      <p>{text}</p>
    </div>
  )
}

export { Stat }