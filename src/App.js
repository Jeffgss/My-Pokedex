import React from "react";

import { PokemonProvider } from "./PokeContext";

import LeftSide from "./pages/LeftSide";
import RightSide from "./pages/RightSide";

import "./App.css";
import GlobalStyle from "./styles/global";

const App = () => (
  <div className="App">
    <PokemonProvider>
      <LeftSide />
      <RightSide />
      <GlobalStyle />
    </PokemonProvider>
  </div>
);

export default App;
