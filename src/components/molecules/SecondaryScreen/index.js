import React from "react";

import { Container } from "./styles";

import ScreenEdge from "../../atoms/ScreenEdge";
import Display from "../../atoms/Display";

const PrimaryScreen = ({ children }) => (
  <Container>
    <ScreenEdge type="secondary">
      <Display>{children}</Display>
    </ScreenEdge>
  </Container>
);

export default PrimaryScreen;
