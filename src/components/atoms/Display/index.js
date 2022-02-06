import React from "react";

import { Container } from "./styles";

const Display = ({ children, hasPokemonImage, ...props }) => {
  return (
    <Container {...props} hasPokemonImage={hasPokemonImage}>
      {children}
    </Container>
  );
};

export default Display;
