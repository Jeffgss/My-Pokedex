import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isOn ? "#f8f8f8" : "var(--darkBlue)")};
  width: 220px;
  height: 125px;
  margin: 0 auto;

  border-radius: 8px;

  border: 3px solid #492436;
  box-shadow: inset 3px 3px rgb(0 0 0 / 30%);

  animation: ${(props) => (props.isOn ? "turn-on 0.5s" : "turn-off 0.5s")};

  img {
    margin-top: ${(props) => props.hasPokemonImage && "-10px"};
    width: ${(props) => (props.hasPokemonImage ? "100px" : "130px")};
  }

  span {
    color: var(--borderColor);
    /* color: red; */
    font-size: 18px;
    text-transform: capitalize;
    animation: ${(props) => props.isOn && "expand 0.3s"};
  }

  ${(props) =>
    props.type === "secondary" &&
    css`
      width: 220px;
      height: 120px;
    `}

  @keyframes expand {
    0% {
      font-size: 0;
    }

    100% {
      font-size: 18px;
    }
  }

  @keyframes turn-on {
    0% {
      background: var(--darkBlue);
    }

    100% {
      background: #f8f8f8;
    }
  }

  @keyframes turn-off {
    0% {
      background: #f8f8f8;
    }

    100% {
      background: var(--darkBlue);
    }
  }
`;
