import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  .rectangles {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 15px;
  }

  .small-rectangles {
    display: flex;
    justify-content: space-evenly;
  }
`;
