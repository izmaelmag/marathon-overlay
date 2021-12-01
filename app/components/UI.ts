import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 60%;
  height: 200px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 200px 200px 0 0;
  box-shadow: 0 0 10px 20px rgba(0,0,0,0.2);
`

export const Label = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0 10px 32px rgba(0,0,0,0.15);
  background: #ffbc00;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #000;
  padding: 32px 128px;
  border-radius: 100px;
  text-transform: uppercase;
  font-family: system-ui, sans-serif;
`
