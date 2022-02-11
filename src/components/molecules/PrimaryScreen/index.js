import ScreenEdge from "../../atoms/ScreenEdge";
import Display from "../../atoms/Display";
import Circle from "../../atoms/Circle";
import { usePokemons } from "../../../hooks/usePokemons";

import { Container, Circles } from "./styles";

const PrimaryScreen = () => {
  const defaultImage =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs";
  const pokemon = usePokemons();
  const pokemonImg = pokemon.catchSearchedPokemon.image;
  const pokemonName = pokemon.catchSearchedPokemon.name;
  const showMoreDetails = pokemon.setShowMoreDetails;

  return (
    <Container havePokemonToClick={pokemonImg}>
      <ScreenEdge>
        <Circles>
          <Circle size="super-small" color="red" />
          <Circle size="super-small" color="red" />
        </Circles>
        <Display hasPokemonImage={pokemonImg}>
          <img
            src={pokemonImg ? pokemonImg : defaultImage}
            alt={pokemonName ? pokemonName : "PokeBall"}
            onClick={() => showMoreDetails(true)}
          />
          {pokemonName && <span>{pokemonName}</span>}
        </Display>
        <span>•••••</span>
      </ScreenEdge>
    </Container>
  );
};

export default PrimaryScreen;
