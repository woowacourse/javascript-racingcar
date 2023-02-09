const generateRandomNumber = require("../src/lib/generateRandomNumber.js");

const Car = require("../src/model/Car.js");

describe("Car.js에 대한 테스트 코드", () => {
  test("move, getStatus 메서드에 대한 테스트 코드", () => {
    // given
    const car = new Car("pobi");
    const generateRandomNumberSpy = jest.spyOn(
      generateRandomNumber,
      "generator"
    );

    // when
    car.move(4);
    const expectedPosition = generateRandomNumberSpy.mock.results.map(
      ({ value }) => {
        return value <= 4 ? 1 : 0;
      }
    );
    const status = car.getStatus();

    // then
    expect(status).toEqual({ name: "pobi", position: expectedPosition });
  });

  test("test: getWinner 메서드에 대한 테스트 코드", () => {
    const carsStatus = [
      { name: "pobi", position: [1, 0, 1, 1, 1, 0] },
      { name: "noah", position: [1, 1, 1, 1, 1, 1] },
      { name: "jun", position: [1, 0, 0, 1, 1, 0] },
      { name: "jeremy", position: [1, 0, 0, 0, 0, 0] },
    ];

    const winner = Car.getWinner(carsStatus);

    expect(winner).toEqual(["noah"]);
  });
});
