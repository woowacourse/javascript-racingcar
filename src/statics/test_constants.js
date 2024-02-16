import { RULES } from './constants';

export const RANDOMCASES = {
  firstWinOfTwoCarRandomCase: [
    RULES.stop,
    RULES.stop,
    RULES.movingForward,
    RULES.movingForward,
    RULES.movingForward,
    RULES.stop,
  ],
  drawOfTwoCarRandomCase: [
    RULES.stop,
    RULES.movingForward,
    RULES.movingForward,
    RULES.movingForward,
    RULES.movingForward,
    RULES.stop,
  ],
  moveTwoTimeOfOneCarRandomCase: [RULES.movingForward, RULES.movingForward, RULES.stop, RULES.stop],
};

export const TEST_RULES = {
  attemptNum: 3,
}