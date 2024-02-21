import Car from '../src/domain/Car';
import Race from '../src/domain/Race';
import CONFIG from '../src/constant/config';
import { RACE_TEST_MESSAGE } from '../src/constant/testMessage';

describe(RACE_TEST_MESSAGE.TITLE, () => {
  const carNames = ['아르', '마루', '크론'];
  let race;

  beforeEach(() => {
    race = new Race(carNames);
  });

  test(RACE_TEST_MESSAGE.MOVE_CAR_WHEN_MET_CONDITION, () => {
    // Arrange
    const car = new Car(carNames[0]);

    // Act
    race.moveCar(car, CONFIG.CAR_MOVING_CONDITION);

    // Assert
    expect(car.position).toBe(1);
  });

  test(RACE_TEST_MESSAGE.NOT_MOVE_CAR_WHEN_MISS_CONDITION, () => {
    // Arrange
    const car = new Car(carNames[1]);

    // Act
    race.moveCar(car, CONFIG.CAR_MOVING_CONDITION - 1);

    // Assert
    expect(car.position).toBe(0);
  });

  test(RACE_TEST_MESSAGE.RETURN_CAR_POSITIONS, () => {
    // Arrange
    const carList = carNames.map((carName) => new Car(carName));
    const randomNumbers = [9, 6, 3];
    const expectedResult = [
      { name: carNames[0], position: 1 },
      { name: carNames[1], position: 1 },
      { name: carNames[2], position: 0 },
    ];
    carList.forEach((car, index) => {
      race.moveCar(car, randomNumbers[index]);
    });

    // Act
    const turnResult = race.getTurnResult(carList);

    // Assert
    expect(turnResult).toEqual(expectedResult);
  });

  test(RACE_TEST_MESSAGE.RETURN_WINNERS, () => {
    // Arrange
    const carList = carNames.map((carName) => new Car(carName));
    const randomNumbers = [9, 1, 4];
    const expectedResult = [carNames[0], carNames[2]];
    carList.forEach((car, index) => {
      race.moveCar(car, randomNumbers[index]);
    });

    // Act
    const winner = race.getWinner(carList);

    // Assert
    expect(winner).toEqual(expectedResult);
  });
});
