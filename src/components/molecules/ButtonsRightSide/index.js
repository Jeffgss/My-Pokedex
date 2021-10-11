import React from "react";

import { Container } from "./styles";

import SmallRectangle from "../../atoms/SmallRectangle";
import Square from "../../atoms/Square";
import Circle from "../../atoms/Circle";
import Rectangle from "../../atoms/Rectangle";

const ButtonsRightSide = () => (
  <Container>
    <div className="small-rectangles">
      <SmallRectangle color="yellow" />
      <SmallRectangle color="darkBlue" />
    </div>

    <div className="squares-and-circle">
      <div className="squares">
        <Square />
        <Square />
      </div>
      <Circle size="medium" color="yellow" />
    </div>

    <div className="rectangles">
      <Rectangle />
      <Rectangle />
    </div>
  </Container>
);

export default ButtonsRightSide;
