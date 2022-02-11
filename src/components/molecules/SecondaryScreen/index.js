import ScreenEdge from "../../atoms/ScreenEdge";
import Display from "../../atoms/Display";
import { usePokemons } from "../../../hooks/usePokemons";

import { Container } from "./styles";

const SecondaryScreen = () => {
  const pokemon = usePokemons();
  const pokemonTypes = pokemon.catchSearchedPokemon.types;
  const pokemonHp = pokemon.catchSearchedPokemon.hp;
  const pokemonAttack = pokemon.catchSearchedPokemon.attack;
  const pokemonDefense = pokemon.catchSearchedPokemon.defense;
  const showMoreDetails = pokemon.showMoreDetails;

  return (
    <Container>
      <ScreenEdge type="secondary">
        <Display>
          {pokemonTypes && showMoreDetails && (
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
