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
    align-items: center;
  }

  .squares {
    display: flex;
    flex: 1;
    margin: 10px 0px;

    > div {
      margin-right: 10px;
    }
  }

  .rectangles {
    display: flex;
    justify-content: space-between;
  }
`;
