import React from "react";

import { Container } from "./styles";

const Display = ({ children, hasPokemonImage, isOn, ...props }) => {
  return (
    <Container {...props} hasPokemonImage={hasPokemonImage} isOn={isOn}>
      {children}
    </Container>
  );
};

export default Display;
