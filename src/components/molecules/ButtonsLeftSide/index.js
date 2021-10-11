import React, { useState } from "react";

import { Container } from "./styles";

import Circle from "../../atoms/Circle";
import SmallRectangle from "../../atoms/SmallRectangle";
import Input from "../../molecules/Input";
import Directional from "../../molecules/Directional";

const ButtonsLeftSide = () => {
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [pokemons, setPokemons] = useState(null);

  const handleAddPokemon = async (event, inputValue) => {
    event.preventDefault();

    inputValue = searchedPokemon.trim();

    try {
      if (inputValue.length === 0) return;
      const api = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;

      const response = await fetch(api);

      const pokemon = await response.json();

      const pokemonProps = {
        name: pokemon.name,
        id: pokemon.id,
        sprite: pokemon.sprites?.front_default,
      };

      setPokemons(pokemonProps);
      setSearchedPokemon(
        pokemonProps.name[0].toUpperCase() + pokemonProps.name.substr(1)
      );
    } catch {
      setSearchedPokemon("Not found");
    }
  };

  return (
    <Container>
      <Circle size="medium" color="darkBlue" />
      <div className="rectangles">
        <div className="small-rectangles">
          <SmallRectangle color="red" />
          <SmallRectangle color="blue" />
        </div>
        <form onSubmit={handleAddPokemon}>
          <Input
            value={searchedPokemon}
            onChange={(search) => {
              setSearchedPokemon(search);
              if (search.length === 0) {
                setPokemons(null);
              }
            }}
            name="pokemon"
            className="mini-display"
            placeholder="Pokémon"
          />
        </form>
      </div>
      <Directional />
    </Container>
  );
};

export default ButtonsLeftSide;
