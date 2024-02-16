import Car from '../src/Car';
import Race from '../src/Race';
import CONFIG from '../src/constants/config';

describe('Race 클래스 테스트', () => {
  const carNames = ['아르', '마루', '크론'];
  let race;

  beforeEach(() => {
    race = new Race(carNames);
  });

  test('무작위 값이 4 이상이라면 자동차를 1만큼 전진시켜야 한다.', () => {
    // Arrange
    const car = new Car(carNames[0]);

    // Act
    race.moveCar(car, CONFIG.CAR_MOVING_CONDITION);

    // Assert
    expect(car.position).toBe(1);
  });

  test('무작위 값이 4 미만이라면 자동차를 전진시키지 않아야 한다.', () => {
    // Arrange
    const car = new Car(carNames[1]);

    // Act
    race.moveCar(car, CONFIG.CAR_MOVING_CONDITION - 1);

    // Assert
    expect(car.position).toBe(0);
  });

  test('getTurnResult 메서드는 호출 시점의 각 자동차의 이름과 위치값을 반환해야 한다.', () => {
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

  test('winner 메서드는 호출 시점의 최종 우승자를 배열 형태로 반환해야 한다.', () => {
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
