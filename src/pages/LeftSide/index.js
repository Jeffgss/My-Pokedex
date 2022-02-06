import HeaderLeftSide from "../../components/molecules/HeaderLeftSide";
import Divider from "../../components/atoms/Divider";
import PrimaryScreen from "../../components/molecules/PrimaryScreen";
import ButtonsLeftSide from "../../components/molecules/ButtonsLeftSide";

import { Container, Content, LeftSideBody } from "./styles";
import Hingle from "../../components/atoms/Hingle";

const LeftSide = () => (
  <>
    <Container>
      <Content>
        <HeaderLeftSide />
        <Divider />
        <LeftSideBody>
          <PrimaryScreen />
          <ButtonsLeftSide />
        </LeftSideBody>
      </Content>
      <Hingle className="hingle" />
    </Container>
  </>
);

export default LeftSide;
