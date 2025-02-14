import Controller from "../src/controller/Controller.js";
import { getRandomNumber } from "../src/utils/getRandomNumber.js";
import Car from "../src/model/Car.js";

jest.mock("../src/utils/getRandomNumber", () => ({
  getRandomNumber: jest.fn(),
}));

describe("자동차 경주 테스트", () => {
  test("경주 완료 후 전진 정도가 변화한다.", () => {
    // given
    getRandomNumber
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2);

    const CARS = [new Car("머핀"), new Car("데이지")];
    const RESULT = [1, 0];
    const TRY_COUNT = 2;

    const controller = new Controller();

    //when
    controller.runRace(CARS, TRY_COUNT);

    //then
    CARS.forEach((car, index) => {
      expect(car.position).toEqual(RESULT[index]);
    });
  });
});

describe("최종 우승자 선별 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test("최종 우승자를 뽑고 출력한다.(우승자가 1명인 경우)", () => {
    const logSpy = jest.spyOn(console, "log");

    const CARS = [
      { name: "데이지", position: 3 },
      { name: "머핀", position: 1 },
    ];

    const controller = new Controller();
    controller.findWinner(CARS);

    expect(logSpy).toHaveBeenCalledWith("최종 우승자: 데이지");
  });

  test("최종 우승자를 뽑고 출력한다.(우승자가 2명 이상인 경우", () => {
    const logSpy = jest.spyOn(console, "log");

    const CARS = [
      { name: "데이지", position: 5 },
      { name: "머핀", position: 5 },
      { name: "메리", position: 2 },
    ];

    const controller = new Controller();
    controller.findWinner(CARS);

    expect(logSpy).toHaveBeenCalledWith("최종 우승자: 데이지, 머핀");
  });
});
describe("자동차 경주 한 라운드 테스트", () => {
  test("자동차 한 라운드 진행 후 결과 출력한다.(한대일 경우)", () => {
    getRandomNumber.mockReturnValue(5);
    const logSpy = jest.spyOn(console, "log");

    const CARS = [new Car("머핀")];

    const controller = new Controller();

    controller.runRound(CARS);

    expect(logSpy).toHaveBeenCalledWith("머핀 : -");
  });

  test("자동차 한 라운드 진행 후 결과 출력한다.(여러대일 경우)", () => {
    getRandomNumber.mockReturnValueOnce(5).mockReturnValue(3);
    const logSpy = jest.spyOn(console, "log");
    const logs = ["머핀 : -", "데이지 : "];

    const CARS = [new Car("머핀"), new Car("데이지")];

    const controller = new Controller();

    controller.runRound(CARS);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
