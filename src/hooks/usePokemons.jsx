import { createContext, useContext, useState } from "react";

const PokemonsContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [catchSearchedPokemon, setCatchSearchedPokemon] = useState({});

  const getPokemon = (searchedPokemon) => {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`).then(
        (response) => {
          if (response.status === 200) {
            response.json().then((data) => {
              const objectPokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                types: data.types.map((types) => types.type.name),
                abilities: data.abilities.map(
                  (abilities) => abilities.ability.name
                ),
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
              };

              setCatchSearchedPokemon(objectPokemon);
            });
          } else {
            alert("Failed to fetch. Try again!");
            setCatchSearchedPokemon("");
          }
        }
      );
    } catch {
      //
    }
  };

  return (
    <PokemonsContext.Provider value={{ catchSearchedPokemon, getPokemon }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => {
  const context = useContext(PokemonsContext);

  return context;
};
