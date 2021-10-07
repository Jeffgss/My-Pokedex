import React from "react";

import { Container } from "./styles";

import Speaker from "../../atoms/Speaker";
import Circle from "../../atoms/Circle";

const HeaderLeftSide = () => (
  <Container>
    <Speaker />
    <div className="circles">
      <Circle size="small" color="red" />
      <Circle size="small" color="yellow" />
      <Circle size="small" color="green" />
    </div>
  </Container>
);

export default HeaderLeftSide;
