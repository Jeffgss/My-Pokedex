import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
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
    width: 120px;
  }

  ${(props) =>
    props.type === "secondary" &&
    css`
      width: 220px;
      height: 120px;
    `}
`;
