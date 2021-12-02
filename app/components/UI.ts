import styled, { createGlobalStyle } from "styled-components";

const TIMER_WIDTH = 280;

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: #222;
  border-top: 6px solid #ffbc00;
  box-shadow: 0 6px 0 0 #fff inset;
  padding-left: ${TIMER_WIDTH + 32}px;
`;

export const TimerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: -12px;
  border: 6px solid #fff;
  border-left: none;
  background: #ffbc00;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #000;
  padding: 16px;
  width: ${TIMER_WIDTH}px;
  border-radius: 0 0 50px 0;
  text-transform: uppercase;
  font-family: system-ui, sans-serif;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
`;

export const RunnerInfo = styled.span`
  color: #fff;
  font-size: 18px;
  font-family: system-ui, sans-serif;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const Donation = {
  Container: styled.div`
    position: absolute;
    left: 0;
    bottom: 100%;
    color: #222;
    padding: 16px;
    margin-bottom: 8px;
  `,

  Title: styled.div`
    font-size: 18px;
    font-weight: bold;
    font-family: system-ui, sans-serif;
  `,

  Bar: styled.div`
    position: relative;
    width: ${TIMER_WIDTH - 22}px;
    height: 10px;
    background: #fff;
    margin-top: 8px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -2px;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background: #ff4e4e;
    }
  `,

  Progress: styled.div<{ scale: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => 100 * props.scale}%;
    height: 100%;
    background: #0bcb0b;
    transform-origin: 0 0;
    border-radius: 10px;
    box-shadow: 0 0 0 3px #fff;
    transition: width 0.4s ease;
  `,
};
