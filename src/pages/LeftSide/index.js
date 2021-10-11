import React from "react";

import { Container, Content } from "./styles";

import HeaderLeftSide from "../../components/molecules/HeaderLeftSide";
import Divider from "../../components/atoms/Divider";
import PrimaryScreen from "../../components/molecules/PrimaryScreen";
import ButtonsLeftSide from "../../components/molecules/ButtonsLeftSide";

const LeftSide = () => (
  <>
    <Container>
      <Content>
        <HeaderLeftSide />
        <Divider />

        <div className="left-side-body">
          <PrimaryScreen />
          <ButtonsLeftSide />
        </div>
      </Content>
    </Container>
  </>
);

export default LeftSide;
