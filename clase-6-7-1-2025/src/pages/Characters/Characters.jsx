import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout/Layout"
import "./Characters.css"
import { CharacterCard } from "../../components/CharacterCard/CharacterCard.jsx"

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
      }
      )
  }, [])


  return (
    <Layout>
      <h1>Hola desde CHARACTERS</h1>
      <p>A continuación la lista de los 20 personajes más conocidos de la serie:</p>
      <article className="cont-characters">
        {
          characters.map((character) => {
            return (
              <CharacterCard character={character} />
            )
          })
        }
      </article>
    </Layout>
  )
}

export { Characters }