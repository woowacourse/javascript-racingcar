export const SYMBOLS = {
  nameSeperator: ',',
  move: '-',
  whiteSpace: '',
  winnerSeperator: ', ',
  newLine: '\n',
};

export const PREFIX = {
  error: '[ERROR]',
};

export const REGEX = {
  carName: /^[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5}(?:,[\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,5})*$/,
};

export const RULES = {
  startPosition: 0,
  minRandomRange: 0,
  maxRandomRange: 9,
  minAttemptNum: 1,
  minCarNameCnt: 2,
  moveThreshold: 4,
};
