import React, { useEffect, useMemo } from "react";
import { Container, GlobalStyle, RunnerInfo } from "./UI";
import useSocketData from "../hooks/useSocketData";
import Timer from './Timer'
import DonationCounter from "./DonationCounter";

const Main = () => {
  const [data, isOpen] = useSocketData(`ws://localhost:8787`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <React.Fragment>
      <GlobalStyle />

      <Container>
        <Timer seconds={data.seconds}/>
        <DonationCounter current={data.donates} goal={data.donationGoal} />

        {data.runners.map(runner => (
          <RunnerInfo><b>{runner.name}:</b> {runner.currentDistance.toFixed(2)}km</RunnerInfo>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Main;
