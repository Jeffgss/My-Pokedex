import React from "react";

import "./App.css";
import GlobalStyle from "./styles/global";

import PrincipalPage from "./pages/principal/index";
import SecondaryPage from "./pages/secondary";

const App = () => (
  <div className="App">
    <PrincipalPage />
    <SecondaryPage />
    <GlobalStyle />
  </div>
);
export default App;
