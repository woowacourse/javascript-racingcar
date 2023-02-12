const { deepFreeze } = require('./common');

const GAME = deepFreeze({
  DISTANCE: {
    min: 3,
    max: 10,
  },
  MOVE_CONDITION: {
    // 랜덤 생성된 값 x가 mid <= x < max 인 경우에 전진
    min: 0,
    mid: 4,
    max: 10,
  },
  CAR_NAME: {
    min: 1,
    max: 5,
  },
  nameDivider: ',',
  progressMarker: '-',
  blank: ' ',
});

const MESSAGE = deepFreeze({
  INPUT: {
    carName: `경주할 자동차 이름을 입력하세요(이름은 쉼표(${GAME.nameDivider})를 기준으로 구분).\n`,
    winningDistance: '시도할 횟수는 몇회인가요?\n',
  },

  OUTPUT: {
    startGame: '자동차 경주 게임을 시작합니다.\n',
    notifyResult: '\n실행 결과',
    isWinner: `가 최종 우승했습니다.`,
  },
});

const ERROR = deepFreeze({
  carNameLength: `자동차 이름은 ${GAME.CAR_NAME.min}~${GAME.CAR_NAME.max}글자 사이여야 합니다.`,
  duplicatedCarName: '자동차 이름은 중복될 수 없습니다.',
  blankInCarName: '자동차 이름은 공백이 포함될 수 없습니다.',
  invalidWinningDistanceRange: `시도 횟수는 ${GAME.DISTANCE.min} 이상 ${GAME.DISTANCE.max} 미만이여야 합니다.`,
  invalidWinningDistanceType: '시도 횟수는 숫자로 입력해야 합니다.',
});

module.exports = { GAME, MESSAGE, ERROR };
