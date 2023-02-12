const Car = require("../src/domain/Car");
const RacingGame = require("../src/controller/RacingGame");

describe("Car 모델 테스트", () => {
  test("Car 모델 전진 테스트", () => {
    let car = new Car();

    const randomMock = jest.fn();
    randomMock.mockReturnValueOnce(3).mockReturnValueOnce(6);

    car.decideGoAndStop(randomMock());
    car.decideGoAndStop(randomMock());

    const position = car.getPosition();
    expect(position).toEqual(1);
  });

  test("Car 이름 확인 테스트", () => {
    let car = new Car();

    const nameMock = jest.fn();
    nameMock.mockReturnValueOnce("patrick");
    car.inputName(nameMock());

    const name = car.getName();
    expect(name).toBe("patrick");
  });
});
