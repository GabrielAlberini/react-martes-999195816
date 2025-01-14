import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout/Layout"
import { Loader } from "../../components/Loader/Loader"
import { CharacterCard } from "../../components/CharacterCard/CharacterCars"
import { fetchingData } from "../../services/charactersApi"

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    try {
      const charactersData = await fetchingData()
      setCharacters(charactersData)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      {isLoading && <Loader />}
      {characters.length > 0 && <div className="container">
        <h1>Personajes de Harry Potter</h1>
        <div className="row mt-4">
          {
            characters.map((character) => {
              return (
                <CharacterCard character={character} />
              )
            })
          }
        </div>
      </div>}
    </Layout>
  )
}

export { Characters }