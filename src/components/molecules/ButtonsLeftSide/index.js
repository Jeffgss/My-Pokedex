import React, { useContext, useState } from "react";

import Circle from "../../atoms/Circle";
import SmallRectangle from "../../atoms/SmallRectangle";
import Input from "../../molecules/Input";
import Directional from "../../molecules/Directional";
import { PokemonContext } from "../../../PokeContext";

import { Container, Rectangles, SmallRectangles } from "./styles";

const ButtonsLeftSide = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const { getPokemon } = useContext(PokemonContext);

  const handleGetPokemon = (event) => {
    event.preventDefault();

    getPokemon(searchPokemon);
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
            onInput={(event) => setSearchPokemon(event.target.value)}
          />
        </form>
      </Rectangles>
      <Directional />
    </Container>
  );
};

export default ButtonsLeftSide;
