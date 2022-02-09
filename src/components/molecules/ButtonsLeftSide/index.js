import React, { useState } from "react";

import Circle from "../../atoms/Circle";
import SmallRectangle from "../../atoms/SmallRectangle";
import Input from "../../molecules/Input";
import Directional from "../../molecules/Directional";

import { Container, Rectangles, SmallRectangles } from "./styles";
import { usePokemons } from "../../../hooks/usePokemons";

const ButtonsLeftSide = () => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const { getPokemon } = usePokemons();

  const handleGetPokemon = (event) => {
    event.preventDefault();
    const searchPokemonToLowerCase = searchPokemon.toLowerCase().trim();

    if (searchPokemonToLowerCase.length > 0)
      getPokemon(searchPokemonToLowerCase);
  };

  return (
    <Container>
      <Circle size="medium" color="darkBlue" />
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
            onInput={(event) => {
              setSearchPokemon(event.target.value);
            }}
          />
        </form>
      </Rectangles>
      <Directional />
    </Container>
  );
};

export default ButtonsLeftSide;
