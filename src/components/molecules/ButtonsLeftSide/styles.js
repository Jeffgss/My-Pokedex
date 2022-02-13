import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  > div:nth-child(1) {
    cursor: pointer;

    span {
      position: relative;
      top: 20%;
      left: 5%;
      font-size: 14px;
      color: var(--sand);
    }

    &:active {
      box-shadow: 0 5px rgb(0 0 0 / 20%);
      transform: translateY(4px);
    }
  }
`;

export const Rectangles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 15px;
`;

export const SmallRectangles = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
