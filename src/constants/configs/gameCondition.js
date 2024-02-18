import deepFreeze from '../../utils/deepFeeze.js';

const GAME_CONDITION = deepFreeze({
  MIN_CAR_NAME_LENGTH: 5,
  MIN_COUNT_OF_ATTEMPT: 0,
  MAX_COUNT_OF_ATTEMPT: 20,
  MOVE_FORWARD: 4,
  INITIALIZED_SCORE: 0,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
});

export default GAME_CONDITION;
