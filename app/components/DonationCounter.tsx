import React, { FC } from "react";
import { Donation } from "./UI";
import { clamp } from "../utils";

interface DonationCounterProps {
  current: number;
  goal: number;
}

const DonationCounter: FC<DonationCounterProps> = ({ current, goal }) => {
  return (
    <Donation.Container>
      <Donation.Title>
        Donated: {current} of {goal} ₽
      </Donation.Title>
      <Donation.Bar>
        <Donation.Progress scale={clamp(current / goal, 0, 1)} />
      </Donation.Bar>
    </Donation.Container>
  );
};

export default DonationCounter;
