import SecondaryScreen from "../../components/molecules/SecondaryScreen";
import { Container, Content, Border } from "./styles";
import ButtonsRightSide from "../../components/molecules/ButtonsRightSide";

const RightSide = () => (
  <>
    <Container>
      <Content>
        <Border>
          <SecondaryScreen />
          <ButtonsRightSide />
        </Border>
      </Content>
    </Container>
  </>
);

export default RightSide;
