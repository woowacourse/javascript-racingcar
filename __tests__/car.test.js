const Car = require('../src/domain/Car.js');
const { RULES } = require('../src/constant/Conditions.js');

describe('자동차 객체 테스트', () => {
  test.each([
    [1, 0],
    [4, 1],
  ])('랜덤 값에 의한 자동차의 전진, 정지 유무 테스트(4이상일 시 전진, 4 미만일 시 정지)', (randomNumber, distance) => {
    const carName = '붕붕이';
    const car = new Car(carName);

    expect(car.tryMove(randomNumber).distance).toBe(distance);
  });

  test('우승 자동차 테스트 - winningDistance에 도달하지 못한 자동차는 undefined 출력', () => {
    const carName = '붕붕이';
    const car = new Car(carName);
    const winner = undefined;
    const winningDistance = 4;

    // 두 번 전진
    car.tryMove(RULES.minMoveCondition);
    car.tryMove(RULES.minMoveCondition);

    expect(car.isWinner(winningDistance)).toBe(winner);
  });

  test('우승 자동차 테스트 - winningDistance에 도달한 자동차는 해당 자동차 이름 출력', () => {
    const carName = '빵빵이';
    const car = new Car(carName);
    const winner = '빵빵이';
    const winningDistance = 2;

    // 두 번 전진
    car.tryMove(RULES.minMoveCondition);
    car.tryMove(RULES.minMoveCondition);

    expect(car.isWinner(winningDistance)).toBe(winner);
  });
});
