const { deepFreeze } = require('../utils/common');

const GAME = deepFreeze({
  DISTANCE: {
    min: 3,
    max: 10,
  },
  MOVE_CONDITION: {
    min: 0,
    satisfaction: 4,
    max: 10,
  },
  CAR_NAME: {
    min: 1,
    max: 5,
  },
  nameDivider: ',',
  progressMarker: '-',
  blank: ' ',
  newLine: '',
});

const INPUT = Object.freeze({
  carName: `경주할 자동차 이름을 입력하세요(이름은 쉼표(${GAME.nameDivider})를 기준으로 구분).\n`,
  winningDistance: '시도할 횟수는 몇회인가요?\n',
});

const OUTPUT = deepFreeze({
  startGame: '자동차 경주 게임을 시작합니다.\n',
  resultMent: '\n실행 결과',
});

/**
 * @param {Object} 프로퍼티로 자동차의 이름과 전진한 거리를 갖는 객체
 */
const OUTPUT_RESULT = (car) => `${car.name} : ${GAME.progressMarker.repeat(car.distance)}`;

/**
 * @param {Array} 우승한 자동차의 이름을 갖는 배열
 */
const OUTPUT_WINNER = (winners) =>
  `${winners.map((winner) => winner.getName()).join(GAME.nameDivider)}가 최종 우승했습니다.`;

const ERROR = deepFreeze({
  carNameLength: `자동차 이름은 ${GAME.CAR_NAME.min}~${GAME.CAR_NAME.max}글자 사이여야 합니다.`,
  duplicatedCarName: '자동차 이름은 중복될 수 없습니다.',
  blankInCarName: '자동차 이름은 공백이 포함될 수 없습니다.',
  invalidWinningDistanceRange: `시도 횟수는 ${GAME.DISTANCE.min} 이상 ${GAME.DISTANCE.max} 미만이여야 합니다.`,
  invalidWinningDistanceType: '시도 횟수는 숫자로 입력해야 합니다.',
});

module.exports = { GAME, INPUT, OUTPUT, OUTPUT_RESULT, OUTPUT_WINNER, ERROR };
