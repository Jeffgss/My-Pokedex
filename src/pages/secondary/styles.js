import styled from "styled-components";

export const Container = styled.div`
  height: 405px;
  width: 340px;
  padding: 10px;

  background: radial-gradient(#c53638, #98121b);
`;

export const Content = styled.div`
  height: 100%;
  padding: 20px 10px;
  background: radial-gradient(#98121b, #c53638);

  .border {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 3px solid #492436;
    box-shadow: inset 3px 0 rgb(252 245 216 / 60%),
      inset 0 -3px rgb(0 0 0 / 20%);

    .screen {
      .border-screen {
        width: 256px;
        height: 161px;
        background: #f8f8f8;
        border-radius: 12px;
        background: #e7e0c3;
        border: 3px solid #492436;
        display: flex;
        align-items: center;
        justify-content: center;

        .display-screen {
          width: 220px;
          height: 120px;
          background: #f8f8f8;
          border-radius: 8px;
          border: 3px solid #492436;
          box-shadow: inset 3px 3px rgb(0 0 0 / 30%);
        }
      }
    }

    .small-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 30px;
      width: 100%;

      .button1 {
        width: 40px;
        height: 10px;
        border-radius: 10px;
        background: #f9c16a;
        border: 2px solid #492436;
        box-shadow: inset 1px 2px rgb(255 255 255 / 60%);
        margin: 10px 5px;
      }

      .button2 {
        width: 40px;
        height: 10px;
        border-radius: 10px;
        background: #3e3c51;
        border: 2px solid #492436;
        box-shadow: inset 1px 2px rgb(255 255 255 / 60%);
        margin: 10px 5px;
      }
    }

    .more-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 10px 30px;
      width: 100%;

      margin-bottom: 10px;

      .squares {
        display: flex;

        .square1 {
          width: 41px;
          height: 41px;
          background: #5493b2;
          border-radius: 12px;
          border: 2px solid #492436;
          margin-right: 10px;

          box-shadow: inset 3px 3px rgb(255 255 255 / 40%),
            inset -3px -1px rgb(0 0 0 / 30%);
        }

        .square2 {
          width: 41px;
          height: 41px;
          background: #5493b2;
          border-radius: 12px;
          border: 2px solid #492436;

          box-shadow: inset 3px 3px rgb(255 255 255 / 40%),
            inset -3px -1px rgb(0 0 0 / 30%);
        }
      }

      .circle {
        width: 41px;
        height: 41px;
        background: #f9c16a;
        border-radius: 50%;
        border: 2px solid #492436;

        box-shadow: inset 5px 5px rgb(255 255 255 / 70%),
          inset -5px 0 rgb(0 0 0 / 20%);
      }
    }

    .rectangles {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .rectangle1 {
        width: 90px;
        height: 40px;
        background: #3e3c51;
        border-radius: 5px;
        border: 2px solid #492436;
        box-shadow: inset 3px 3px rgb(255 255 255 / 40%);
      }

      .rectangle2 {
        width: 90px;
        height: 40px;
        background: #3e3c51;
        border-radius: 5px;
        border: 2px solid #492436;
        box-shadow: inset 3px 3px rgb(255 255 255 / 40%);
      }
    }
  }
`;
