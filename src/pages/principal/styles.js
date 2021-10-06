import styled from "styled-components";

export const Container = styled.div`
  height: 490px;
  width: 425px;
  padding: 10px;

  background: radial-gradient(#c53638, #98121b);
`;

export const Content = styled.div`
  height: 100%;
  background: #c53638;
  display: flex;
  flex-direction: column;

  .header-lines {
    margin: 10px 0 13.5px;
    position: relative;

    .header-line1 {
      width: 43.9%;
      height: 3px;
      background: #492436;
      position: absolute;
    }

    .header-degree {
      width: 45.5px;
      height: 3px;
      background: #492436;
      position: absolute;
      left: 43%;
      top: -13px;
      transform: rotate(146deg);
    }

    .header-line2 {
      width: 46.9%;
      height: 3px;
      background: #492436;
      position: absolute;
      right: 0;
      top: -26px;
    }
  }
`;

export const Header = styled.div`
  border-top: 3px solid #fcf5d8;
  border-left: 3px solid #fcf5d8;

  margin: 36px 28px 0 36px;
  width: 338px;
  height: 79px;

  section {
    width: 100%;
    padding: 13.5px 0 0 22px;

    display: flex;

    .circle-outside {
      width: 65px;
      height: 65px;
      background: #fcf5d8;

      border-radius: 50%;
      border: 2px solid #492436;
    }

    .circle-inside {
      width: 53px;
      height: 53px;
      border-radius: 50%;

      background: #5493b2;
      position: absolute;
      margin: 6px;

      box-shadow: inset 5px 5px rgb(255 255 255 / 70%),
        inset -5px 0 rgb(0 0 0 / 20%);

      border: 2px solid #492436;
    }

    .small-circle {
      width: 20px;
      height: 20px;
      border: 2px solid #492436;
      border-radius: 50%;
      margin: 0 10px;

      box-shadow: inset 2px 2px rgb(255 255 255 / 70%),
        inset -4px 0 rgb(0 0 0 / 20%);
    }

    .small-circle:nth-child(3) {
      background: #94372f;
    }

    .small-circle:nth-child(4) {
      background: #f9c16a;
    }

    .small-circle:nth-child(5) {
      background: #95b377;
    }
  }
`;

export const MainContent = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 0 20px 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  .main-lines {
    .main-line1 {
      width: 35%;
      height: 3px;
      background: #492436;
      position: absolute;

      top: 0;
    }

    .main-degree {
      width: 45.5px;
      height: 3px;
      background: #492436;
      position: absolute;
      left: 43%;
      top: -13px;
      transform: rotate(146deg);
    }

    .main-line2 {
      width: 33.9%;
      height: 3px;
      background: #492436;
      position: absolute;
      left: 52.8%;
      top: -26px;
    }
  }

  .screen-and-buttons {
    border-bottom: 3px solid #492436;
    border-left: 3px solid #492436;
    width: 100%;
    height: 100%;
    margin-right: 14.5%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    box-shadow: inset 3px 0 rgb(252 245 216 / 60%),
      inset 0 -3px rgb(0 0 0 / 20%);

    .screen-border {
      width: 85%;
      height: 60%;

      border-radius: 8px 8px 8px 40px;
      background: #e7e0c3;
      border: 3px solid #492436;

      box-shadow: inset -5px -5px rgb(0 0 0 / 20%);

      .border-circles {
        display: flex;
        justify-content: center;
        align-items: center;

        .circle {
          width: 12px;
          height: 12px;
          border: 2px solid #492436;

          border-radius: 50%;
          background: #94372f;
          margin: 7px 15px;

          box-shadow: inset 1px 1px rgb(252 245 216 / 70%);
        }
      }

      .screen {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8f8f8;
        width: 85%;
        height: 70%;
        margin: 0 auto;

        border-radius: 8px;

        border: 3px solid #492436;
        box-shadow: inset 3px 3px rgb(0 0 0 / 30%);

        img {
          /* background-size: cover; */
          width: 120px;
          height: 120px;
        }
      }

      .points {
        text-align: end;
        color: #492436;
        font-size: 18px;
        width: 100%;
        height: 20px;
        padding: 0 30px;
      }
    }

    .screen-buttons {
      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 18px;

      .circle {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #3e3c51;
        border: 2px solid #492436;
        box-shadow: inset 3px 3px rgb(255 255 255 / 40%),
          inset -3px -1px rgb(0 0 0 / 30%);
      }

      .center-buttons {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;

        .mini-buttons {
          display: flex;

          .button1 {
            width: 40px;
            height: 10px;
            border-radius: 10px;
            background: #94372f;
            border: 2px solid #492436;
            box-shadow: inset 1px 2px rgb(255 255 255 / 60%);
            margin: 0 5px;
          }

          .button2 {
            width: 40px;
            height: 10px;
            border-radius: 10px;
            background: #5493b2;
            border: 2px solid #492436;
            box-shadow: inset 1px 2px rgb(255 255 255 / 60%);
            margin: 0 5px;
          }
        }

        .mini-display {
          width: 110px;
          height: 30px;
          background: #95b377;
          border-radius: 5px;
          border: 2px solid #492436;
          box-shadow: inset 3px 3px rgb(255 255 255 / 60%);
        }
      }

      .direction {
        width: 110px;
        height: 100%;

        position: relative;
        display: flex;
        float: left;

        &:after {
          content: "";
          width: 25px;
          height: 25px;
          background-color: #3e3c51;
          position: relative;
          top: 50%;
          left: 50%;
          margin: -14px;
        }

        span {
          background: #3e3c51;
          border: 2px solid #492436;
          width: 26px;
          height: 26px;
          position: absolute;
        }

        .top {
          border-bottom: none !important;
          box-shadow: inset 0 4px rgb(125 189 188 / 60%);
          left: 50%;
          margin-left: -15px;
          top: 7.5px;
          border-radius: 5px 5px 0 0;
        }

        .right {
          border-left: none !important;
          box-shadow: inset 0 4px rgb(125 189 188 / 60%),
            inset 0 -4px rgba(0, 0, 0, 0.2);
          top: 50%;
          margin-top: -15px;
          right: 20.6px;
          border-radius: 0 5px 5px 0;
        }

        .bottom {
          border-top: none !important;
          box-shadow: inset 0 -4px rgba(0, 0, 0, 0.2);
          left: 50%;
          margin-left: -15px;
          bottom: 12px;
          border-radius: 0 0 5px 5px;
        }

        .left {
          border-right: none !important;
          box-shadow: inset 0 4px rgb(125 189 188 / 60%),
            inset 0 -4px rgba(0, 0, 0, 0.2);
          top: 50%;
          margin-top: -15px;
          left: 16.5px;
          border-radius: 5px 0 0 5px;
        }
      }
    }
  }

  .column {
    border: 3px solid #492436;
    width: 54px;
    height: 361px;
    position: absolute;
    right: 0;
    top: -40px;
    padding: 34px 0;

    box-shadow: inset 10px 5px rgb(252 245 216 / 70%),
      inset 5px 0 rgb(0 0 0 / 20%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .line1 {
      background: #885653;
      height: 10px;
      width: 100%;

      border-top: 2px solid #492436;
      border-bottom: 2px solid #492436;
    }

    .line2 {
      background: #885653;
      height: 10px;
      width: 100%;

      border-top: 2px solid #492436;
      border-bottom: 2px solid #492436;
    }
  }
`;
