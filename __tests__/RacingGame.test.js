const RacingGame = require('../src/domain/RacingGame');

const gameStatusSingleWinner = {
  에이든: 10,
  우코: 7,
  참새: 4,
};

const gameStatusMultiWinners = {
  에이든: 7,
  우코: 7,
  참새: 7,
};

test('가장 멀리 이동한 자동차의 위치 계산', () => {
  const maxPosition = RacingGame.findMaxPosition(gameStatusSingleWinner);
  expect(maxPosition).toEqual(10);
});

test('우승자 배열 찾기: 우승자가 1명', () => {
  const winners = RacingGame.findCarsAtPosition(gameStatusSingleWinner, 10);
  expect(winners).toEqual(['에이든']);
});

test('우승자 배열 찾기: 우승자가 여러 명', () => {
  const winners = RacingGame.findCarsAtPosition(gameStatusMultiWinners, 7);
  expect(winners).toEqual(['에이든', '우코', '참새']);
});
