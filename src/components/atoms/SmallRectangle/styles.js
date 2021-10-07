import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid var(--borderColor);
  box-shadow: inset 1px 2px rgb(255 255 255 / 60%);

  ${(props) =>
    props.color === "red" &&
    css`
      background: var(--redLand);
    `}

  ${(props) =>
    props.color === "yellow" &&
    css`
      background: var(--yellow);
    `}

  ${(props) =>
    props.color === "blue" &&
    css`
      background: var(--blue);
    `}

    ${(props) =>
    props.color === "darkBlue" &&
    css`
      background: var(--darkBlue);
    `}
`;
