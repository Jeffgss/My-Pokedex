import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  width: 220px;
  height: 125px;
  margin: 0 auto;

  border-radius: 8px;

  border: 3px solid #492436;
  box-shadow: inset 3px 3px rgb(0 0 0 / 30%);

  img {
    margin-top: ${(props) => props.hasPokemonImage && "-15px"};
    width: ${(props) => (props.hasPokemonImage ? "100px" : "130px")};
  }

  span {
    color: var(--borderColor);
    font-size: 18px;
  }

  ${(props) =>
    props.type === "secondary" &&
    css`
      width: 220px;
      height: 120px;
    `}
`;
