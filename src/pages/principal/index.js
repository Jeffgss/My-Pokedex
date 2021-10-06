import React from "react";

import { Container, Content, Header, MainContent } from "./styles";

import Input from "../../components/molecules/Input";

const PrincipalPage = () => (
  <>
    <Container>
      <Content>
        <Header>
          <section>
            <span className="circle-outside"></span>
            <span className="circle-inside"></span>

            <span className="small-circle"></span>
            <span className="small-circle"></span>
            <span className="small-circle"></span>
          </section>
        </Header>
        <section className="header-lines">
          <div className="header-line1"></div>
          <div className="header-degree"></div>
          <div className="header-line2"></div>
        </section>

        <MainContent>
          <section className="main-lines">
            <div className="main-line1"></div>
            <div className="main-degree"></div>
            <div className="main-line2"></div>
          </section>

          <section className="screen-and-buttons">
            <div className="screen-border">
              <div className="border-circles">
                <span className="circle"></span>
                <span className="circle"></span>
              </div>
              <div className="screen">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                  alt=""
                />
              </div>
              <div className="points">•••••</div>
            </div>
            <div className="screen-buttons">
              <span className="circle"></span>
              <div className="center-buttons">
                <div className="mini-buttons">
                  <span className="button1"></span>
                  <span className="button2"></span>
                </div>

                <Input
                  name="pokemon"
                  className="mini-display"
                  placeholder="Pokémon"
                ></Input>
              </div>

              <div className="direction">
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </div>
            </div>
          </section>

          <section className="column">
            <div className="line1"></div>
            <div className="line2"></div>
          </section>
        </MainContent>
      </Content>
    </Container>
  </>
);
export default PrincipalPage;
