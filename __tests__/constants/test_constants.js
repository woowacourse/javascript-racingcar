export const TEST_RULES = {
  attemptNum: 3,
  movingForward: 5,
  stop: 1,
};

export const RANDOMCASES = {
  firstWinOfTwoCarRandomCase: [
    TEST_RULES.stop,
    TEST_RULES.stop,
    TEST_RULES.movingForward,
    TEST_RULES.movingForward,
    TEST_RULES.movingForward,
    TEST_RULES.stop,
  ],
  drawOfTwoCarRandomCase: [
    TEST_RULES.stop,
    TEST_RULES.movingForward,
    TEST_RULES.movingForward,
    TEST_RULES.movingForward,
    TEST_RULES.movingForward,
    TEST_RULES.stop,
  ],
  moveTwoTimeOfOneCarRandomCase: [TEST_RULES.movingForward, TEST_RULES.movingForward, TEST_RULES.stop, TEST_RULES.stop],
};
