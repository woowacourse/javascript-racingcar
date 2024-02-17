export const SYMBOLS = {
  nameSeperator: ',',
  move: '-',
  whiteSpace: '',
  winnerSeperator: ', ',
};

export const REGEX = {
  carName: /^[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5}(?:,[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5})*$/,
};

export const RULES = {
  startPosition: 0,
  minRandomRange: 0,
  minAttemptNum: 1,
  maxRandomRange: 9,
  moveThreshold: 4,
};
