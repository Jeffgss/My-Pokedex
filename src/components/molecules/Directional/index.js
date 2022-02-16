import React from "react";
import { usePokemons } from "../../../hooks/usePokemons";

import { Container } from "./styles";

const Directional = () => {
  const { getPokemon } = usePokemons();
  const pokemon = usePokemons();
  const pokemonId = pokemon.catchSearchedPokemon.id;

  const handleNextPokemon = () => {
    const next = pokemonId + 1;
    getPokemon(next ? next : 1);
  };

  const handlePreviusPokemon = () => {
    const previus = pokemonId - 1;
    if (previus > 0) getPokemon(previus);
  };

  return (
    <Container>
      <button className="top" onClick={handleNextPokemon}></button>
      <button className="right" onClick={handleNextPokemon}></button>
      <button className="bottom" onClick={handlePreviusPokemon}></button>
      <button className="left" onClick={handlePreviusPokemon}></button>
    </Container>
  );
};

export default Directional;
