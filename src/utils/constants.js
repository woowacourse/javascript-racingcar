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
  nameDivider: ',',
  progressMarker: '-',
});

const INPUT = deepFreeze({
  carName: `경주할 자동차 이름을 입력하세요(이름은 쉼표(${GAME.nameDivider})를 기준으로 구분).`,
  winningDistance: '시도할 횟수는 몇회인가요?',
});

const OUTPUT = deepFreeze({
  startGame: '자동차 경주 게임을 시작합니다.',
  result: (car) => `${car.name} : ${GAME.progressMarker.repeat(car.distance)}`,
  winner: (winners) =>
    `${winners.map((winner) => winner.getName()).join(GAME.nameDivider)}가 최종 우승했습니다.`,
});

module.exports = { GAME, INPUT, OUTPUT };
