import Controller from "../src/controller/Controller.js";
import { getRandomNumber } from "../src/utils/getRandomNumber.js";
import Car from "../src/model/Car.js";

jest.mock("../src/utils/getRandomNumber", () => ({
  getRandomNumber: jest.fn(),
}));

describe("자동차 경주 한 라운드 테스트", () => {
  test("자동차 한 라운드 진행 후 결과 출력한다.(한대일 경우)", () => {
    getRandomNumber.mockReturnValue(5);
    const logSpy = jest.spyOn(console, "log");

    const CARS = [new Car("머핀")];

    const controller = new Controller();

    controller.gameRound(CARS);

    expect(logSpy).toHaveBeenCalledWith("머핀 : -");
  });

  test("자동차 한 라운드 진행 후 결과 출력한다.(여러대일 경우)", () => {
    getRandomNumber.mockReturnValue(5);
    getRandomNumber.mockReturnValue(3);
    const logSpy = jest.spyOn(console, "log");
    const logs = ["머핀 : -", "데이지 : "];

    const CARS = [new Car("머핀"), new Car("데이지")];

    const controller = new Controller();

    controller.gameRound(CARS);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
