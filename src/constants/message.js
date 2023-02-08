const CAR = require('./car');

const INPUT_MESSAGE = Object.freeze({
  carName: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  movingCount: '시도할 회수는 몇회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  resultTitle: '\n실행 결과',
  resultSeparator: ' : ',
  distance: '-',
  winnerSeparator: ', ',
  winner: '가 최종 우승했습니다.',
});

const ERROR_MESSAGE = Object.freeze({
  overNameLength: `자동차 이름은 ${CAR.maxLength}자 이하만 가능합니다.`,
  nameCharacter: '자동차 이름은 알파벳 또는 한글로 입력해야합니다.',
  nameSeparator: '자동차 이름은 쉼표로 구분해야합니다.',
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
