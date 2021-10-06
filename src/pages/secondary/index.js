import React from "react";

import { Container, Content } from "./styles";

const SecondaryPage = () => (
  <>
    <Container>
      <Content>
        <div className="border">
          <section className="screen">
            <div className="border-screen">
              <div className="display-screen"></div>
            </div>
          </section>

          <section className="small-buttons">
            <span className="button1"></span>
            <span className="button2"></span>
          </section>

          <section className="more-buttons">
            <div className="squares">
              <span className="square1"></span>
              <span className="square2"></span>
            </div>
            <span className="circle"></span>
          </section>

          <section className="rectangles">
            <span className="rectangle1"></span>
            <span className="rectangle2"></span>
          </section>
        </div>
      </Content>
    </Container>
  </>
);

export default SecondaryPage;
