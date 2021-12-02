import React, { FC, useMemo } from "react";
import { TimerWrapper } from './UI'
import { prependZero } from '../utils'

const Timer: FC<{ seconds: number }> = ({ seconds }) => {
  const hours = useMemo(() => Math.round(seconds / 3600), [seconds]);
  const minutes = useMemo(() => Math.round((seconds / 60) % 60), [seconds]);
  const secs = useMemo(() => Math.round(seconds % 60), [seconds]);

  return (
    <TimerWrapper>
      Time: {prependZero(hours)}:{prependZero(minutes)}:{prependZero(secs)}
    </TimerWrapper>
  );
};

export default Timer
