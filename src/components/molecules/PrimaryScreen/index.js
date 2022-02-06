import ScreenEdge from "../../atoms/ScreenEdge";
import Display from "../../atoms/Display";
import Circle from "../../atoms/Circle";

import { Container, Circles } from "./styles";

const PrimaryScreen = () => (
  <Container>
    <ScreenEdge>
      <Circles>
        <Circle size="super-small" color="red" />
        <Circle size="super-small" color="red" />
      </Circles>
      <Display />
      <span>•••••</span>
    </ScreenEdge>
  </Container>
);

export default PrimaryScreen;
