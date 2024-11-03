import { useState } from 'react'
import './css/App.css'
// import Pokecard from './components/Pokecard'
import Pokedex from './components/Pokedex'
import PokedexList from './../PokedexList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pokedex items={PokedexList} />
    </>
  )
}

export default App
