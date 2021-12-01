import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonList, setPokemonList] = useState([])

  const getPokemonList = () => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {

        setPokemonList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {

    getPokemonList()

  }, [])

  console.log(pokemonName)
  return (
    <div className="App">

      <select onChange={(event) => setPokemonName(event.target.value)}>
        <option value="" >Nenhum</option>
        {
          pokemonList.map((pokemon,index) => {
            return <option key = {index} value = {pokemon.name}>{pokemon.name}</option>

          }) 
        }
      </select>




    </div>
  );
}

export default App;
