import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid var(--borderColor);
  border-radius: 50%;

  box-shadow: inset 2px 2px rgb(255 255 255 / 70%),
    inset -4px 0 rgb(0 0 0 / 20%);

  ${(props) =>
    props.size === "super-small" &&
    css`
      width: 12px;
      height: 12px;
      border-radius: 50%;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      width: 20px;
      height: 20px;
      border-radius: 50%;
    `}

    ${(props) =>
    props.size === "medium" &&
    css`
      width: 45px;
      height: 45px;
      border-radius: 50%;
    `}

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
    props.color === "green" &&
    css`
      background: var(--green);
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
