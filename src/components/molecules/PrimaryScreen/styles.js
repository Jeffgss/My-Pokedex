import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;

    img {
      cursor: ${(props) => (props.havePokemonToClick ? "pointer" : "default")};
    }

    span {
      font-weight: 500;
    }

    span:nth-child(3) {
      color: var(--borderColor);
    }
  }
`;

export const Circles = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px 15px;
`;
