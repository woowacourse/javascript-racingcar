export const CAR = Object.freeze({
  NAME: {
    MIN: 1,
    MAX: 5,
    RULE: /^[가-힣a-zA-Z\s]*$/,
  },
  FORWARD_SYMBOL: 1,
  STOP_SYMBOL: 0,
  FORWARD_MIN: 4,
});

export const ROUND = Object.freeze({
  MIN: 1,
  MAX: 10,
});

export const RANDOM = Object.freeze({
  MIN: 0,
  MAX: 10,
});

export const SYMBOLS = Object.freeze({
  EMPTY: '',
  NEW_LINE: '\n',
});
