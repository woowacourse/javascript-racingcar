import Car from '../src/domain/Car';
import { CONFIG } from '../src/constants';
import RaceController from '../src/controller/RaceController';
import raceWinnerController from '../src/controller/RaceWinnerController';

describe('자동차 전진 로직 검증', () => {
  describe('무작위 값이 4 이상이면 자동차를 1 전진시킨다.', () => {
    test.each([4, 5, 6, 7, 8, 9])('무작위 값이 %i 인 경우', (condition) => {
      // Arrange
      const car = new Car('아르');

      // Act
      car.move(condition);

      // Assert
      expect(car.position).toBe(1);
    });
  });

  describe('무작위 값이 4 미만이면 자동차를 전진시키지 않는다.', () => {
    test.each([0, 1, 2, 3])('무작위 값이 %i 인 경우', (condition) => {
      // Arrange
      const car = new Car('마루');

      // Act
      car.move(condition);

      // Assert
      expect(car.position).toBe(0);
    });
  });
});

describe('자동차 경주 로직 검증', () => {
  test('현재 위치값이 가장 큰 최종 우승자 1명을 판별한다.', () => {
    // Arrange
    const CAR_NAME_LIST = ['마루', '아르'];
    const CAR_LIST = CAR_NAME_LIST.map((carName) => new Car(carName));
    const TURN_COUNT = CONFIG.MIN_TURN_COUNT;
    const RANDOM_NUMBERS = [CONFIG.CAR_MOVING_CONDITION, CONFIG.CAR_MOVING_CONDITION - 1];
    const MAX_POSITION = 1;
    const RESULT_WINNER = ['마루'];
    const race = new RaceController(CAR_NAME_LIST, TURN_COUNT);

    // Act
    CAR_LIST.forEach((car, index) => {
      race.moveCar(car, RANDOM_NUMBERS[index]);
    });
    const winners = raceWinnerController.getWinner(CAR_LIST, MAX_POSITION);

    // Assert
    expect(winners).toEqual(RESULT_WINNER);
  });

  test('최종 우승자가 여러 명일 경우 쉼표로 구분한다.', () => {
    // Arrange
    const CAR_NAME_LIST = ['마루', '아르'];
    const CAR_LIST = CAR_NAME_LIST.map((carName) => new Car(carName));
    const TURN_COUNT = CONFIG.MIN_TURN_COUNT;
    const RANDOM_NUMBERS = [CONFIG.CAR_MOVING_CONDITION, CONFIG.CAR_MOVING_CONDITION];
    const MAX_POSITION = 1;
    const RESULT_WINNER = ['마루', '아르'];
    const race = new RaceController(CAR_NAME_LIST, TURN_COUNT);

    // Act
    CAR_LIST.forEach((car, index) => {
      race.moveCar(car, RANDOM_NUMBERS[index]);
    });
    const winners = raceWinnerController.getWinner(CAR_LIST, MAX_POSITION);

    // Assert
    expect(winners).toEqual(RESULT_WINNER);
  });
});
