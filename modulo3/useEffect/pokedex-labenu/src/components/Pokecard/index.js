import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeCard ({pokeName}) {
    const [pokemon, setPokemon] = useState({})
   
    const getPokemonData = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
          // guarda as infos do pokemon no estado
          setPokemon( response.data );
        })
        .catch(err => {
          console.log(err);
        });

    }
    
    useEffect(() => {

        getPokemonData()
        if (pokemon !== pokemon) {
            getPokemonData(pokemon);
          }

    }, [])

    console.log(pokemon)

    return (
        <div>
    
        </div>
    )
}
