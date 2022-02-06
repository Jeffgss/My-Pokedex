import React from "react";

import LeftSide from "./pages/LeftSide";
import { PokemonProvider } from "./PokeContext";

import "./App.css";
import GlobalStyle from "./styles/global";

const App = () => (
  <PokemonProvider>
    <LeftSide />
    <GlobalStyle />
  </PokemonProvider>
);

export default App;
