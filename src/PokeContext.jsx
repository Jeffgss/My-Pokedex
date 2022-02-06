import { createContext, useState } from "react";

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [catchSearchedPokemon, setCatchSearchedPokemon] = useState({});

  const getPokemon = (searchedPokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
      .then((response) => response.json())
      .then((data) => {
        const objectPokemon = {
          id: data.id,
          name: data.name,
          image: data?.sprites.front_default,
        };

        setCatchSearchedPokemon(objectPokemon);
      });
  };

  console.log(catchSearchedPokemon);
  return (
    <PokemonContext.Provider value={{ catchSearchedPokemon, getPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
