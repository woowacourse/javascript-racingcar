const MOVE_UNIT = 1;
const SPLITTER = ',';
const POSITION_SYMBOL = '-';

const MIN = Object.freeze({
  CAR_COUNT: 2,
  RACE_COUNT: 1,
  NAME_LENGTH: 1,
  MOVE_CONDITION: 4,
});

const MAX = Object.freeze({
  CAR_COUNT: 60,
  NAME_LENGTH: 5,
  RANDOM_NUMBER: 9,
});

export { MOVE_UNIT, SPLITTER, MIN, MAX, POSITION_SYMBOL };
