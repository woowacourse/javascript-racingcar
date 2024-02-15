import Controller from "../src/Controller/Controller";
import Car from "../src/Model/Car";

describe("Controller 객체 테스트", () => {
  test.each([
    [
      [
        ["리버", 3],
        ["러기", 5],
        ["헤일리", 5],
      ],
      ["러기", "헤일리"],
    ],
    [
      [
        ["리버", 0],
        ["러기", 0],
        ["헤일리", 0],
      ],
      [],
    ],
  ])("우승자 계산을 해야된다.", (info, expectedValue) => {
    // arrange
    const controller = new Controller();
    const cars = info.map(([name, distance]) => {
      const car = new Car(name);
      car.getName = jest.fn(() => name);
      car.getDistance = jest.fn(() => distance);
      return car;
    });

    // action
    const { winners } = controller.calculateWinners(cars);

    // assert
    expect(winners.map((car) => car.getName())).toStrictEqual(expectedValue);
  });
});
