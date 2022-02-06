import React, { useContext } from "react";

import { Container } from "./styles";

import ScreenEdge from "../../atoms/ScreenEdge";
import Display from "../../atoms/Display";
import { PokemonContext } from "../../../PokeContext";

const SecondaryScreen = () => {
  const pokemon = useContext(PokemonContext);
  const pokemonTypes = pokemon.catchSearchedPokemon.types;
  const pokemonHp = pokemon.catchSearchedPokemon.hp;
  const pokemonAttack = pokemon.catchSearchedPokemon.attack;
  const pokemonDefense = pokemon.catchSearchedPokemon.defense;

  console.log(!!pokemon);

  return (
    <Container>
      <ScreenEdge type="secondary">
        <Display>
          {pokemonTypes && (
            <>
              <span>
                Hp: <strong>{pokemonHp}</strong>
              </span>
              <span>
                Attack: <strong>{pokemonAttack}</strong>
              </span>
              <span>
                Defense: <strong>{pokemonDefense}</strong>
              </span>
              <span>
                Type: <strong>{pokemonTypes}</strong>
              </span>
            </>
          )}
        </Display>
      </ScreenEdge>
    </Container>
  );
};

export default SecondaryScreen;
