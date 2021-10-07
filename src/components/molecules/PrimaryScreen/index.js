import React from "react";

import { Container } from "./styles";

import ScreenEdge from "../../atoms/ScreenEdge";
import Display from "../../atoms/Display";
import Circle from "../../atoms/Circle";

const PrimaryScreen = ({ children }) => (
  <Container>
    <ScreenEdge>
      <div className="circles">
        <Circle size="super-small" color="red" />
        <Circle size="super-small" color="red" />
      </div>
      <Display>{children}</Display>
      <span>•••••</span>
    </ScreenEdge>
  </Container>
);

export default PrimaryScreen;
