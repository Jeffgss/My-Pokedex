import styled from "styled-components";

export const Container = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .small-rectangles {
    display: flex;
    justify-content: flex-end;

    > div {
      margin: 0 5px;
    }
  }

  .squares-and-circle {
    display: flex;
    justify-content: space-between;
  }

  .squares {
    display: flex;
    flex: 1;
    margin: 10px 5px;
  }

  .rectangles {
    display: flex;
    justify-content: space-between;
  }
`;
