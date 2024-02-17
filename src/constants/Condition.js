const CONDITION = Object.freeze({
  RACE: {
    STOP: 0,
    FORWARD: 1,
    FORWARD_CONDITION: 4,
  },
  VALIDATE: {
    MIN_CARNAME: 1,
    MAX_CARNAME: 5,
    CAR_NAME_RULE: /^[가-힣a-zA-Z\s]*$/,
    EMPTY: '',
    MIN_ROUND_COUNT: 1,
    MAX_ROUND_COUNT: 10,
  },
});

export default CONDITION;
