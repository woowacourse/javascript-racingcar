import Car from "../../src/domain/Car";
import getRandomNumberInRange from "../../src/utils/getRandomNumberInRange";

jest.mock("../../src/utils/getRandomNumberInRange");

const mockRandom = (numbers) => {
  numbers.forEach((n) => {
    getRandomNumberInRange.mockReturnValueOnce(n);
  });
};

describe("Car 클래스 테스트", () => {
  test("getName 메소드를 호출하면 자동차의 이름을 반환한다.", () => {
    // Arrange
    const car = new Car("suya", 1);

    // Act
    const carName = car.getName();

    // Assert
    expect(carName).toBe("suya");
  });

  test("getPositionWhen(round) 메소드를 호출하면 해당 round의 자동차 위치를 반환한다.", () => {
    // Arrange
    const randomNumbers = [0, 4, 9];
    const expectedPositions = [0, 1, 2];

    mockRandom(randomNumbers);

    const car = new Car("suya", 3);
    for (let i = 0; i < 3; i++) {
      car.tryMove(i);
    }

    // Act
    const result = [];
    for (let i = 0; i < 3; i++) {
      const position = car.getPositionWhen(i);
      result.push(position);
    }

    console.log(expectedPositions);
    console.log(result);
    // Assert
    expect(result).toEqual(expectedPositions);
  });

  test(`getPositionWhen(round) 메소드를 호출하면 해당 round의 자동차 위치(전진한 횟수)를 반환한다.`, () => {
    // Arrange
    const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedPositions = [0, 0, 0, 0, 1, 2, 3, 4, 5, 6];

    mockRandom(randomNumbers);

    const car = new Car("suya", 10);

    for (let i = 0; i < 10; i++) {
      car.tryMove(i);
    }

    // Act
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(car.getPositionWhen(i));
    }

    // Assert
    expect(result).toEqual(expectedPositions);
  });

  test("getFinalPosition() 메소드는 최종 위치(전진 횟수)를 반환한다.", () => {
    // Arrange
    const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedFinalPosition = 6;

    mockRandom(randomNumbers);

    const car = new Car("suya", 10);

    for (let i = 0; i < 10; i++) {
      car.tryMove(i);
    }

    // Act
    const result = car.getFinalPosition();

    // Assert
    expect(result).toEqual(expectedFinalPosition);
  });
});
