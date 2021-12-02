export const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

export const prependZero = (number: number) => `${number < 10 ? "0" : ""}${number}`;
