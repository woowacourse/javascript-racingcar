import { DELAY_TIME } from './constants.js';

export const wait = () => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, DELAY_TIME.RACE));
};
