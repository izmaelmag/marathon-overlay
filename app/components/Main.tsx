import React, { useEffect } from "react";
import { Container, Label, GlobalStyle } from "./UI";
import useSocketData from '../hooks/useSocketData'

const Main = () => {
  const [data, isOpen] = useSocketData(`ws://localhost:8787`)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <React.Fragment>
      <GlobalStyle />

      <Container>
        <Label>Header</Label>
      </Container>
    </React.Fragment>
  );
};

export default Main;
