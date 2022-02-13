import React, { useState } from "react";

import Circle from "../../atoms/Circle";
import SmallRectangle from "../../atoms/SmallRectangle";
import Input from "../../molecules/Input";
import Directional from "../../molecules/Directional";

import { Container, Rectangles, SmallRectangles } from "./styles";
import { usePokemons } from "../../../hooks/usePokemons";

const ButtonsLeftSide = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const pokemon = usePokemons();
  const pokemonReset = pokemon.setCatchSearchedPokemon;

  const { getPokemon } = usePokemons();

  const handleGetPokemon = (event) => {
    event.preventDefault();
    const searchPokemonToLowerCase = searchPokemon.toLowerCase().trim();

    if (searchPokemonToLowerCase.length > 0)
      getPokemon(searchPokemonToLowerCase);
  };

  const handleResetSearch = () => {
    pokemonReset("");
    setSearchPokemon("");
  };

  return (
    <Container>
      <Circle size="medium" color="darkBlue" onClick={handleResetSearch}>
        <span>Reset</span>
      </Circle>
      <Rectangles>
        <SmallRectangles>
          <SmallRectangle color="red" />
          <SmallRectangle color="blue" />
        </SmallRectangles>
        <form onSubmit={handleGetPokemon}>
          <Input
            name="pokemon"
            className="mini-display"
            placeholder="Pokémon"
            onChange={(event) => setSearchPokemon(event.target.value)}
            value={searchPokemon}
          />
        </form>
      </Rectangles>
      <Directional />
    </Container>
  );
};

export default ButtonsLeftSide;
